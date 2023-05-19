const mongoose = require("mongoose");
const userProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  //   tokens: [
  //     {
  //       token: {
  //         type: String,
  //         required: true,
  //       },
  //     },
  //   ],
});

const UserProfile = mongoose.model("USERPROFILE", userProfileSchema);
module.exports = UserProfile;
