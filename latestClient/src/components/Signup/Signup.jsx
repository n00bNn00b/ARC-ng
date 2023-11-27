import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  // const img = "https://cdn-icons-png.flaticon.com/512/5582/5582931.png";
  const [JOB_TITLE, setJobtitle] = useState("");
  // const [tenants, setTenants] = useState([]);

  const jobtitles = [
    {
      id: 1,
      name: "Admin",
    },
    {
      id: 2,
      name: "Manager",
    },
    {
      id: 3,
      name: "Staff",
    },
  ];
  // console.log(tenants);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9000/enterprise")
  //     .then((res) => setTenants(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  console.log(dateTime);
  const userRegistrationHandler = async (e) => {
    e.preventDefault();
    const FIRST_NAME = e.target.firstName.value;
    const MIDDLE_NAME = e.target.middleName.value || "";
    const LAST_NAME = e.target.lastName.value || "";
    // const email = e.target.email.value;
    // const jobTitle = e.target.jobTitle.value;
    const PROFILE_NAME = e.target.profileName.value;
    // const phone = e.target.phone.value;
    const PASSWORD = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const PROFILE_TYPE = "USERNAME";
    const USER_ID = Math.floor(Math.random() * 1000 * 10000000);
    const TENANT_ID = 30;
    const CREATED_BY = "";
    const CREATED_ON = dateTime;
    const LAST_UPDATED_BY = "";
    const LAST_UPDATED_ON = dateTime;
    // setJobtitle(jobTitle);
    // console.log(USER_ID);
    if (PASSWORD === confirmPassword) {
      await axios
        .post(
          "/api/addUser",
          {
            USER_ID,
            FIRST_NAME,
            MIDDLE_NAME,
            LAST_NAME,
            // email,
            JOB_TITLE,
            PROFILE_TYPE,
            PROFILE_NAME,
            CREATED_BY,
            CREATED_ON,
            LAST_UPDATED_BY,
            LAST_UPDATED_ON,
            TENANT_ID,
            // phone,
            PASSWORD,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status === 422 || !res.data) {
            toast.error("Invalid Registration!");
          } else {
            toast.success(res.data.message);
            // console.log("axios date", res.headers.date);
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
  // console.log(JOB_TITLE);

  return (
    <>
      <div className="my-20 flex mx-auto w-full">
        {/* form card */}
        <div className="card w-96 bg-base-100 shadow-2xl flex mx-auto">
          {/* <CardLogo /> */}
          <form onSubmit={userRegistrationHandler} className="card-body">
            <h2 className="text-center text-primary font-bold text-2xl drop-shadow-lg mb-2">
              Add a New User
            </h2>
            <label className="label">
              <span className="label-text font-bold">
                First Name <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="firstName"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <label className="label">
              <span className="label-text font-bold">Middle Name </span>
            </label>
            <input
              type="text"
              placeholder="(Optional)"
              name="middleName"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text font-bold">
                Last Name
                {/* <span className="text-error">*</span>{" "} */}
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="lastName"
              className="input input-bordered w-full max-w-xs"
            />

            {/* <label className="label">
              <span className="label-text font-bold">
                Email <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="input input-bordered w-full max-w-xs"
              required
            /> */}
            <label className="label">
              <span className="label-text font-bold">
                Job Title <span className="text-error">*</span>
              </span>
            </label>
            {/* <input
              type="text"
              placeholder="Enter your email address"
              name="jobtitle"
              className="input input-bordered w-full max-w-xs"
              required
            /> */}

            <select
              defaultValue="Select Job Title"
              className="select select-bordered w-full max-w-xs"
              name="jobTitle"
              required
              onChange={(e) => setJobtitle(e.target.value)}
            >
              <option disabled>Select Job Title</option>
              {jobtitles.map((jobtitle) => (
                <option key={jobtitle.id} value={jobtitle.name}>
                  {jobtitle.name}
                </option>
              ))}
            </select>

            <label className="label">
              <span className="label-text font-bold">
                Profile Name <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Profile Name"
              name="profileName"
              className="input input-bordered w-full max-w-xs"
              required
            />
            {/* <label className="label">
              <span className="label-text font-bold">
                Phone <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="phone"
              placeholder="Enter your Phone No."
              name="phone"
              className="input input-bordered w-full max-w-xs"
              required
            /> */}

            <label className="label">
              <span className="label-text font-bold">
                Password <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered w-full max-w-xs"
              autoComplete="on"
              required
            />

            <label className="label">
              <span className="label-text font-bold">
                Confirm Password <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              className="input input-bordered w-full max-w-xs"
              autoComplete="on"
              required
            />
            <input
              type="submit"
              className="btn btn-primary text-white my-2"
              value="Add User"
            />
            {/* <Divider /> */}
            {/* <GoogleLogin /> */}
            {/* <p>
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
