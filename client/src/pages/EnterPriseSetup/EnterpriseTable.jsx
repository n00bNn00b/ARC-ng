import React, { useState } from "react";
import EnterpriseUpdateModal from "./EnterpriseUpdateModal";
import DeleteEnterpriseModal from "./DeleteEnterpriseModal";

const EnterpriseTable = ({ enterprise, setModal, setDeleteModal }) => {
  const { TENANT_ID, TENANT_NAME, ENTERPRISE_NAME, ENTERPRISE_TYPE } =
    enterprise;

  return (
    <tr class="bg-base-200">
      <th>{TENANT_ID}</th>
      <td>{TENANT_NAME}</td>
      <td>{ENTERPRISE_NAME}</td>
      <td>{ENTERPRISE_TYPE}</td>
      <td>
        <label
          onClick={() => {
            setModal(enterprise);
          }}
          htmlFor="update-entr-modal"
          className="btn btn-primary text-white mx-3 btn-sm"
        >
          Update
        </label>
        <label
          onClick={() => {
            setDeleteModal(enterprise);
          }}
          htmlFor="delete-enmodal"
          className="btn btn-warning text-white mx-3 btn-sm"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default EnterpriseTable;
