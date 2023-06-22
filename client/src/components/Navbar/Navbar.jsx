import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
//  Outlet
const Navbar = () => {
  const { user, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const url = "http://localhost:5000/logout";
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "USER", payload: false });
          toast.success(res.data.message);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar fixed top-0 z-10 bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          {user && (
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          {user && (
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
        {user ? (
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
        {user && (
          <ul className="menu menu-horizontal px-1">
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
      <div className="navbar-end">
        {user && (
          <button
            onClick={handleLogout}
            to="/login"
            className="btn btn-primary text-white"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
