const mongoose = require("mongoose");

const roleTypeSchema = new mongoose.Schema({
    ROLE_TYPE: {
        type: String,
      },
    ROLE_TYPE_NAME: {
        type: String,
      },
} );
const RoleTypes = mongoose.model("ARC_ROLE_TYPES",roleTypeSchema);

module.exports = RoleTypes;
