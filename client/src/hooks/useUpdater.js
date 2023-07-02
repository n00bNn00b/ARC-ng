import { useState } from "react";

const useUpdater = () => {
  const [updatedBy, setUpdatedBy] = useState();
  // api and logic here
  return {
    updatedBy,
    setUpdatedBy,
  };
};

export default useUpdater;
