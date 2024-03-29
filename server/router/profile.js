const express = require("express");
const router = express.Router();

const UserProfile = require("../model/userProfileSchema");
const User = require("../model/userSchema");
const PERSONS = require("../model/personSchema");
const authenticate = require("../middleware/authenticate");
// get user profile
router.get("/persons", authenticate, async (req, res) => {
  try {
    const userProffiles = await PERSONS.find({});
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
router.get("/userprofile/:id", authenticate, async (req, res) => {
  try {
    const id = req.params?.id;
    console.log("my: ", id);
    const profiles = await UserProfile.find({ USER_ID: id });
    res.status(200).json(profiles);
  } catch (error) {
    console.log(error);
  }
});

//get user data
router.get("/users", authenticate, async (req, res) => {
  try {
    const users = await PERSONS.find({});
    const data = users.map((user) => ({
      _id: user._id,
      USER_ID: user.USER_ID,
      FIRST_NAME: user.FIRST_NAME,
      MIDDLE_NAME: user.MIDDLE_NAME,
      LAST_NAME: user.LAST_NAME,
      JOB_TITLE: user.JOB_TITLE,
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

router.post("/addprofile", authenticate, async (req, res) => {
  const { USER_ID, PROFILE_TYPE, PROFILE_NAME } = req.body;
  try {
    const profileNameExist = await UserProfile.findOne({
      PROFILE_NAME: PROFILE_NAME,
    });
    const profileTypeExist = await UserProfile.findOne({
      PROFILE_TYPE: PROFILE_TYPE,
    });
    if (profileNameExist && profileTypeExist) {
      return res
        .status(422)
        .json({ error: "A Profile already exists with the following inputs!" });
    } else {
      const userProfile = new UserProfile({
        USER_ID,
        PROFILE_TYPE,
        PROFILE_NAME,
      });

      await userProfile.save();
      // console.log(user);
      res.status(201).json({ message: "A Profile Has been added!" });
    }
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
