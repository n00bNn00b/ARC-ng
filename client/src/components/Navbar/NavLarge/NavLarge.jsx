import React from "react";
import { NavLink } from "react-router-dom";

const NavLarge = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/enterprisesetup"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Tanents Setup
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addRole"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Role
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stepper"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Stepper
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/inbox"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Inbox
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/audit"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Audit
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/managetasks"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Manage Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manageuser"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myprofiles"
          className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
        >
          My Profile(s)
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLarge;
