import React from 'react';
import { connect } from 'react-redux';
import './headerGraphPage.scss';
import CountdownTimer from "../countdownTimer/CountdownTimer";
import dashPreview from "../../assets/images/home/incentives-banner-2.png";
// import dashPreview from "../../assets/images/quant-lab-abstract.png";

const HeaderGraphPage = ({className}) => {

    return(
        <div className={["graph-header py-5 mb-3", className].join(" ")}>
            <h1>Advertising block</h1>
            {/*<div className="graph-header-title">*/}
            {/*    <img src={icon} alt={title} className="graph-header-icon" />*/}
            {/*    <h1 className="title-1 __dashboard">{title}</h1>*/}
            {/*</div>*/}
            {/*<div className="forecast-header-timer">*/}
            {/*    <CountdownTimer />*/}
            {/*</div>*/}
            {/*<div className="forecast-header-preview">*/}
            {/*    <img src={dashPreview} alt="" />*/}
            {/*</div>*/}
        </div>
    )

};

const mapStateToProps = ({ forecastReducer }) => {
    return forecastReducer;
};

export default connect(mapStateToProps)(HeaderGraphPage);
