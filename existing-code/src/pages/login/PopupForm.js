import React from "react";
import "./popupForm.scss";
import SignIn from "../../components/auth/SignIn";

const PopupForm = ({ close }) => {
  return (
    <div className="login">
      <SignIn close={close} />

      <button className="button-close" onClick={close}>
        X
      </button>
    </div>
  );
};

export default PopupForm;
