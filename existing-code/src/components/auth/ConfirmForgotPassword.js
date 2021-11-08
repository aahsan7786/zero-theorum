import React, { useState } from "react";
import "./auth.scss";
import Auth from "@aws-amplify/auth";
import SuccesPage from "./SuccesPage";

const ForgotPassword = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [confirmation, setConfirmation] = useState(true);

  const submitData = () => {
    if (name === "" || code === "" || newPassword === "") return;
    Auth.forgotPasswordSubmit(name, code, newPassword)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setConfirmation(false);
  };

  return (
    <div className="forgot-password">
      {confirmation ? (
        <div>
          <p className="forgot-password-title">Confirm Forgot Password</p>
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

          <div className="auth-form">
            <label className="auth-label" htmlFor="code">
              Confirmation Code:
            </label>
            <input
              type="text"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="auth-input"
            />
          </div>

          <div className="auth-form">
            <label className="auth-label" htmlFor="newPassword">
              New Password:
            </label>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="auth-input"
            />
          </div>

          <div className="d-flex">
            <button
              type="submit"
              className="auth-button auth-submit"
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <SuccesPage />
      )}
    </div>
  );
};

export default ForgotPassword;
