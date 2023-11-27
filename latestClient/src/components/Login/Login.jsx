import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardLogo from "../CardLogo/CardLogo";
import LogoFull from "../LogoFull/LogoFull";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../App";

const Login = () => {
  const { dispatch } = useContext(UserContext);
  // const jobtitles = [
  //   {
  //     id: 1,
  //     name: "Admin",
  //   },
  //   {
  //     id: 2,
  //     name: "Manager",
  //   },
  //   {
  //     id: 3,
  //     name: "Staff",
  //   },
  // ];
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    const email_or_username = e.target.email_or_username.value;
    console.log(email_or_username);
    const password = e.target.password.value;
    await axios
      .post(
        "http://127.0.0.1:5000/login",
        {
          email_or_username: email_or_username,
          password: password,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.error) {
          toast.error(res.data.error);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("access_token", res.data.access_token);
          sessionStorage.setItem("loggedIn", true);
          dispatch({ type: "USER", payload: true });
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.status);
        if (err.response.status === 401) {
          toast.error(err.response.data.message);
        }
      });
    // e.target.reset();
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
              {/* <select
                defaultValue="Select Job Title"
                className="select select-bordered w-full max-w-xs"
                name="jobtitle"
              >
                <option disabled>Select Job Title</option>
                {jobtitles.map((jobtitle) => (
                  <option key={jobtitle.id} value={jobtitle.name}>
                    {jobtitle.name}
                  </option>
                ))}
              </select> */}

              <label className="label">
                <span className="label-text font-bold">Email or Username</span>
              </label>
              <input
                type="text"
                name="email_or_username"
                placeholder="Enter your profile name"
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
                autoComplete="on"
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
