import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  let loggedIn = sessionStorage.getItem("loggedIn");

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RequireAuth;
