import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddTenant = () => {
  const handleEnterprise = (e) => {
    e.preventDefault();
    const TENANT_ID = e.target.TENANT_ID.value;
    const TENANT_NAME = e.target.TENANT_NAME.value;
    const ENTERPRISE_NAME = e.target.ENTERPRISE_NAME.value;
    const ENTERPRISE_TYPE = e.target.ENTERPRISE_TYPE.value;
    console.log(TENANT_ID, TENANT_NAME, ENTERPRISE_NAME, ENTERPRISE_TYPE);
    e.target.reset();

    const url = "/api/addEnterprise";

    axios
      .post(url, {
        TENANT_ID,
        TENANT_NAME,
        ENTERPRISE_NAME,
        ENTERPRISE_TYPE,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          toast.success("Enterprise added successfully!");
        } else {
          toast.error("Failde to add Enterprise!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card flex mx-auto w-96 bg-base-100 shadow-xl mt-20">
      <div className="card-body shadow-md">
        <form onSubmit={handleEnterprise}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tenant Id</span>
            </label>
            <input
              type="number"
              name="TENANT_ID"
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
              placeholder="Enterprise Type"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Add Tenant</button>
          </div>
        </form>
        <Link
          to="/enterprisesetup"
          className="flex text-white mx-auto btn btn-sm btn-success"
        >
          Manage Tenant
        </Link>
      </div>
    </div>
  );
};

export default AddTenant;
