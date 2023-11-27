import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <button
                onClick={handleNavigate}
                className="btn btn-primary px-8 mx-5 my-2 sm:w-full lg:w-auto md:w-auto border rounded-lg text-white"
              >
                Go Back
              </button>
              <Link
                to="/"
                className="btn btn-primary px-8 mx-5 my-2 sm:w-full lg:w-auto md:w-auto border rounded-lg text-white"
              >
                Go Home
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="not-dound" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="not-found" />
      </div>
    </div>
  );
};

export default NotFound;
