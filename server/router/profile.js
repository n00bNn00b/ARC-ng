const express = require("express");
const router = express.Router();

const UserProfile = require("../model/userProfileSchema");
// get user profile
router.get("/userProfiles", async (req, res) => {
  try {
    const userProffiles = await UserProfile.find({});
    res.status(200).json(userProffiles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
