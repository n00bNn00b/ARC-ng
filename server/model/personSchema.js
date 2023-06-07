const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  USER_ID: {
    type: Number,
    required: true,
  },
  FIRST_NAME: {
    type: String,
    required: true,
  },
  MIDDLE_NAME: {
    type: String,
  },
  LAST_NAME: {
    type: String,
  },
  JOB_TITLE: {
    type: String,
    required: true,
  },
  LINE_MANAGER_USER_ID: {
    type: Number,
  },
});

const PERSONS = mongoose.model("ARC_PERSONS", personSchema);

module.exports = PERSONS;
