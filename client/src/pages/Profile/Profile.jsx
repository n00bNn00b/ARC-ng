import axios from "axios";
import React, { useEffect } from "react";

const Profile = () => {
  const url = "http://localhost:5000/userProfiles";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-20">
      <h2>Profile Page</h2>
    </div>
  );
};

export default Profile;
