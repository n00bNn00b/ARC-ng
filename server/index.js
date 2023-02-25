const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Diginventory Server is Running!");
});

app.listen(port, () => {
  console.log("Listening to the port: ", port);
});
