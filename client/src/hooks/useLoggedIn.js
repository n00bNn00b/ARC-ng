import { useEffect, useState } from "react";

const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const loginStatus = sessionStorage.getItem("loggedIn");
  console.log(loginStatus, "hook");
  useEffect(() => {
    setLoggedIn(loginStatus);
  }, [loginStatus]);
  // console.log("hook: ", loggedIn);
  return {
    loggedIn,
    setLoggedIn,
  };
};

export default useLoggedIn;
