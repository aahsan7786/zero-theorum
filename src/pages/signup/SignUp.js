import React from "react";
import "./signUp.scss";
import SignUp from "../../components/auth/SignUp";

const PopupFormSignUp = ({ close }) => {
  return (
    <div className="sign-up">
      <SignUp close={close} />

      <button className="button-close" onClick={close}>
        X
      </button>
    </div>
  );
};

export default PopupFormSignUp;
