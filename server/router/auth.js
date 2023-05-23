const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");
const UserProfile = require("../model/userProfileSchema");

router.post("/addUser", async (req, res) => {
  const {
    userId,
    firstName,
    middleName,
    lastName,
    jobtitle,
    profileType,
    profileID,
    password,
    confirmPassword,
  } = req.body;
  if (!firstName || !jobtitle || !profileID || !password || !confirmPassword) {
    return res
      .status(422)
      .json({ error: "Please fill the required field properly!" });
  }
  try {
    const userIdExist = await User.findOne({ userId: userId });
    // const userProfileIdExist = await UserProfile.findOne({ userId: userId });
    const profileIDExist = await UserProfile.findOne({
      profileID: profileID,
    });

    if (profileIDExist && userIdExist) {
      return res.status(422).json({ error: "A user already exists!" });
    } else if (password !== confirmPassword) {
      return res.status(422).json({ error: "Password did not match!" });
    } else {
      const user = new User({
        userId,
        firstName,
        middleName,
        lastName,
        jobtitle,
        password,
        confirmPassword,
      });

      const userProfile = new UserProfile({
        userId,
        profileType,
        profileID,
      });
      await user.save();
      await userProfile.save();
      // console.log(user);
      res.status(201).json({ message: "User registration successful" });
    }
    //
  } catch (err) {
    console.log(err);
  }

  //   console.log(req.body);
  //   res.json({ message: req.body });
});

router.post("/login", async (req, res) => {
  try {
    let token;
    const { profileType, profileID, password } = req.body;
    if (!profileType && !profileID && !password) {
      return res.status(400).json({ error: "Please fillup the Data!" });
    }

    const profileIDExist = await UserProfile.findOne({ profileID: profileID });
    const profileTypeExist = await UserProfile.findOne({
      profileType: profileType,
    });
    if (profileIDExist && profileTypeExist) {
      const userId = profileIDExist.userId;
      // res.send(userId);
      // res.json({ uid: userId });
      // console.log(userId);

      // check user ID
      const userIdExist = await User.findOne({ userId: userId });

      if (userIdExist) {
        const isMatched = await bcrypt.compare(password, userIdExist.password);
        token = await userIdExist.generateAuthToken();
        console.log("token: ", token);
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 604800000), //7days cookies
          httpOnly: true,
        });
        if (!isMatched) {
          res.json({ error: "Invalid Credentials!" });
        } else {
          res.json({
            message: "Login Successful!",
          });
        }
      } else {
        res.status(400).json({ error: "Invalid Credentials!" });
      }
    } else {
      res.status(404).json({ error: "User not found!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
