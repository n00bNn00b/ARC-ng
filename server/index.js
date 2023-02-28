const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000 || process.env.PORT;
require("dotenv").config();

const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(DB)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("DB not connected:\n", err));

app.get("/", (req, res) => {
  res.send("Arc-ng Server is Running!");
});

app.listen(port, () => {
  console.log("Listening to the port: ", port);
});
