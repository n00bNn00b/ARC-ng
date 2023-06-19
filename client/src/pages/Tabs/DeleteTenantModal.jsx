import React from "react";

const DeleteTenantModal = ({deletemodal,deleteHandler}) => {
  const { _id,TENANT_ID, TENANT_NAME } = deletemodal;
  return (
    <div>
    <input type="checkbox" id="delete-enmodal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl text-error">Warning!</h3>
        <p className="py-4 text-black text-lg">
          Are you sure to delete
          <span className="text-info underline font-bold font-mono">
            {" "}
            {TENANT_NAME}
          </span>{" "}
          ?
        </p>
        <p>{_id}</p>
        <div className="modal-action">
          <label
            htmlFor="delete-enmodal"
            className="btn btn-sm  btn-error"
            onClick={() => deleteHandler(TENANT_ID)}
          >
            Yes
          </label>
          <label htmlFor="delete-enmodal" className="btn btn-sm btn-success text-white">
            No
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DeleteTenantModal;
