import React from 'react';
import { connect } from 'react-redux';
import CountdownTimer from "../../../components/countdownTimer/CountdownTimer";
import dashPreview from "../../../assets/images/home/incentives-banner-2.png";
// import dashPreview from "../../../assets/images/quant-lab-abstract.png";

const ResearchHeader = ({ currentNavData: { icon, title } }) => {

    return(
        <div className="research-header">
            <div className="research-header-title">
                <img src={icon} alt={title} className="research-header-icon" />
                <h1 className="title-1 __dashboard">{title}</h1>
            </div>
            <div className="research-header-timer">
                <CountdownTimer />
            </div>
            <div className="research-header-preview">
                <img src={dashPreview} alt="" />
            </div>
        </div>
    )

};

const mapStateToProps = ({ researchReducer }) => {
    return researchReducer;
};

export default connect(mapStateToProps)(ResearchHeader);
