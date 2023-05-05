const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5000 || process.env.PORT;
require("dotenv").config();
app.use(express.json());
app.use(cors());

require("./db/conn");
const User = require("./model/userSchema");
const Task = require("./model/taskSchema");

app.use(require("./router/auth"));
app.use(require("./router/task"));

app.get("/", (req, res) => {
  res.send("Arc-ng Server is Running!");
});

app.listen(port, () => {
  console.log("Listening to the port: ", port);
});
