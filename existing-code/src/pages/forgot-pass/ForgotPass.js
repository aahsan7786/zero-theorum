import React from "react";
import ForgotPassword from "../../components/mailchimp/ForgotPassword";
import "./forgotPass.scss";

const ForgotPass = ({ close }) => {
  return (
    <div className="forgot-pass">
      <p className="forgot-pass-title">Forgot Password</p>
      <p className="forgot-pass-desc">Provide your account email. We will send you a password reset link</p>
      <ForgotPassword close={close} />

      <button className="button-close" onClick={close}>
        X
      </button>
    </div>
  );
};

export default ForgotPass;
