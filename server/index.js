const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

const port = 9000 || process.env.PORT;

// const path = require("path");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(require("./router/user"));
app.use(require("./router/auth"));
app.use(require("./router/task"));
app.use(require("./router/profile"));
app.use(require("./router/enterpriseSetting"));
app.use(require("./router/role"));
app.use(require("./router/userstep"));

//flask wrappers
app.use(require("./router/testflask"));

// app.use(express.static(path.join(__dirname, "/client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });

app.get("/", (req, res) => {
  res.send("Arc-ng Server is Running 😎!");
});
const handleEADDRINUSEError = (err, req, res, next) => {
  if (err.code === "EADDRINUSE") {
    // The port is already in use
    res.status(503).send("The server is unavailable. Please try again later.");
  } else {
    // Another type of error occurred
    next(err);
  }
};

app.use(handleEADDRINUSEError);

app.listen(port, () => {
  console.log("Listening to the port: ", port);
});
