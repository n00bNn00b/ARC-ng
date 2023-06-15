const mongoose = require("mongoose");

const userGrantedRoleSchema = new mongoose.Schema({
  USER_ID: {
    type: Number,
  },
  ROLE_ID: {
    type: Number,
  },
});
const UserGrantedRole = mongoose.model(
  "USER_GRANTED_ROLE",
  userGrantedRoleSchema
);

module.exports = UserGrantedRole;
