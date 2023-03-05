const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000 || process.env.PORT;
require("dotenv").config();
app.use(express.json());

require("./db/conn");
const User = require("./model/userSchema");

app.use(require("./router/auth"));

app.get("/", (req, res) => {
  res.send("Arc-ng Server is Running!");
});

app.listen(port, () => {
  console.log("Listening to the port: ", port);
});
