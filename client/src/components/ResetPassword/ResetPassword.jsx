import React from "react";
import CardLogo from "../CardLogo/CardLogo";

const ResetPassword = () => {
  return (
    <>
      <div className="my-20 flex mx-auto card w-96 bg-base-100 shadow-xl">
        <CardLogo />
        <div className="card-body">
          <h2 className="text-2xl text-center font-semibold my-5">
            Reset Your Password
          </h2>
          <input
            type="email"
            placeholder="Type your email here"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="button"
            className="btn btn-primary my-2 text-white"
            value="Send Password Reset Link"
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
