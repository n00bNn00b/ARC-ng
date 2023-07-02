import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useLoggedIn from "../../../hooks/useLoggedIn";

const MobileNav = () => {
  const [show, setShow] = useState(false);
  const { loggedIn } = useLoggedIn();
  // console.log(loggedIn, "navbar");
  const handleDropDown = () => {
    setShow(!show);
  };
  return (
    <div className="dropdown">
      {loggedIn && (
        <label
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
          onClick={handleDropDown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      )}
      {loggedIn && show && (
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
        >
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/enterprisesetup"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Tanents Setup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addRole"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Role
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stepper"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Stepper
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inbox"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Inbox
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/audit"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Audit
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/managetasks"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Manage Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manageuser"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myprofiles"
              className={({ isActive }) =>
                isActive ? "bg-warning focused" : ""
              }
            >
              My Profile(s)
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
