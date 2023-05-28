import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:5000/userProfiles";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  return (
    <div className="card  mx-auto my-10 mb-20 bg-base-100 shadow-2xl">
      <div className="overflow-x-auto overflow-y-auto mx-2">
        <table className="table z-0 w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Profile Type</th>
              <th>Profile ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}

            {users.map((user, index) => (
              <tr key={user._id} className="hover hover:text-primary">
                <td>{index + 1}</td>
                <td>{user.profileType}</td>
                <td>{user.profileID}</td>
                <td className="flex space-x-2">
                  <Link
                    to={`/updateuserprofile/${user._id}`}
                    className="btn btn-warning text-white btn-sm"
                    aria-label="Update Profile"
                  >
                    Update Profile
                  </Link>
                  <Link
                    to="/addprofile"
                    className="btn btn-primary text-white btn-sm"
                  >
                    Add New Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
