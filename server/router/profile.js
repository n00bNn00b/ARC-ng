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

/****
 *
 * @ Add new Profile for specific User or self
 *
 */

router.post("/addprofile", async (req, res) => {
  const { userId, profileType, profileID } = req.body;
  try {
    const userProfile = new UserProfile({
      userId,
      profileType,
      profileID,
    });

    await userProfile.save();
    // console.log(user);
    res.status(201).json({ message: "A Profile Has been added!" });
  } catch (error) {
    res.status(422).json({ message: "Profile Adding Failed!" });
  }
});

/***
 *
 * @@ Update specific user profile
 *
 */
router.get("/updateuserprofile/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const profile = await UserProfile.findById(id);
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
