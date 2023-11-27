import React, { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
const StepTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      id: 1,
      name: "Step 1",
    },
    {
      id: 2,
      name: "Step 2",
    },
    {
      id: 3,
      name: "Step 3",
    },
    {
      id: 4,
      name: "Step 4",
    },
    {
      id: 5,
      name: "Step 5",
    },
  ];
  const handleNext = () => {
    setCurrentStep((currentStep + 1) % steps.length);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div>
      <Stepper activeStep={currentStep}>
        {steps.map((step) => (
          <Step key={step.id} label={step.name} />
        ))}
      </Stepper>
      <div className="flex justify-around">
        <button className="btn" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTest;
