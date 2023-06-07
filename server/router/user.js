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
 * @@@ User stores USER_ID, CREATED_BY, CREATED_ON, LAST_UPDATED_BY, LAST_UPDATED_ON, TENANT_ID
 *
 * @@@ PERSONS stores USER_ID, FIRST_NAME, MIDDLE_NAME, LAST_NAME, JOB_TITLE, LINE_MANAGER_USER_ID,
 *
 * @@@ UserProfile stores USER_ID, PROFILE_TYPE, PROFILE_NAME
 *
 * @@@ Credentials stores USER_ID and PASSWORD
 *
 *
 */

router.post("/addUser", async (req, res) => {
  const {
    USER_ID,
    FIRST_NAME,
    MIDDLE_NAME,
    LAST_NAME,
    JOB_TITLE,
    CREATED_BY,
    CREATED_ON,
    LAST_UPDATED_BY,
    LAST_UPDATED_ON,
    LINE_MANAGER_USER_ID,
    TENANT_ID,
    PROFILE_TYPE,
    PROFILE_NAME,
    PASSWORD,
  } = req.body;
  //   console.log(req.body);
  if (!FIRST_NAME || !JOB_TITLE || !PROFILE_NAME || !PASSWORD) {
    return res
      .status(422)
      .json({ error: "Please fill the required field properly!" });
  }
  try {
    const userIdExist = await PERSONS.findOne({ USER_ID: USER_ID });
    const profileNameExist = await UserProfile.findOne({
      PROFILE_NAME: PROFILE_NAME,
    });
    const userIDinCreds = await Credentials.findOne({ USER_ID: USER_ID });

    if (profileNameExist && userIdExist && userIDinCreds) {
      return res.status(422).json({ error: "A user already exists!" });
    } else {
      const person = new PERSONS({
        USER_ID,
        FIRST_NAME,
        MIDDLE_NAME,
        LAST_NAME,
        JOB_TITLE,
      });

      const profile = new UserProfile({
        USER_ID,
        PROFILE_TYPE,
        PROFILE_NAME,
      });

      const user = new User({
        USER_ID,
        CREATED_BY,
        CREATED_ON,
        LAST_UPDATED_BY,
        LAST_UPDATED_ON,
        TENANT_ID,
      });

      const credential = new Credentials({
        USER_ID,
        PASSWORD,
      });
      await person.save();
      await profile.save();
      await user.save();
      await credential.save();
      //   console.log(person);
      //   console.log(profile, "profile");
      //   console.log(credential, "cred");
      res.status(201).json({ message: "User registration successful!" });
    }
    //
  } catch (err) {
    console.log(err);
  }

  //   console.log(req.body);
  //   res.json({ message: req.body });
});

module.exports = router;
