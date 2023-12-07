const router = require("express").Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersCOntroller");

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
