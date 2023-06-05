const express = require("express");
const router = express.Router();

const EnterpriseSetting = require("../model/enterpriseSettingSchema");

router.get("/enterprise", async (req, res) => {
    try {
      const enterpriseData = await EnterpriseSetting.find({});
      res.status(200).json(enterpriseData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });

  router.post("/addenterprise", async (req, res) => {
    const {tenantId,enterpriseName,enterpriseType } = req.body;
    try {
      const enterprise = new EnterpriseSetting({
        tenantId,
        enterpriseName,
        enterpriseType ,
      });
  
      await enterprise.save();
      // console.log(user);
      res.status(201).json({ message: " New Enterprise Has been added!" });
    } catch (error) {
      res.status(422).json({ message: "Failed to add New Enterprise!" });
    }
  });
  