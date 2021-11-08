import React, { useState } from "react";
import "./auth.scss";
import DataConfirm from "./DataConfirmation";

const DataPopup = ({ close }) => {
  const [confirmation, setConfirmation] = useState(true);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  const handleSubmit = () => {
    if (email && firstName && ipAddress) setConfirmation(false);
  };

  return (
    <div className="data-api">
      <div className="auth">
        {confirmation ? (
          <div>
            <p className="data-api-title">API SEAT UNLOCKED</p>
            <p className="data-api-desc">
              You will receive an email with your unique API key locked to the
              IP address defined below
            </p>
            <div className="auth-form">
              <label className="auth-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="auth-input"
              />
            </div>
            <div className="auth-form">
              <label className="auth-label" htmlFor="firstName">
                Name:
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                className="auth-input"
              />
            </div>
            <div className="auth-form">
              <label className="auth-label" htmlFor="ipAddress">
                IP Address:
              </label>
              <input
                type="text"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                name="ipAddress"
                className="auth-input"
              />
            </div>

            <button
              type="submit"
              className="auth-button auth-signup"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <DataConfirm />
        )}
      </div>
      <button className="button-close" onClick={close}>
        X
      </button>
    </div>
  );
};

export default DataPopup;
