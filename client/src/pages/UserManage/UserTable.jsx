import React from "react";

const UserTable = ({ users, handleUserSelect }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto mx-2">
      <table className="table z-0 w-full">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>First Name</th>
            <th>Last Name</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {/* row  */}

          {users.map((user, index) => (
            <tr
              key={user._id}
              className=" hover:cursor-pointer hover:select-text"
              onClick={() => handleUserSelect(user.userId)}
            >
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              {/* <td className="flex space-x-2 mx-5">
                  <label
                    onClick={() => setModal(user)}
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
                </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
