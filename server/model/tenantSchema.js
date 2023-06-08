const mongoose = require("mongoose");

const tenantSchema = mongoose.Schema({
  TENANT_ID: {
    type: Number,
    required: [true, "Please Enter Enterprise Name!"],
  },
  TENANT_NAME: {
    type: String,
    required: [true, "Please Enter Tenant Name!"],
  },
});
const Tenant = mongoose.model("ARC_TENANTS", tenantSchema);

module.exports = Tenant;
