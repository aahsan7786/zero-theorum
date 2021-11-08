import React from "react";
import "./tabButtons.scss";

const Billing = () => {
  return (
    <div className="profile-block">
      <div className="profile-billing">
        <div className="profile-data">
          <label className="profile-label" htmlFor="billing-name">
            NAME:
          </label>
          <input
            className="profile-input"
            type="text"
            id="billingName"
            name="billing-name"
          />
        </div>
        <div className="profile-data billing-form">
          <label className="profile-label" htmlFor="billing-address">
            BILLING ADDRESS:
          </label>
          <textarea
            className="profile-textarea"
            type="text"
            id="billingAddress"
            name="billing-address"
            rows="3"
          />
        </div>
      </div>
      <div className="profile-billing">
        <div className="profile-data">
          <label className="profile-label" htmlFor="billing-last-name">
            LAST NAME:
          </label>
          <input
            className="profile-input"
            type="text"
            id="billingLastName"
            name="billing-last-name"
          />
        </div>
        <div className="profile-sub">
          <p className="profile-label">CREDIT CARD:</p>
          <p className="profile-subscription">visa ending in 8570</p>
        </div>
      </div>
      <div className="profile-billing-button">
        <button className="profile-button">UPDATE</button>
        <button className="profile-button">
          USE A <br /> DIFFERENT <br /> CREDIT CARD
        </button>
      </div>
    </div>
  );
};

export default Billing;
