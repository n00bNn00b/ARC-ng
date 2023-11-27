import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import ManageEnterprise from "./ManageEnterprise";
import Test from "./Test";
import Tabs from "../Tabs/Tabs";

const EnterPriseSetup = () => {
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
    // <div className="card  flex mx-auto  bg-base-100 shadow-xl mt-12">
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content  flex-row sm:flex-col ">

    //       <div className="card  mx-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //         <div className="card-body">
    //           <form onSubmit={handleEnterprise}>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Tenant Id</span>
    //               </label>
    //               <input
    //                 type="number"
    //                 name="TENANT_ID"
    //                 placeholder="Tenant Id"
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Tenant Name</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 name="TENANT_NAME"
    //                 placeholder="Tenant name"
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Enterprise Name</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 name="ENTERPRISE_NAME"
    //                 placeholder="Enterprise Name"
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Enterprise Type</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 name="ENTERPRISE_TYPE"
    //                 placeholder="Enterprise Type"
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control mt-6">
    //               <button className="btn btn-primary">Add</button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //       <div className="">{<ManageEnterprise />}</div>
    //     </div>
    //   </div>

    // </div>

    <Tabs />
  );
};

export default EnterPriseSetup;
