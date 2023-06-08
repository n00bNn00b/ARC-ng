import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EnterpriseUpdateModal = ({ modal, setModal }) => {
  const [formData, setFormData] = useState({
    TENANT_ID: modal.TENANT_ID,
    TENANT_NAME: modal.TENANT_NAME,
    ENTERPRISE_NAME: modal.ENTERPRISE_NAME,
    ENTERPRISE_TYPE: modal.ENTERPRISE_TYPE,
  });
  useEffect(() => {
    setFormData({
      TENANT_ID: modal.TENANT_ID,
      TENANT_NAME: modal.TENANT_NAME,
      ENTERPRISE_NAME: modal.ENTERPRISE_NAME,
      ENTERPRISE_TYPE: modal.ENTERPRISE_TYPE,
    });
  }, [modal]);
  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "/addEnterprise";
    axios
      .post(url, {
        TENANT_ID: formData.TENANT_ID,
        TENANT_NAME: formData.TENANT_NAME,
        ENTERPRISE_NAME: formData.ENTERPRISE_NAME,
        ENTERPRISE_TYPE: formData.ENTERPRISE_TYPE,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          toast.success("Enterprise updated successfully!");
        } else {
          toast.error("Failde to update Enterprise!");
        }
      })
      .catch((err) => console.log(err));
    console.log(formData);
    setModal(null);
  };
  return (
    <div>
      <input type="checkbox" id="update-entr-modal" className="modal-toggle" />
      <div className="modal modal-middle ">
        <form className="modal-box" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tenant Id</span>
            </label>
            <input
              type="number"
              name="TENANT_ID"
              value={formData.TENANT_ID}
              onChange={handleInputChange}
              placeholder="Tenant Id"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Tenant Name</span>
            </label>
            <input
              type="text"
              name="TENANT_NAME"
              value={formData.TENANT_NAME}
              onChange={handleInputChange}
              placeholder="Tenant name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Enterprise Name</span>
            </label>
            <input
              type="text"
              name="ENTERPRISE_NAME"
              value={formData.ENTERPRISE_NAME}
              onChange={handleInputChange}
              placeholder="Enterprise Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Enterprise Type</span>
            </label>
            <input
              type="text"
              name="ENTERPRISE_TYPE"
              value={formData.ENTERPRISE_TYPE}
              onChange={handleInputChange}
              placeholder="Enterprise Type"
              className="input input-bordered"
              required
            />
          </div>

          <div className="modal-action">
            <input
              type="submit"
              value="UPDATE"
              className="btn btn-primary text-white"
              htmlFor="update-entr-modal"
            />

            <label
              htmlFor="update-entr-modal"
              className="btn btn-error text-white"
            >
              Cancel
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterpriseUpdateModal;
