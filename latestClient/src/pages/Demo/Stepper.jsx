
import React, { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <span>{`Step ${currentStep}`}</span>
        <button
          onClick={handleNext}
          disabled={currentStep === 3}
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>

      <div className="bg-gray-200 py-4 px-6 rounded">
        {currentStep === 1 && <div>Step 1 Content</div>}
        {currentStep === 2 && <div>Step 2 Content</div>}
        {currentStep === 3 && <div>Step 3 Content</div>}
      </div>
    </div>
  );
};

export default Stepper;