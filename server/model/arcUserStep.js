const mongoose = require('mongoose');

const arcUserStepsSchema = new mongoose.Schema({
  USER_ID: {
    type: Number,
    required: true
  },
  MAX_STEPS: {
    type: Number,
    required: true
  },
  COMPLETE_STEPS: [
    {
      STEP_CODE: {
        type: String,
        required: true
      },
      STEP_NAME: {
        type: String,
        required: true
      }
    }
  ]
});

const ArcUserSteps = mongoose.model('ArcUserSteps', arcUserStepsSchema);

module.exports = ArcUserSteps;
