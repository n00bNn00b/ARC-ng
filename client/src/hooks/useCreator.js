import { useState } from "react";

const useCreator = () => {
  const [createdBy, setCreatedBy] = useState("");
  // logics will be here
  return {
    createdBy,
    setCreatedBy,
  };
};

export default useCreator;
