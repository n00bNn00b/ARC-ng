import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavLarge = () => {
  const [navItems, setNavItems] = useState([]);

  const getNavItems = async () => {
    const res = await axios.get("nav.json");
    setNavItems(res.data);
  };
  useEffect(() => {
    getNavItems();
  }, []);

  return (
    <ul className="menu menu-horizontal px-1">
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <NavLink
            to={navItem.navlink}
            className={({ isActive }) => (isActive ? "bg-warning focused" : "")}
          >
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLarge;
