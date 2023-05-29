const express = require("express");
const router = express.Router();

const UserProfile = require("../model/userProfileSchema");
const User = require("../model/userSchema");
// get user profile
router.get("/userProfiles", async (req, res) => {
  try {
    const userProffiles = await UserProfile.find({});
    // const data = userProffiles.map((profile) => ({
    //   userId: profile.userId,
    //   profileID: profile.profileID,
    // }));
    // res.json(data);
    res.status(200).json(userProffiles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
// specific profile
router.get("/userprofile/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const profiles = await UserProfile.find({ userId: id });
    res.status(200).json(profiles);
  } catch (error) {
    console.log(error);
  }
});

//get user data
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    const data = users.map((user) => ({
      _id: user._id,
      userId: user.userId,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      jobtitle: user.jobtitle,
    }));
    res.status(200).json(data);
    // res.send(data);
  } catch (error) {
    console.log(error);
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
 * @@ Get specific user profile
 *
 */
router.get("/updateuserprofile/:id", async (req, res) => {
  try {
    const id = req.params?.id;
    if (id === null) {
      res.json({ message: "waiting!" });
    }
    const profile = await UserProfile.findById(id);
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
