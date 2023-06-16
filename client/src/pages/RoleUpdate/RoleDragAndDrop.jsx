import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RoleDragAndDrop = () => {
  const location = useLocation();
  const user = location.state?.user || "";

  const [list, setList] = useState([]);
  const [dragList, setDragList] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingR, setIsDraggingR] = useState(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const notRolesResponse = await fetch(`/notroles/${user.USER_ID}`);
      const assignedRolesResponse = await fetch(
        `/roleassigned/${user.USER_ID}`
      );
      let notRolesData = [];
      let assignedRolesData = [];

      if (notRolesResponse.ok) {
        notRolesData = await notRolesResponse.json();
      }

      if (assignedRolesResponse.ok) {
        assignedRolesData = await assignedRolesResponse.json();
      }

      setList(notRolesData);
      setDragList(assignedRolesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragOverLeft = (event) => {
    event.preventDefault();
    setIsDraggingR(true);
  };
  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const handleOnDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    const item = list.find((x) => x._id === id);

    if (item) {
      const updatedDragList = [...dragList];
      const updatedList = [...list];

      const existingItemIndex = updatedDragList.findIndex((x) => x._id === id);

      if (existingItemIndex !== -1) {
        updatedDragList.splice(existingItemIndex, 1);
        updatedList.push(item);
      } else {
        updatedDragList.push(item);
        const itemIndex = updatedList.findIndex((x) => x._id === id);
        updatedList.splice(itemIndex, 1);
      }

      setDragList(updatedDragList);
      setList(updatedList);

      axios
        .post("/userroleset", {
          USER_ID: user.USER_ID,
          ROLE_ID: item.ROLE_ID,
        })
        .then((response) => {
          console.log("Role assigned successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error assigning role:", error);
        });
    }
  };
  //   const handleOnDropLeft = (event) => {
  //     event.preventDefault();
  //     const id = event.dataTransfer.getData("id");
  //     const item = dragList.find(x => x._id === id);

  //     if (item) {
  //     //   setList([...dragList, item]);
  //     //   setDragList(dragList.filter(x => x._id !== id));
  //     const updatedDragList = [...dragList];
  //       const updatedList = [...list];

  //       const existingItemIndex = updatedDragList.findIndex((x) => x._id === id);

  //       if (existingItemIndex !== -1) {
  //         updatedDragList.splice(existingItemIndex, 1);
  //         updatedList.push(item);
  //       } else {
  //         updatedDragList.push(item);
  //         const itemIndex = updatedList.findIndex((x) => x._id === id);
  //         updatedList.splice(itemIndex, 1);
  //       }

  //       setDragList(updatedDragList);
  //       setList(updatedList);
  //     }

  //     setIsDraggingR(false);
  //   }

  const handleOnDropLeft = async (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    const item = dragList.find((x) => x._id === id);

    if (item) {
      try {
        // Delete the user role using the API endpoint
        await axios.delete(`/deleteroles/${user.USER_ID}/${item.ROLE_ID}`);

        // Update the state to reflect the changes
        const updatedDragList = dragList.filter((x) => x._id !== id);
        setDragList(updatedDragList);
        setList([...list, item]);

        setIsDraggingR(false);
      } catch (error) {
        console.error(error);
        // Handle the error if needed
      }
    }
  };

  const targetClassName = `p-4 mt-5 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60${
    isDragging ? "border-red" : "border-indigo-300"
  }`;

  return (
    <div className="mt-20">
      <div className="grid grid-cols-3 g-4 m-4 justify-between card ">
        <div className="text-center m-2 border-dashed border-2  justify-center rounded-lg shadow-lg p-4">
            <p className="text-2xl p-1">User Name : {user?.FIRST_NAME}</p> 
            <p className="text-sm p-1">User Id: {user.USER_ID}</p> 
            <div className="text-sm">
            <Link  to="/addRole" className=" text-white mx-auto text-sm btn btn-sm btn-primary ">
                Back to Previous
            </Link>
            </div>
            
        </div>
       
      </div>
      <div>
        {/* <div className="h-1 p-4 mt-4 grid grid-cols-1 justify-center text-center text-lg">
          Drag and Drop Example
        </div> */}
        <div className="grid grid-cols-2 gap-3 p-4 m-4">
          <div
            className="p-4 mt-5 bg-white rounded-lg shadow-lg border-dashed border-2"
            onDragOver={handleDragOverLeft}
            onDrop={handleOnDropLeft}
          >
            {/* Source List */}
            <p className="text-center m-2 text-sm text-white mx-auto btn btn-sm btn-success">Roles </p>
            <ul className="list-none p-0 m-0  min-h-40">
              {list?.map((item) => (
                <li
                  key={item._id}
                  id={item._id}
                  className="bg-white border p-4 mb-2 cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, item._id)}
                >
                  {item.ROLE_TYPE}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={targetClassName}
            onDragOver={handleDragOver}
            onDrop={handleOnDrop}
          >
            {/* Target List */}
            <p className="text-center m-2 text-sm text-white mx-auto btn btn-sm btn-success">Assigned Roles</p>
            <ul className="list-none p-0 m-0  min-h-40">
              {dragList.map((item) => (
                <li
                  key={item._id}
                  id={item._id}
                  className="bg-white border p-4 mb-2 cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, item._id)}
                >
                  {item.ROLE_TYPE}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDragAndDrop;
