const mongoose = require("mongoose");
const arcRoleSchema = new mongoose.Schema({
  ROLE_ID: {
    type: Number,
  },
  ROLE_TYPE: {
    type: String,
  },
  ROLE_TYPE_NAME: {
    type: String,
  },
});
const Role = mongoose.model("ARC_ROLES", arcRoleSchema);

module.exports = Role;
