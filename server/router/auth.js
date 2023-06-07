const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");
const UserProfile = require("../model/userProfileSchema");
const PERSONS = require("../model/personSchema");
const Credentials = require("../model/credentialSchema");

/**
 *
 *
 * @@@ Checks PROFILE_TYPE and PROFILE_NAME in ARC_USER_PROFILES collection and if they exist retrieves USER_ID.
 *
 * @@@ If USER_ID exists in ARC_USER_CREDENTIALS Collection, verifies PASSWORD
 *
 */

router.post("/login", async (req, res) => {
  try {
    let token;
    const { PROFILE_TYPE, PROFILE_NAME, PASSWORD } = req.body;
    if (!PROFILE_TYPE && !PROFILE_NAME && !PASSWORD) {
      return res.status(400).json({ error: "Please fillup the Data!" });
    }

    const profileNameExist = await UserProfile.findOne({
      PROFILE_NAME: PROFILE_NAME,
    });
    const profileTypeExist = await UserProfile.findOne({
      PROFILE_TYPE: PROFILE_TYPE,
    });
    if (profileNameExist && profileTypeExist) {
      const USER_ID = profileNameExist.USER_ID;
      // res.send(userId);
      // res.json({ uid: userId });
      // console.log(userId);

      // check user ID
      const userIdExist = await Credentials.findOne({ USER_ID: USER_ID });

      if (userIdExist) {
        const isMatched = await bcrypt.compare(PASSWORD, userIdExist.PASSWORD);
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
