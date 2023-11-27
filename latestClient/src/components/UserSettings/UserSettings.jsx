import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../Logout/Logout";

const UserSettings = () => {
  const [show, setShow] = useState(false);
  const handleSettings = () => {
    setShow(!show);
  };
  return (
    <div className="dropdown dropdown-end">
      <label
        onClick={handleSettings}
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            src="https://doodleipsum.com/700/avatar-3?i=258047980742b4938d78891d296875ef"
            alt="avatar"
          />
        </div>
      </label>
      {show && (
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52 overflow-hidden"
        >
          <li>
            <NavLink
              to="/myprofiles"
              className={({ isActive }) =>
                isActive ? "bg-warning focused justify-between" : ""
              }
            >
              My Profile(s)
            </NavLink>
          </li>
          <li>
            <Link to="/">
              Notifications
              <span className="badge badge-lg badge-warning text-white">
                10
              </span>
            </Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>

          <hr />
          <li>
            <Logout />
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserSettings;
