import React from "react";

const DeleteModal = ({ modal, deleteHandler }) => {
  const { taskID, taskName } = modal;
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-error">Warning!</h3>
          <p className="py-4 text-black text-lg">
            Are you sure to delete
            <span className="text-info underline font-bold font-mono">
              {" "}
              {taskName}
            </span>{" "}
            ?
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-error"
              onClick={() => deleteHandler(taskID)}
            >
              Yes
            </label>
            <label htmlFor="my-modal" className="btn btn-success">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
