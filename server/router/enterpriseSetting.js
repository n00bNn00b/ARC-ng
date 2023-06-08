const express = require("express");
const router = express.Router();
require("../db/conn");
const EnterpriseSetting = require("../model/enterpriseSettingSchema");
const Tenant = require("../model/tenantSchema");

router.post("/addEnterprise/", async (req, res) => {
  const { TENANT_ID, TENANT_NAME, ENTERPRISE_NAME, ENTERPRISE_TYPE } = req.body;

  if (!ENTERPRISE_NAME || !ENTERPRISE_TYPE || !TENANT_ID || !TENANT_NAME) {
    return res.status(422).json({
      error: "Please fill all the required fields!",
    });
  }

  try {
    const enterprise = await EnterpriseSetting.findOneAndUpdate(
      { TENANT_ID },
      { $set: { TENANT_NAME, ENTERPRISE_NAME, ENTERPRISE_TYPE } },
      { new: true }
    );

    if (!enterprise) {
      // If the enterprise is not found, create a new one
      const newEnterprise = await EnterpriseSetting.create({
        TENANT_ID,
        TENANT_NAME,
        ENTERPRISE_NAME,
        ENTERPRISE_TYPE,
      });

      const tenant = new Tenant({
        TENANT_ID,
        TENANT_NAME,
      });
      await tenant.save();

      return res.status(200).json(newEnterprise);
    }

    res.status(200).json(enterprise);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

/*
 get all enterprise
 */
router.get("/enterprise/", async (req, res) => {
  try {
    const enterpriseData = await EnterpriseSetting.find({});
    res.status(200).json(enterpriseData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
// get single enterprise
router.get("/singleEnterprise/:id", async (req, res) => {
  try {
    const id = req.params?.id;
    console.log(id);
    if (id === null) {
      res.json({ message: "waiting!" });
    }
    const enterprise = await EnterpriseSetting.findById(id);
    res.status(200).json(enterprise);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//delete enterprise
// router.delete("/enterprise/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//       const enterprise = await EnterpriseSetting.findByIdAndDelete(id);
//       if (!enterprise) {
//         return res
//           .status(404)
//           .json({ message: `cannot find any enterprise with the ID: ${id}` });
//       }
//       res.status(200).json({ enterprise, message: "Selected item has been deleted!" });
//     } catch (error) {
//       console.log(error);
//     }
//   });

router.delete("/enterprise/:TENANT_ID", async (req, res) => {
  console.log(req.params);
  const { TENANT_ID } = req.params;

  try {
    // Delete the enterprise setting
    const deletedEnterprise = await EnterpriseSetting.findOneAndDelete({
      TENANT_ID:TENANT_ID,
    });

    // Delete the corresponding tenant
    const deletedTenant = await Tenant.findOneAndDelete({ TENANT_ID });

    if (!deletedEnterprise || !deletedTenant) {
      return res.status(404).json({ error: "Enterprise not found" });
    }

    res.status(200).json({ message: "Enterprise deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
