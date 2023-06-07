import React, { useState } from "react";
import UserUpdateModal from "./UserUpdateModal";
import { Link } from "react-router-dom";

const UserProfileTable = ({ profiles }) => {
  const [modal, setModal] = useState("");

  return (
    <div className="overflow-x-auto overflow-y-auto mx-2">
      <h2 className="text-center text-primary text-xl mb-3">User Profiles</h2>
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

          {profiles.map((profile, index) => (
            <tr
              key={profile._id}
              className="hover:cursor-pointer"
              //   onClick={() => handleUserSelect(user.userId)}
            >
              <td>{index + 1}</td>
              <td>{profile.PROFILE_TYPE}</td>
              <td>{profile.PROFILE_NAME}</td>
              <td className="flex space-x-2 mx-5">
                <label
                  onClick={() => setModal(profile)}
                  htmlFor="user-modal"
                  // to={`/updateuserprofile/${user._id}`}
                  className="btn btn-sm btn-warning text-white "
                  aria-label="Update Profile"
                >
                  Update Profile
                </label>
                <UserUpdateModal modal={modal} />
                <Link
                  to="/addprofile"
                  className="btn btn-sm btn-primary text-white "
                >
                  Add Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfileTable;
