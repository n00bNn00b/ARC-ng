const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  USER_ID: {
    type: Number,
  },
  CREATED_BY: {
    type: String,
    // required: true,
  },
  CREATED_ON: {
    type: Date,
    // required: true,
  },
  LAST_UPDATED_BY: {
    type: String,
    // required: true,
  },
  LAST_UPDATED_ON: {
    type: Date,
    // required: true,
  },
  TENANT_ID: {
    type: Number,
  },
});

const User = mongoose.model("ARC_USERS", userSchema);

module.exports = User;
