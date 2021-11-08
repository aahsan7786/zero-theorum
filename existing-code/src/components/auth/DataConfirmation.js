import React from "react";
import "./auth.scss";

const DataConfirm = () => {
  return (
    <div className="confirm-data">
      <p className="confirm-data-title">Confirmation</p>
      <p className="confirm-data-desc">
        Thank you for your submission. We will be in touch within the next 24
        hours. If you not heard a response within 24 hours, please reach out to{" "}
        <a href="mailto:contact@zerotheorem.com" className="blue">
          contact@zerotheorem.com
        </a>{" "}
        with your Name and IP address as subject line.
      </p>
    </div>
  );
};

export default DataConfirm;
