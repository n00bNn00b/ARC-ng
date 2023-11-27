import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const AddProfileModal = ({ modal }) => {
  const { USER_ID } = modal;
  const handleProfileAdd = async (e) => {
    e.preventDefault();
    const profileType = e.target.profileType.value;
    const profileName = e.target.profileName.value;
    // console.log(profileType, " : ", profileName);
    const url = "/api/addprofile";
    await axios
      .post(url, {
        USER_ID,
        PROFILE_TYPE: profileType,
        PROFILE_NAME: profileName,
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err.response.data.error));
    e.target.reset();
  };
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="user-modal" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="profile-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-center text-lg">Add A Profile</h3>
          <form
            className="form-control w-full max-w-xs flex mx-auto"
            onSubmit={handleProfileAdd}
          >
            <label className="label">
              <span className="label-text font-bold">Profile Type</span>
            </label>
            <input
              type="text"
              placeholder="Enter Profile Type"
              name="profileType"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text font-bold">Profile Name</span>
            </label>
            <input
              type="text"
              placeholder="Type New Profile Name"
              name="profileName"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="modal-action justify-between">
              <input
                className="btn btn-primary text-white"
                type="submit"
                value="Add Profile"
              />
              <label
                htmlFor="profile-modal"
                className="btn btn-error text-white"
              >
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfileModal;
