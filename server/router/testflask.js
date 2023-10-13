const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/flask_users", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/users");
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
router.post("/flask_login", async (req, res) => {
  const { user_name, password } = req.body;

  try {
    const response = await axios.post("http://127.0.0.1:5000/login", {
      user_name,
      password,
    });

    if (response.status === 200) {
      res.send(response.data);
    } else {
      res.status(response.status).send(response.data.error);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// Check if the response was successful
// if (response.statusCode === 200) {
//   // The user was successfully logged in
//   res.status(200).json({ message: "User successfully logged in", response });
// } else {
//   // There was an error logging in the user
//   res.status(401).json({ error: "There was an error logging in the user" });
// }

router.get("/flask_user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`http://127.0.0.1:5000/users/${id}`);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
