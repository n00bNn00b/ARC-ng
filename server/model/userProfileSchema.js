const mongoose = require("mongoose");
const userProfileSchema = new mongoose.Schema({
  USER_ID: {
    type: Number,
    required: true,
  },
  PROFILE_TYPE: {
    type: String,
  },
  PROFILE_NAME: {
    type: String,
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

const UserProfile = mongoose.model("ARC_USER_PROFILES", userProfileSchema);
module.exports = UserProfile;
