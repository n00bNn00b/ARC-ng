import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLoggedIn from "../../../hooks/useLoggedIn";
import axios from "axios";

const MobileNav = () => {
  const [show, setShow] = useState(false);
  const { loggedIn } = useLoggedIn();
  const [navItems, setNavItems] = useState([]);

  const getNavItems = async () => {
    const res = await axios.get("nav.json");
    setNavItems(res.data);
  };
  useEffect(() => {
    getNavItems();
  }, []);
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
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <NavLink
                to={navItem.navlink}
                className={({ isActive }) =>
                  isActive ? "bg-warning focused" : ""
                }
              >
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
