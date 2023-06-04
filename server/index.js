const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000 || process.env.PORT;
const path = require("path");
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use(require("./router/auth"));
app.use(require("./router/task"));
app.use(require("./router/profile"));

app.use(express.static(path.join(__dirname, "/client/build")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
app.get("/", (req, res) => {
  res.send("Arc-ng Server is Running 😎!");
});

app.listen(port, () => {
  console.log("Listening to the port: ", port);
});
