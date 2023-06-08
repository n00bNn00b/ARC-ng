const mongoose = require("mongoose");

const enterpriseSettingSchema = mongoose.Schema({
  TENANT_ID: {
    type: Number,
    required: [true, "Please Enter Enterprise Name!"],
  },
  TENANT_NAME: {
    type: String,
    required: [true, "Please Enter Tenant Name!"],
  },
  ENTERPRISE_NAME: {
    type: String,
    required: [true, "Please Enter Enterprise Name!"],
  },
  ENTERPRISE_TYPE: {
    type: String,
    required: [true, "Please Enter Enterprise  Type!"],
  },
});
const EnterpriseSetting = mongoose.model(
  "ARC_TENANT_ENTERPRISE_SETUP",
  enterpriseSettingSchema
);

module.exports = EnterpriseSetting;
