const express = require("express");
const router = express.Router();

require("../db/conn");
const ArcUserSteps = require("../model/arcUserStep");

router.post("/arc_user_steps", (req, res) => {
  const { USER_ID,  MAX_STEPS,COMPLETE_STEPS} = req.body;

  // Create a new document using the ArcUserSteps model
  const arcUserSteps = new ArcUserSteps({
    USER_ID,
    MAX_STEPS,
    COMPLETE_STEPS,
  });

  // Save the document to the database
  arcUserSteps
    .save()
    .then((savedUserSteps) => {
      res.status(201).json(savedUserSteps);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to save user steps" });
    });
});

// API endpoint to handle GET requests for user steps
router.get('/arc_user_steps/:user_id', (req, res) => {
    const userId = req.params.user_id;
  
    // Find the user steps document based on the user ID
    ArcUserSteps.findOne({ USER_ID: userId })
      .then(userSteps => {
        if (!userSteps) {
          return res.status(404).json({ error: 'User steps not found' });
        }
  
        res.json(userSteps);
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to retrieve user steps' });
      });
  });

module.exports = router;