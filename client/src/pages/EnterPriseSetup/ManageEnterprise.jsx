import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EnterpriseTable from "./EnterpriseTable";
import EnterpriseUpdateModal from "./EnterpriseUpdateModal";
import DeleteEnterpriseModal from "./DeleteEnterpriseModal";
function ManageEnterprise(props) {
  const [enterprise, setEnterprise] = useState([]);
  const [modal, setModal] = useState(null);
  const [deletemodal, setDeleteModal] = useState(null);
  useEffect(() => {
    const url = "/enterprise";
    axios.get(url).then((res) => {
      setEnterprise(res.data);
      // console.log(res.data);
    });
  }, [enterprise]);
  const deleteHandler = (TENANT_ID) => {
    console.log(TENANT_ID);
    axios.delete(`/enterprise/${TENANT_ID}`).then((res) => {
      if (res.status === 200) {
        const newEnterprise = enterprise.filter(
          (entr) => entr.TENANT_ID !== TENANT_ID
        );
        setEnterprise([...newEnterprise]);
        toast.success(res.data.message);
      } else {
        toast.warning(res.data.message);
      }
    });
  };
  return (
    <div className=" m-2">
      <div>
        <div class="overflow-auto">
          <table class="table p-12">
            <thead class="">
              <tr>
                <th>Tenant Id</th>
                <th>Tenant Name</th>
                <th>Enterprise Name</th>
                <th>Enterprise Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {enterprise.map((enterprise) => {
                return (
                  <EnterpriseTable
                    key={enterprise._id}
                    enterprise={enterprise}
                    setModal={setModal}
                    setDeleteModal={setDeleteModal}
                  />
                );
              })}
              {modal && (
                <EnterpriseUpdateModal modal={modal} setModal={setModal} />
              )}
              {deletemodal && (
                <DeleteEnterpriseModal
                  deletemodal={deletemodal}
                  setDeleteModal={setDeleteModal}
                  deleteHandler={deleteHandler}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageEnterprise;
