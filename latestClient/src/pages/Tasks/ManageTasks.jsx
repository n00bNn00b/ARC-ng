import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";
import TaskUpdateModal from "./TaskUpdateModal";
import Cookies from "js-cookie";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState("");
  const [selected, setSelected] = useState();
  const [taskMessage, setTaskMessage] = useState("");

  useEffect(() => {
    const url = "/api/tasks";
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("jwt"),
        },
        withCredentials: true,
      })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        // console.log("error: ", err);
        if (err.response.status === 401) {
          toast.error(err.response.data.message);
          setTaskMessage(err.response.data.message);
        }
      });
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    axios.delete(`/api/task/${id}`).then((res) => {
      if (res.status === 200) {
        const newTasks = tasks.filter((task) => task._id !== id);
        setTasks([...newTasks]);
        toast.success(res.data.message);
      } else {
        toast.warning(res.data.message);
      }
    });
  };

  return (
    <div className="my-20">
      <div>
        <Link
          to="/addtask"
          className="btn btn-primary flex mx-auto my-5 text-white w-48"
        >
          Add Task
        </Link>
      </div>

      <div className="card mx-auto mb-20 bg-base-100 shadow-2xl">
        {tasks.length !== 0 ? (
          <div className="overflow-x-auto overflow-y-auto mx-2">
            <table className="table z-0 w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Task Name</th>
                  <th>Task Description</th>
                  <th>Comment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row  */}
                {tasks.map((task, index) => {
                  return (
                    <tr
                      key={task._id}
                      className={`hover:text-primary ${
                        selected === task._id ? "active text-primary" : ""
                      } `}
                    >
                      <td>{index + 1}</td>
                      <td>{task.taskName}</td>
                      <td>{task.taskDescription.slice(0, 20) + " ..."}</td>
                      <td>{task.taskComment}</td>
                      <td>
                        <label
                          onClick={() => {
                            setModal(task);
                            setSelected(task._id);
                          }}
                          htmlFor="update-modal"
                          className="btn btn-warning text-white mx-3 btn-sm"
                        >
                          Update
                        </label>

                        <label
                          onClick={() => setModal(task)}
                          htmlFor="my-modal"
                          className="btn btn-error btn-sm"
                        >
                          Delete
                        </label>
                        <TaskUpdateModal modal={modal} />
                        <DeleteModal
                          modal={modal}
                          deleteHandler={deleteHandler}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex mx-auto shadow-2xl text-white text-xl badge badge-2xl badge-warning">
            {taskMessage ? taskMessage : "No Task Has been Assigned Yet! "}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
