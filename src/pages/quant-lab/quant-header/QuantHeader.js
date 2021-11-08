import React from 'react';
import { connect } from 'react-redux';
import CountdownTimer from "../../../components/countdownTimer/CountdownTimer";
import dashPreview from "../../../assets/images/quant-lab-abstract.png";

const QuantHeader = ({ currentNavData: { icon, title } }) => {

    return(
        <div className="quant-header">
            <div className="quant-header-title">
                <img src={icon} alt={title} className="quant-header-icon" />
                <h1 className="title-1 __dashboard">{title}</h1>
            </div>
            <div className="quant-header-timer">
                <CountdownTimer />
            </div>
            <div className="quant-header-preview">
                <img src={dashPreview} alt="" />
            </div>
        </div>
    )

};

const mapStateToProps = ({ quantNavReducer }) => {
    return quantNavReducer;
};

export default connect(mapStateToProps)(QuantHeader);