import axios from "axios";
import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import UserProfileTable from "./UserProfileTable";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [profiles, setProfiles] = useState([]);
  // const url = "http://localhost:9000/users";

  useEffect(() => {
    axios
      .get("http://localhost:9000/persons")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(users);

  const handleUserSelect = async (id) => {
    try {
      // console.log(id);

      const response = await axios.get(`/userprofile/${id}`);

      if (response.data) {
        const profile = response.data;
        // console.log(profile);
        setProfiles(profile);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //
  return (
    <div className="card  mx-auto my-10 mb-20 bg-base-100 shadow-2xl">
      {profiles.length !== 0 ? (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-10">
          <UserTable handleUserSelect={handleUserSelect} users={users} />
          <UserProfileTable profiles={profiles} />
        </div>
      ) : (
        <div className="grid grid-cols-1">
          <UserTable handleUserSelect={handleUserSelect} users={users} />
          {profiles.length !== 0 && <UserProfileTable profiles={profiles} />}
        </div>
      )}
    </div>
  );
};

export default UserList;
