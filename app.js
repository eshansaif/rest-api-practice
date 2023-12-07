const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).send({
    message: "Page not found",
  });
});

app.get((err, req, res, next) => {
  res.status(500).send({
    message: "something broken",
  });
});

module.exports = app;
