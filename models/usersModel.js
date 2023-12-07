const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Shanjeed Saif",
    email: "eshansaif@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Tuham Saif",
    email: "evansaif@gmail.com",
  },
];

module.exports = { users };
