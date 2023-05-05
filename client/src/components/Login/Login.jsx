import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CardLogo from "../CardLogo/CardLogo";
import LogoFull from "../LogoFull/LogoFull";
import Divider from "../Divider/Divider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    await axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
        } else {
          toast.success(res.data.message);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error(err.response.data.error);
        }
      });
    e.target.reset();
  };
  return (
    <>
      <div className="mt-20 flex mx-auto w-full">
        <LogoFull />
        {/* form card */}
        <div className="card w-96 bg-base-100 shadow-xl flex mx-auto">
          <CardLogo />
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl mb-2">
              Login to your account
            </h2>
            <p className="text-center">
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={loginHandler}>
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full max-w-xs"
                required
              />

              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                required
              />

              <input
                type="submit"
                className="btn btn-primary w-full text-white my-2"
                value="Login"
              />
              <p>
                Forgot Password?{" "}
                <Link className="text-primary font-bold" to="/resetpassword">
                  Reset Password
                </Link>{" "}
              </p>
            </form>
            <Divider />
            <GoogleLogin />
          </div>

          {/* <p>
              Don't have an account?{" "}
              <Link className="text-primary font-bold" to="/signup">
                Signup
              </Link>{" "}
            </p> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
