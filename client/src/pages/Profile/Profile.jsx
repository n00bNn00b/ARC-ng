import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const myID = sessionStorage.getItem("myID");
  console.log(myID);

  useEffect(() => {
    const url = `http://localhost:5000/userProfile/${myID}`;
    axios
      .get(url)
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => console.log(err));
  }, [myID]);
  console.log(profiles);
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold text-primary text-center">
        My Porfiles
      </h2>
      <hr className="mt-5" />
      {profiles.map((profile) => (
        <div
          key={profile._id}
          className="card my-3 mx-auto w-96 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <p>
              <span className="font-bold"> Profile Type: </span>{" "}
              <span className="text-primary">{profile.PROFILE_TYPE}</span>
            </p>
            <p>
              <span className="font-bold"> Profile Name: </span>{" "}
              <span className="text-primary">{profile.PROFILE_NAME}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
