import React, { useState } from "react";
import "./auth.scss";
import Auth from "@aws-amplify/auth";
import SuccesPage from "./SuccesPage";

const ConfirmEmail = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [confirmation, setConfirmation] = useState(true);

  const submitData = () => {
    if (name === "" || code === "") return;
    Auth.confirmSignUp(name, code).catch((error) => console.log(error));
    setConfirmation(false);
  };

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(name);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  };

  return (
    <div className="confirm-email">
      {confirmation ? (
        <div>
          <p className="confirm-email-title">Confirmation Email</p>
          <p className="confirm-email-desc">
            To activate your account please confirmation email
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

          <div className="auth-form">
            <label className="auth-label" htmlFor="code">
              Verification Code:
            </label>
            <input
              type="text"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="auth-input"
            />
          </div>

          <p className="resend-code">
            Didn't get a Code?{" "}
            <span className="resend-btn" onClick={resendCode}>
              Resend Code
            </span>
          </p>

          <button
            type="submit"
            className="auth-button auth-signup"
            onClick={submitData}
          >
            Verify account
          </button>
        </div>
      ) : (
        <SuccesPage />
      )}
    </div>
  );
};

export default ConfirmEmail;
