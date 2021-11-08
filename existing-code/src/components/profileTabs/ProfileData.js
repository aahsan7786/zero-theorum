import React from "react";
import "./tabButtons.scss";

const ProfileData = () => {
  return (
      <div className="profile-block">
    <div className="profile-form">
      <div className="profile-data">
        <label className="profile-label" htmlFor="first-name">
          FIRST NAME:
        </label>
        <input
          className="profile-input"
          type="text"
          id="firstName"
          name="first-name"
        />
      </div>
      <div className="profile-data">
        <label className="profile-label" htmlFor="last-name">
          LAST NAME:
        </label>
        <input
          className="profile-input"
          type="text"
          id="lastName"
          name="last-name"
        />
      </div>
      <div className="profile-data">
        <label className="profile-label" htmlFor="email">
          EMAIL:
        </label>
        <input className="profile-input" type="email" id="email" name="email" />
      </div>
      <div className="profile-data">
        <label className="profile-label" htmlFor="mobile">
          MOBILE:
        </label>
        <input
          className="profile-input"
          type="text"
          id="mobile"
          name="mobile"
        />
      </div>
    </div>
    <div className="profile-btn">
        <button className="profile-button">UPDATE</button>
    </div>
    </div>
  );
};

export default ProfileData;
