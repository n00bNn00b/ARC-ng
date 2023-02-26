import React from "react";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="arcng-drwaer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-accent text-white">
          <div className="flex-none">
            <label htmlFor="arcng-drwaer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Arc-ng</div>
          <div className="flex lg:block dropdown dropdown-bottom dropdown-end">
            <div className="navbar-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52 toast toast-top toast-end"
            >
              <div className="alert alert-success">
                <div>
                  <span>New mail arrived.</span>
                </div>
              </div>
              <div className="alert alert-success">
                <div>
                  <span>Message sent successfully.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        Content
      </div>
      <div className="drawer-side">
        <label htmlFor="arcng-drwaer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-accent text-white">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Audit</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
