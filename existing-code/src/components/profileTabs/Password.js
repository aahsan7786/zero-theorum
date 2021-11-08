import React from "react";
import "./tabButtons.scss";

const Password = () => {
  return (
    <div className="profile-block">
      <div className="profile-form">
        <div className="profile-data">
          <label className="profile-label" htmlFor="old-password">
            OLD PASSWORD:
          </label>
          <input
            className="profile-input"
            type="password"
            id="oldPassword"
            name="old-password"
          />
        </div>
        <div className="profile-data">
          <label className="profile-label" htmlFor="new-password">
            NEW PASSWORD:
          </label>
          <input
            className="profile-input"
            type="password"
            id="newPassword"
            name="new-password"
          />
        </div>
        <div className="profile-data">
          <label className="profile-label" htmlFor="confirm-password">
            CONFIRM PASSWORD:
          </label>
          <input
            className="profile-input"
            type="password"
            id="confirmPassword"
            name="confirm-password"
          />
        </div>
      </div>
      <div className="profile-btn">
        <button className="profile-button">UPDATE</button>
      </div>
    </div>
  );
};

export default Password;
