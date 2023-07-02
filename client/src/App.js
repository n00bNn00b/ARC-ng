import React, { createContext, useReducer } from "react";
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
import AddTenant from "./pages/Tabs/AddTenant";
import Tabs from "./pages/Tabs/Tabs";
import Demo from "./pages/Demo/Demo";
import RoleUpdate from "./pages/RoleUpdate/RoleUpdate";
import RoleDragAndDrop from "./pages/RoleUpdate/RoleDragAndDrop";
import Stepper from "./pages/Stepper/Stepper";
import { initialState, reducer } from "./reducer/UserReducer";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import useLoggedIn from "./hooks/useLoggedIn";
import NotFound from "./pages/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [user, dispatch] = useReducer(reducer, initialState);
  const { loggedIn } = useLoggedIn();

  return (
    <div>
      <UserContext.Provider value={{ user, dispatch }}>
        {loggedIn && <Navbar />}

        <Routes>
          <Route path="/" element={!loggedIn ? <Login /> : <Dashboard />} />
          <Route
            path="/manageuser"
            element={
              <RequireAuth>
                <UserManage />
              </RequireAuth>
            }
          />
          <Route
            path="/adduser"
            element={
              <RequireAuth>
                <Signup />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/enterprisesetup"
            element={
              <RequireAuth>
                <Tabs />
              </RequireAuth>
            }
          />
          {/*israt*/}
          <Route
            path="/inbox"
            element={
              <RequireAuth>
                <Inbox />
              </RequireAuth>
            }
          />
          <Route
            path="/audit"
            element={
              <RequireAuth>
                <Audit />
              </RequireAuth>
            }
          />
          <Route
            path="/managetasks"
            element={
              <RequireAuth>
                <ManageTasks />
              </RequireAuth>
            }
          />
          <Route
            path="/addtask"
            element={
              <RequireAuth>
                <AddTask />
              </RequireAuth>
            }
          />
          <Route
            path="/updateuserprofile/:id"
            element={
              <RequireAuth>
                <UpdateUserProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/myprofiles"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/addTenant"
            element={
              <RequireAuth>
                <AddTenant />
              </RequireAuth>
            }
          />{" "}
          {/*israt*/}
          <Route
            path="/addRole"
            element={
              <RequireAuth>
                <RoleUpdate />
              </RequireAuth>
            }
          />
          {/*israt*/}
          <Route
            path="/roleupdate"
            element={
              <RequireAuth>
                <RoleDragAndDrop />
              </RequireAuth>
            }
          />
          {/*israt*/}
          <Route path="/stepper" element={<Stepper />} />
          {/*israt*/}
          <Route path="/demo" element={<Demo />} />
          {/*israt*/}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer autoClose={3000} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
