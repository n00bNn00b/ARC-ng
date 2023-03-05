const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/register", (req, res) => {
  res.send("OK");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;
  if (!name || !email || !phone || !password || !confirmPassword) {
    return res
      .status(422)
      .json({ error: "Please fill the required field properly!" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res
        .status(422)
        .json({ error: "An user already exist with this email!" });
    } else if (password !== confirmPassword) {
      return res.status(422).json({ error: "Password did not match!" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        password,
        confirmPassword,
      });
      await user.save();
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
    // console.log(userLogin);
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
        res.json({ message: "User Login Successful" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
