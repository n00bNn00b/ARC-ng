import React, { useEffect, useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";
import axios from "axios";
const Stepper = () => {
  //const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4","Step 5"];
  const [steps,setSteps] = useState([]) ;
  const [stepCode,setStepsCode] = useState([]) ;
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [maxSteps, setMaxSteps] = useState(0);
  
  useEffect(()=>{
    axios
       .get(`/arc_user_steps/${6084407511}`)
       .then((data) => {
        console.log(data.data)
          const {COMPLETE_STEPS,MAX_STEPS} = data.data;
          const completedStepNames = COMPLETE_STEPS.map((step) => step.STEP_NAME);
          const step_code = COMPLETE_STEPS.map((step) => step.STEP_CODE);
          setStepsCode(step_code);
          console.log(completedStepNames);
          setSteps(completedStepNames);
          setMaxSteps(MAX_STEPS);
       });
  },[]);

  // useEffect(() => {
  //   axios
  //   .get(`/arc_user_steps/${6084407511}`)
  //   .then((data) => {
  //     if (data) {
  //       console.log(data.data)
  //       const {COMPLETE_STEPS} = data.data;
  //       const completedStepNames = COMPLETE_STEPS.map((step) => step.STEP_NAME);
  //       if (completedStepNames.length === Object.keys(COMPLETE_STEPS).length) {
  //         setComplete(true);
  //       } else {
  //         const lastCompletedStepIndex = Object.values(COMPLETE_STEPS).findIndex((step) =>
  //           completedStepNames.includes(step)
  //         );
  //         setCurrentStep(lastCompletedStepIndex + 1);
  //       }
  //     }
  //   })
    
  //   .catch((err) => console.log(err));

  // },[]);

const demostepData = parseInt(stepCode[steps.length-1]);

  return (
    <div>
      <div className="flex justify-between mt-28">
        {Array.from({ length: maxSteps }, (_, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">

              {i + 1 < currentStep || complete ? <TiTick size={24} /> : stepCode[i]|| demostepData+i }
            </div>
            <p className="text-gray-500">{steps[i]||" --- "}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 justify-center w-24 mx-auto mt-8">
      {!complete && (
        <button
          className="btn  btn-sm btn-primary text-white "
          onClick={() => {
            currentStep === maxSteps
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
      {complete && <div className="grid grid-cols-1 justify-center">Completed</div>}
      </div>
    
    </div>
  );
};

export default Stepper;

