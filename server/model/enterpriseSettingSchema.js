const mongoose = require("mongoose");

const enterpriseSettingSchema = mongoose.Schema({
    tenantId:{
        type: Number,
        required: [true, "Please Enter Enterprise Name!"],
    },
    enterpriseName: {
        type: String,
        required: [true, "Please Enter Enterprise Name!"],
      },
    enterpriseType: {
        type: String,
        required: [true, "Please Enter Enterprise  Type!"],
      },
});
const EnterpriseSetting = mongoose.model("EnterPriseSetting", enterpriseSettingSchema);

module.exports = EnterpriseSetting;