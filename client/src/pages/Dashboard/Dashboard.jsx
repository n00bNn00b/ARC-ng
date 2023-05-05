import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="card mt-20 flex mx-auto w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Dashboard</h2>
        <Link to="/addtask" className="btn btn-success text-white">
          Add Task
        </Link>
        <Link to="/tasklist" className="btn btn-success text-white">
          Task List
        </Link>
        <div className="text-info italic font-bold">
          Graph charts will be added here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
