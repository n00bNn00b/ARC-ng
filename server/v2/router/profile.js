const express = require("express");
const router = express.Router();

// const PERSONS = require("../model/personSchema");
const User = require("../model/User");
// router.get("/api/v2/person", async (req, res) => {
//   const persons = await PERSONS.findAll();
//   res.send(persons);
// });

router.post("/api/v2/person", async (req, res) => {
  await User.create(req.body);
  res.send("person added!");
});

module.exports = router;
