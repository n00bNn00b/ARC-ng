import React from "react";
import { Link } from "react-router-dom";
import CardLogo from "../CardLogo/CardLogo";
import Divider from "../Divider/Divider";
import Footer from "../Footer/Footer";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import LogoFull from "../LogoFull/LogoFull";

const Signup = () => {
  return (
    <>
      <div className="mt-10 flex mx-auto w-full">
        <LogoFull />

        {/* form card */}
        <div className="card w-96 bg-base-100 shadow-xl flex mx-auto">
          <CardLogo />
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl mb-2">
              Create an account
            </h2>
            <label className="label">
              <span className="label-text font-bold">Name </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w-xs"
              required
            />

            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full max-w-xs"
              required
            />

            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
              required
            />

            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="button"
              className="btn btn-primary my-2"
              value="Signup"
            />
            <Divider />
            <GoogleLogin />
            <p>
              Already have an account?{" "}
              <Link className="text-primary font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
