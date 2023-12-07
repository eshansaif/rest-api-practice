const { v4: uuidv4 } = require("uuid");

let { users } = require("../models/usersModel");
const app = require("../app");
const getUsers = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Users data found successfully",
      data: users,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Users not found",
    });
  }
};

const createUser = (req, res) => {
  try {
    const newUser = {
      id: uuidv4(),
      username: req.body.username,
      email: req.body.email,
    };
    users.push(newUser);
    res.status(201).json(users);
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Users not created",
    });
  }
};

const updateUser = (req, res) => {
  try {
    const id = req.params.id;
    const { username, email } = req.body;

    let user = users.find((user) => (user.id = id));
    (user.username = username), (user.email = email);

    res.status(200).send({
      success: true,
      message: "User updated",
      data: user,
    });
  } catch (error) {
    res.status(404).send({
      code: statusCode,
      message: "User not found",
    });
  }
};

const deleteUser = (req, res) => {
  try {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
      users,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "User not deleted",
    });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
