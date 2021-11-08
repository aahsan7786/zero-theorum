import React from "react";
import "./tabButtons.scss";

const Invoices = () => {
  return (
    <div className="d-flex justify-content-center data-download-block">
      <div className="data-download-column ">
        <p className="data-download-cell">PACKAGE</p>
        <p className="data-download-cell">Early Bird Access</p>
        <p className="data-download-cell">Early Bird Access</p>
        <p className="data-download-cell">Early Bird Access</p>
      </div>
      <div className="data-download-column ">
        <p className="data-download-cell">BILLING CYCLE</p>
        <p className="data-download-cell">01.07.2021- 31.07.2021</p>
        <p className="data-download-cell">01.07.2021- 31.07.2021</p>
        <p className="data-download-cell">01.07.2021- 31.07.2021</p>
      </div>
      <div className="data-download-column ">
        <p className="data-download-cell">DATE</p>
        <p className="data-download-cell">31.06.2021</p>
        <p className="data-download-cell">31.06.2021</p>
        <p className="data-download-cell">31.06.2021</p>
      </div>
      <div className="data-download-column-noBorder">
        <p className="data-download-cell">PDF INVOICE</p>
        <div className="data-download-cell">
          <button className="profile-button">DOWNLOAD</button>
        </div>
        <div className="data-download-cell">
          <button className="profile-button">DOWNLOAD</button>
        </div>
        <div className="data-download-cell">
          <button className="profile-button">DOWNLOAD</button>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
