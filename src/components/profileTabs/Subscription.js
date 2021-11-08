import React from "react";
import "./tabButtons.scss";

const Subscription = () => {
  return (
    <div className="profile-block">
      <div className="profile-form">
        <div className="profile-sub">
          <p className="profile-label">PACKAGE:</p>
          <p className="profile-subscription">Early Bird Access</p>
        </div>
        <div className="profile-sub">
          <p className="profile-label">BILLING CYCLE:</p>
          <p className="profile-subscription">Monthly</p>
        </div>
        <div className="profile-sub">
          <p className="profile-label">START DATE:</p>
          <p className="profile-subscription">30.08.2021</p>
        </div>
      </div>
      <div className="profile-form">
        <div className="profile-sub">
          <p className="profile-label">PRICE:</p>
          <p className="profile-subscription">$4.95</p>
        </div>
        <div className="profile-sub">
          <p className="profile-label">STATUS:</p>
          <p className="profile-subscription">Active</p>
        </div>
        <div className="profile-sub">
          <p className="profile-label">NEXT BILLING DATE:</p>
          <p className="profile-subscription">30.09.2021</p>
        </div>
      </div>
      <div className="profile-btn">
        <button className="profile-button">
          CANCEL
          <br /> SUBSCRIPTION
        </button>
      </div>
    </div>
  );
};

export default Subscription;
