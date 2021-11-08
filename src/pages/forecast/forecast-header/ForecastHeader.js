import React from 'react';
import { connect } from 'react-redux';
import CountdownTimer from "../../../components/countdownTimer/CountdownTimer";
import dashPreview from "../../../assets/images/home/incentives-banner-2.png";
// import dashPreview from "../../../assets/images/quant-lab-abstract.png";

const ForecastHeader = ({ currentNavData: { icon, title } }) => {

    return(
        <div className="forecast-header py-5">
            <div className="forecast-header-title">
                <img src={icon} alt={title} className="forecast-header-icon" />
                <h1 className="title-1 __dashboard">{title}</h1>
            </div>
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

export default connect(mapStateToProps)(ForecastHeader);
