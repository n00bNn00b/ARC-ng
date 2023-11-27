import React from "react";
import { Link } from "react-router-dom";
import UserList from "./UserList";

const UserManage = () => {
  return (
    <div className="my-20">
      <Link
        to="/adduser"
        className="btn btn-primary flex mx-auto text-white w-48"
      >
        Add New User
      </Link>
      <UserList />
    </div>
  );
};

export default UserManage;
