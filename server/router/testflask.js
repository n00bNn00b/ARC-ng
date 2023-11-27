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

    // console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/flask_user", async (req, res) => {
  const {
    user_name,
    first_name,
    last_name,
    email_address,
    password,
    privilege_names,
    role_names,
  } = req.body;

  const token = req.headers.authorization;
  console.log("token: ", token);
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/users",
      {
        user_name,
        first_name,
        last_name,
        email_address,
        password,
        privilege_names,
        role_names,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    // console.log("response flask: ", response.data);
    console.log("status code: ", response.status);

    if (response.status === 201) {
      res.json(response.data);
    } else if (response.status === 500) {
      res.send("Already exists");
    }
  } catch (error) {
    console.log("errors: ", error);
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

// change pass
router.post("/flask_change", async (req, res) => {
  const { old_password, new_password } = req.body;
  const token = req.headers.authorization;
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/reset_user_password",
      {
        old_password,
        new_password,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});
//put method
router.put("/flask_users/:id", async (req, res) => {
  const id = req.params.id;
  const { user_name, first_name, last_name, email_address } = req.body;
  try {
    axios
      .put(`http://127.0.0.1:5000/users/${id}`, {
        user_name,
        first_name,
        last_name,
        email_address,
      })
      .then((response) => res.send(response.data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
});

// postgres

router.post("/pglogin", async (req, res) => {
  const { email_or_username, password } = req.body;
  try {
    const response = await axios.post("http://127.0.0.1:5000/login", {
      email_or_username,
      password,
    });
    // console.log(response);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

//add user
router.post("/pgusers", async (req, res) => {
  const {
    user_id,
    username,
    first_name,
    middle_name,
    last_name,
    job_title,
    created_by,
    created_on,
    last_updated_by,
    last_updated_on,
    tenant_id,
    email_address,
    password,
    privilege_names,
    role_names,
  } = req.body;
  const token = req.headers.authorization;
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/users",
      {
        user_id,
        username,
        first_name,
        middle_name,
        last_name,
        job_title,
        created_by,
        created_on,
        last_updated_by,
        last_updated_on,
        tenant_id,
        email_address,
        password,
        privilege_names,
        role_names,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
