const mongoose = require("mongoose");

const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(DB)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB not connected:\n", err));
