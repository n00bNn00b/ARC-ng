import React from "react";

const TaskUpdateModal = ({ modal }) => {
  const { taskName, taskDescription, taskComment } = modal;
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Task Name"
            name="task"
            className="input input-bordered input-primary w-full max-w-xs flex mx-auto"
            defaultValue={taskName}
            required
          />

          <textarea
            placeholder="Task Description"
            name="description"
            className="textarea textarea-bordered textarea-xs textarea-primary my-3 w-full max-w-xs h-32 flex mx-auto"
            required
            defaultValue={taskDescription}
          />
          <input
            type="text"
            placeholder="Comment"
            name="comment"
            className="input input-bordered input-primary w-full max-w-xs flex mx-auto"
            defaultValue={taskComment}
            required
          />

          <div className="modal-action">
            <button className="btn btn-primary text-white">Update</button>
            <label htmlFor="update-modal" className="btn btn-error text-white">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskUpdateModal;
