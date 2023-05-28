import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUserProfile = () => {
  const [profileType, setProfileType] = useState("");
  const [profileID, setProfileID] = useState("");
  const _id = useParams();
  const id = _id.id;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/updateuserprofile/${id}`)
      .then((res) => {
        setProfileType(res.data.profileType);
        setProfileID(res.data.profileID);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="my-20">
      <div className="card flex mx-auto w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Update User's Profile</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Profile Type</span>
            </label>
            <input
              type="text"
              defaultValue={profileType}
              onChange={(e) => setProfileType(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <label className="label">
              <span className="label-text font-bold">Profile ID</span>
            </label>

            <input
              type="text"
              defaultValue={profileID}
              onChange={(e) => setProfileID(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="card-actions flex mx-auto">
            <button className="btn btn-primary text-white">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
