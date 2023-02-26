import React from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  return (
    <div className="mt-10 flex mx-auto w-full">
      <div className="lg:ml-20 lg:block md:hidden sm:hidden xs:hidden">
        <img src="https://i.ibb.co/0f1HvCL/arc-logo.png" alt="logo" />
      </div>

      {/* form card */}
      <div className="card w-96 bg-base-100 shadow-xl flex mx-auto">
        <figure className="flex mx-auto w-48">
          <img src="https://i.ibb.co/0f1HvCL/arc-logo.png" alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl mb-2">
            Login to your account
          </h2>
          <p className="text-center">
            Welcome back! Please enter your details.
          </p>

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

          <input type="button" className="btn btn-primary my-2" value="Login" />
          <Divider />
          <GoogleLogin />
          <p>
            Don't have an account?{" "}
            <Link className="text-primary font-bold" to="/">
              Signup
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
