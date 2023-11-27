import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/api/persons")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const onItemClick = (user) => {
    console.log(user);
    navigate("/roleupdate", { state: { user: user } });
  };
  return (
    <div className="overflow-x-auto overflow-y-auto mx-2">
      <div className="grid grid-cols-1 text-center p-5 m-2">
        USER ROLE UPDTE
      </div>
      {/* <h2 className="text-center text-primary text-xl mb-3">Users</h2> */}
      <table className="table z-0 w-full text-center">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}

          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.USER_ID}</td>
              <td>{user.FIRST_NAME}</td>
              <td>{user.LAST_NAME}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm text-white"
                  onClick={() => onItemClick(user)}
                >
                  Update Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
