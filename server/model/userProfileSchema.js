const mongoose = require("mongoose");
const userProfileSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  profileType: {
    type: String,
    required: true,
  },
  profileID: {
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
