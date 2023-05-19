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
    username,
    password,
    confirmPassword,
  } = req.body;
  if (!firstName || !jobtitle || !username || !password || !confirmPassword) {
    return res
      .status(422)
      .json({ error: "Please fill the required field properly!" });
  }
  try {
    const userIdExist = await User.findOne({ userId: userId });
    // const userProfileIdExist = await UserProfile.findOne({ userId: userId });
    const usernameExist = await UserProfile.findOne({
      username: username,
    });

    if (usernameExist && userIdExist) {
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
        username,
      });
      await user.save();
      await userProfile.save();
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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fillup the Data!" });
    }
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin.name, " : username");
    if (userLogin) {
      const isMatched = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 604800000), //7days cookies
        httpOnly: true,
      });
      if (!isMatched) {
        res.json({ error: "Invalid Credentials!" });
      } else {
        res.json({
          message: "Welcome " + userLogin.name + ", Login Successful!",
        });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/loginwithusername", async (req, res) => {
  try {
    let token;
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please fillup the required data!" });
    }
    const usernameLogin = await User.findOne({ username: username });
    if (usernameLogin) {
      const isMatched = await bcrypt.compare(password, usernameLogin.password);
      token = usernameLogin.generateAuthToken();
      console.log("usernameToken: ", token);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 604800000), //7days cookies
        httpOnly: true,
      });
      if (!isMatched) {
        res.json({ error: "Invalid Credentials!" });
      } else {
        res.json({
          message: "Welcome " + usernameLogin.name + ", Login Successful!",
        });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
