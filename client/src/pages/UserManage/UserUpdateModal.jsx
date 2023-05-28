import React from "react";

const UserUpdateModal = ({ modal }) => {
  const { profileID, profileType } = modal;
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="user-modal" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="user-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{profileType}</h3>
          <p className="py-4">{profileID}</p>
          <div className="modal-action">
            <button className="btn btn-primary text-white">Update</button>
            <label htmlFor="user-modal" className="btn btn-error text-white">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdateModal;
