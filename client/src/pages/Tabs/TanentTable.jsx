import React, { useState } from "react";

import DeleteTenantModal from "./DeleteTenantModal";
import EditTanent from "./EditTanent";

const TanentTable = ({ tenants,modal,setModal,deletemodal,deleteHandler,setDeleteModal,onItemClick}) => {
 
 
  return (
    <div className="overflow-x-auto overflow-y-auto mx-2">
      {/* <h2 className="text-center text-primary text-xl mb-3">Users</h2> */}
      <table className="table z-0 w-full text-center">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Tenant Id</th>
            <th>Tenant Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}

          {tenants.map((tenant, index) => (
            <tr key={tenant._id} onClick={() => onItemClick(tenant)}>
              <td>{index + 1}</td>
              <td>{tenant.TENANT_ID}</td>
              <td>{tenant.TENANT_NAME}</td>
              <td className=""><label  onClick={() => {setModal(tenant); }}   htmlFor="update-entr-modal"className="btn btn-warning text-white mx-3 btn-sm">
                 Update
            </label>
        <label onClick={() => {setDeleteModal(tenant); }}  htmlFor="delete-enmodal"className="btn btn-error text-white mx-3 btn-sm">
                Delete
          </label></td>
            
            </tr>
          ))}
        </tbody>
        {modal && (
                <EditTanent modal={modal} setModal={setModal} />
              )}
        {deletemodal && (
                <DeleteTenantModal
                  deletemodal={deletemodal}
                  setDeleteModal={setDeleteModal}
                  deleteHandler={deleteHandler}
                />
              )}
        
      </table>
    </div>
  );
};

export default TanentTable;
