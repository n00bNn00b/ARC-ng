import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const img = "https://cdn-icons-png.flaticon.com/512/5582/5582931.png";
  const userRegistrationHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      await axios
        .post("http://localhost:5000/addUser", {
          name,
          email,
          username,
          phone,
          password,
          confirmPassword,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 422 || !res.data) {
            toast.error("Invalid Registration!");
          } else {
            toast.success(res.data.message);
          }
          // if (res.status !== 201) {
          //   toast.error(res.data.error);
          // }
          // console.log("check: ", res);
        })
        .catch((err) => {
          // console.log(err);
          if (err.response.status === 422) {
            toast.warning(err.response.data.error);
          }
        });
    } else {
      toast.error("Password did not match!");
    }
  };
  return (
    <>
      <div className="mt-20 flex mx-auto w-full">
        {/* <LogoFull /> */}

        {/* form card */}
        <div className="card w-96 bg-base-100 shadow-2xl flex mx-auto">
          {/* <CardLogo /> */}
          <form onSubmit={userRegistrationHandler} className="card-body">
            <h2 className="text-center text-primary font-bold text-2xl drop-shadow-lg mb-2">
              Add a New User
            </h2>
            <label className="label">
              <span className="label-text font-bold">Name </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered w-full max-w-xs"
              required
            />

            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <label className="label">
              <span className="label-text font-bold">Username</span>
            </label>
            <input
              type="text"
              placeholder="i.e.: josh101"
              name="username"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <label className="label">
              <span className="label-text font-bold">Phone</span>
            </label>
            <input
              type="phone"
              placeholder="Enter your Phone No."
              name="phone"
              className="input input-bordered w-full max-w-xs"
              required
            />

            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered w-full max-w-xs"
              required
            />

            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="submit"
              className="btn btn-primary text-white my-2"
              value="Add User"
            />
            {/* <Divider />
            <GoogleLogin />
            <p>
              Already have an account?{" "}
              <Link className="text-primary font-bold" to="/login">
                Login
              </Link>{" "}
            </p> */}
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Signup;
