import React from "react";
import { Link } from "react-router-dom";
import useLoggedIn from "../../hooks/useLoggedIn";
import UserSettings from "../UserSettings/UserSettings";
import Hamburger from "../Hamburger/Hamburger";
import MobileNav from "./MobileNav/MobileNav";
import NavLarge from "./NavLarge/NavLarge";

//  Outlet
const Navbar = () => {
  const { loggedIn } = useLoggedIn();
  // console.log(loggedIn, "navbar");

  return (
    <div className="navbar fixed top-0 z-10 bg-primary text-white">
      <div className="navbar-start ">
        <MobileNav />
        {/* hamburger */}
        <div className="flex-none lg:block md:hidden sm:hidden">
          <Hamburger />
        </div>
        {loggedIn ? (
          <Link
            className="btn btn-ghost text-white normal-case text-xl"
            to="/dashboard"
          >
            Logo
          </Link>
        ) : (
          <Link className="btn btn-ghost text-white normal-case text-xl" to="/">
            Logo
          </Link>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        {loggedIn && <NavLarge />}
      </div>
      <div className="navbar-end">
        {/* {loggedIn && <Logout />} */}
        <UserSettings />
      </div>
    </div>
  );
};

export default Navbar;
