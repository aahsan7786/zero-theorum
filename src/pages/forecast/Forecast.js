import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./forecast.scss";
import ForecastGraph from "./forecast/Forecast";
import HeaderGraphPage from "Components/headerGraphPage/HeaderGraphPage";
import thumb from "Images/icons/forecast-2.svg";
import ad from "Images/ad1.png";
import Loader from "Components/loader/loader";

const Forecast = () => {
  return (
    <section className="section hero forecast-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*<HeaderGraphPage icon={thumb} title='Forecast'/>*/}
            {/* <div
              className="download-button"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            >
              Download Data
            </div> */}
            <div className="forecast-body">
              <ForecastGraph />
            </div>
            {/*<HeaderGraphPage icon={thumb} title='Forecast'/>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ forecastReducer }) => {
  return forecastReducer;
};

export default connect(mapStateToProps)(Forecast);
