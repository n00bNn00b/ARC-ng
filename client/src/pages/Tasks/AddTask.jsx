import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Tasks = () => {
  const handleTask = (e) => {
    e.preventDefault();
    const taskName = e.target.task.value;
    const taskDescription = e.target.description.value;
    const taskComment = e.target.comment.value;
    // console.log(taskDescription, taskComment);
    e.target.reset();

    const url = "http://localhost:5000/addTask";
    axios
      .post(url, {
        taskName,
        taskDescription,
        taskComment,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          toast.success("Task added successfully!");
        } else {
          toast.error("Task add failure!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex mt-20 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl mr-5">
        <div className="card-body">
          <h2 className="card-title text-2xl">Add Task</h2>
          <form onSubmit={handleTask}>
            <input
              type="text"
              placeholder="Task Name"
              name="task"
              className="input input-bordered input-primary w-full max-w-xs my-2"
              required
            />

            <textarea
              placeholder="Task Description"
              name="description"
              className="textarea textarea-bordered textarea-xs textarea-primary w-full max-w-xs "
              required
            />
            <input
              placeholder="Comment"
              name="comment"
              className="textarea textarea-bordered textarea-xs textarea-primary w-full max-w-xs"
              required
            />

            <input
              className="btn btn-sm btn-primary mt-5 flex mx-auto text-white"
              type="submit"
              value="Add"
            />
          </form>
          <Link
            to="/tasklist"
            className="flex text-white mx-auto btn btn-sm btn-success"
          >
            Task List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
