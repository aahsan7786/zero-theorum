import React from "react";
import "./auth.scss";
import success from 'Images/success.png'

const SuccesPage = () => {
  return <div className="succes-page">
      <p className="succes-page-title">Success</p>
      <img className="succes-page-image" src={success} alt="success" />
  </div>;
};

export default SuccesPage;
