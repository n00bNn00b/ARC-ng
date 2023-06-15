const express = require("express");
const router = express.Router();

require("../db/conn");
const Role = require("../model/arcRoleSchema");
const UserGrantedRole = require("../model/userGrantedRoleSchema");

////add  role
router.post("/addRole/", async (req, res) => {
  const roleList = req.body;
  if (!roleList) {
    return res.status(422).json({
      error: "Please fill the required field!",
    });
  }

  try {
    const role = await Role.create(roleList);
    res.status(200).json(role);
  } catch (err) {
    console.log(err);
  }
});

//get all role

router.get("/roles/", async (req, res) => {
  try {
    const roles = await Role.find({});
    res.status(200).json(roles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

//  usergenerated Role table

router.get("/userrole/", async (req, res) => {
  try {
    const roles = await UserGrantedRole.find({});
    res.status(200).json(roles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Create a new user granted role
router.post("/userroleset/", async (req, res) => {
  try {
    const { USER_ID, ROLE_ID } = req.body;
    console.log(req.body);

    // Check if a user with the same ROLE_ID already exists
    const existingUser = await UserGrantedRole.findOne({ USER_ID, ROLE_ID });
    if (existingUser) {
      return res
        .status(400)
        .json({
          message: "User with the same USER_ID and ROLE_ID already exists",
        });
    }

    // Create a new instance of UserGrantedRole
    const userGrantedRole = new UserGrantedRole({
      USER_ID,
      ROLE_ID,
    });

    // Save the user granted role to the database
    const savedUserGrantedRole = await userGrantedRole.save();

    res.status(201).json(savedUserGrantedRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//get specific user roles
// router.get("/roles/:userId", async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     // Find all roles for the given USER_ID
//     const roles = await UserGrantedRole.find({ USER_ID: userId });

//     if (!roles || roles.length === 0) {
//       return res.status(404).json({ message: "Roles not found for the given user ID" });
//     }

//     res.status(200).json(roles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get("/notroles/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find all roles for the given USER_ID
    const userRoles = await UserGrantedRole.find({ USER_ID: userId });
    let roles;
    if (!userRoles || userRoles.length === 0) {
      roles = await Role.find({});
      //return res.status(404).json({ message: "Roles not found for the given user ID" });
    } else {
      // Extract the ROLE_IDs from userRoles
      const roleIds = userRoles.map((userRole) => userRole.ROLE_ID);

      // Find the roles in the Role table matching the extracted ROLE_IDs
      roles = await Role.find({ ROLE_ID: { $nin: roleIds } });
    }

    if (!roles || roles.length === 0) {
      return res
        .status(404)
        .json({ message: "Roles not found in the Role table" });
    }

    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// roles assigned to a specific user
router.get("/roleassigned/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find all roles for the given USER_ID
    const userRoles = await UserGrantedRole.find({ USER_ID: userId });
    let roles;
    if (!userRoles || userRoles.length === 0) {
      return res
        .status(404)
        .json({ message: "Roles not found for the given user ID" });
    }

    // Extract the ROLE_IDs from userRoles
    const roleIds = userRoles.map((userRole) => userRole.ROLE_ID);

    // Find the roles in the Role table matching the extracted ROLE_IDs
    roles = await Role.find({ ROLE_ID: { $in: roleIds } });

    if (!roles || roles.length === 0) {
      return res
        .status(404)
        .json({ message: "Roles not found in the Role table" });
    }

    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

deleteroles;
// delete in user generated table role and user
router.delete("//:userId/:roleId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const roleId = req.params.roleId;

    // Find the user role in the UserGrantedRole table
    const userRole = await UserGrantedRole.findOne({
      USER_ID: userId,
      ROLE_ID: roleId,
    });

    if (!userRole) {
      return res.status(404).json({ message: "User role not found" });
    }

    // Delete the user role
    await UserGrantedRole.deleteOne({ USER_ID: userId, ROLE_ID: roleId });

    res.status(200).json({ message: "User role deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
