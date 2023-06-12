import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Signup from "./components/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Audit from "./pages/Audit/Audit";
import ManageTasks from "./pages/Tasks/ManageTasks";
import AddTask from "./pages/Tasks/AddTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile/Profile";
import Inbox from "./pages/Inbox/Inbox";
import UserManage from "./pages/UserManage/UserManage";
import UpdateUserProfile from "./pages/UserManage/UpdateUserProfile";
import AddNewProfile from "./pages/UserManage/AddNewProfile";
import EnterPriseSetup from "./pages/EnterPriseSetup/EnterPriseSetup";
import AddTenant from "./pages/Tabs/AddTenant";
import Tabs from "./pages/Tabs/Tabs";
import Demo from "./pages/Demo/Demo";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manageuser" element={<UserManage />} />
        <Route path="/adduser" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enterprisesetup" element={<Tabs/>} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/managetasks" element={<ManageTasks />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/updateuserprofile/:id" element={<UpdateUserProfile />} />
        <Route path="/addprofile/" element={<AddNewProfile />} />
        <Route path="/myprofiles" element={<Profile />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/addTenant" element={<AddTenant />} />
        <Route path="/demo" element={<Demo/>} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
