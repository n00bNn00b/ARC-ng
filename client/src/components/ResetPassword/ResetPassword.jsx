import React from "react";
import CardLogo from "../CardLogo/CardLogo";
import Footer from "../Footer/Footer";

const ResetPassword = () => {
  return (
    <>
      <div className="my-20 flex mx-auto card w-96 bg-base-100 shadow-xl">
        <CardLogo />
        <div className="card-body">
          <h2 className="card-title">Reset Your Password</h2>
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
      <Footer />
    </>
  );
};

export default ResetPassword;
