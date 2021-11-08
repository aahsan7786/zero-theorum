import React, { useState } from "react";
import "./auth.scss";
import Auth from "@aws-amplify/auth";
import ConfirmForgotPassword from "./ConfirmForgotPassword";

const ForgotPassword = () => {
  const [name, setName] = useState("");
  const [showConfirm, setShowConfirm] = useState(true);

  function confirmData() {
    if (name === "") return;
    Auth.forgotPassword(name)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setShowConfirm(false);
  }

  return (
    <div className="forgot-password">
      {showConfirm ? (
        <div>
          <p className="forgot-password-title">Forgot Password</p>
          <p className="forgot-password-desc">
            Provide your account Username. We will send you a Confirmation Code
          </p>
          <div className="auth-form">
            <label className="auth-label" htmlFor="name">
              Username:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="auth-input"
            />
          </div>

          <div className="d-flex">
            <button
              className="auth-button auth-submit"
              onClick={confirmData}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <ConfirmForgotPassword />
      )}
    </div>
  );
};

export default ForgotPassword;
