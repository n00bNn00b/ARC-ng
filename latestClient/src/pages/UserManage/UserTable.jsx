import React, { useState } from "react";

const UserTable = ({ users, handleUserSelect }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="overflow-x-auto overflow-y-auto mx-2">
      <h2 className="text-center text-primary text-xl mb-3">Users</h2>
      <table className="table z-0 w-full">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}

          {users.map((user, index) => (
            <tr
              key={user._id}
              className={`hover:cursor-pointer ${
                selected === user._id ? "active text-primary font-bold" : ""
              }`}
              onClick={() => {
                handleUserSelect(user.USER_ID);
                setSelected(user._id);
              }}
            >
              <td>{index + 1}</td>
              <td>{user.FIRST_NAME}</td>
              <td>{user.LAST_NAME}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
