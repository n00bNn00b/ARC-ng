import React, { useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const url = "/logout";
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "USER", payload: false });
          sessionStorage.clear();
          toast.success(res.data.message);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <button
      onClick={handleLogout}
      to="/login"
      className="btn btn-primary text-white"
    >
      Logout
    </button>
  );
};

export default Logout;
