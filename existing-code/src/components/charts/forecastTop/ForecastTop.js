import React, { useEffect, useState } from "react";
import WithApiService from "../../hoc/WithApiService";
import { connect } from "react-redux";
import { isEmpty } from "../../globalFunctions/globalFunctions";
import { fetchMetricSuccess, fetchMetricError } from "Store/metric-box/actions";
import { changeZTLearner } from "Store/ztLearner/actions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import LocalStorage from "Components/localStorage/LocalStorage";
import FlipCountdown from "@rumess/react-flip-countdown";
import ResearchTag from "../../../pages/research/tag/ResearchTag";
import Select from "react-select";
import { useSelector } from "react-redux";
import "./assumptions.scss";
import {Link} from "react-router-dom";

const optionsModelType = [
  { value: "ZT-A2C", label: "ZT-A2C" },
  { value: "ZT-AWR", label: "ZT-AWR" },
  { value: "ZT-BEAR", label: "ZT-BEAR" },
  { value: "ZT-CQL", label: "ZT-CQL" },
  { value: "ZT-DDPG", label: "ZT-DDPG" },
  { value: "ZT-TD3", label: "ZT-TD3" },
  { value: "ZT-AWAC", label: "ZT-AWAC" },
  { value: "ZT-PLAS", label: "ZT-PLAS" },
  { value: "ZTSAC", label: "ZTSAC" },
];

const ForecastTop = (props) => {
  const [forecastPriceDirection, setForecastPriceDirection] = useState("down");
  const [modelType, setModelType] = useState();

  const hours = useSelector((item) => item.hoursReducer.hours);

  const { api, fetchMetricSuccess, fetchMetricError, data } = props;

  useEffect(() => {
    if (isEmpty(data)) {
      api
        .getMetric()
        .then((metricData) => {
          fetchMetricSuccess(metricData.data);
          detectDataWithLocalStorage(metricData.data.predicted_price);
        })
        .catch((error) => fetchMetricError(error));
    }
    props.changeZTLearner('ZT-AWC')
  }, []);

  const detectDataWithLocalStorage = (data) => {
    const localStorage = new LocalStorage();
    const localData = localStorage.getState("forecastPrice");
    if (localData && localData < data) {
      setForecastPriceDirection("up");
    }
  };

  const onForecastDirection = (direction) => {
    let dir = direction === -1 ? "Down" : "Up";
    return (
      <p className="stat-value">
        {dir}{" "}
        <span className={`stat-value-arrow __${dir.toLocaleLowerCase()}`} />
      </p>
    );
  };

  const { isLoading } = props;

  if (isLoading || isEmpty(data)) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <div
        className={`${screen.width > 540 ? "" : "row"} ${
          screen.width < 1024 ? "flex-wrap" : ""
        } d-flex align-items-center`}
      >
        <div className="dashboard-box __resize w-100 stat-list flex-column align-items-center">
          <p className="stat-label __big yellow">{hours} Hour Target Price:</p>
          <p className="stat-value">
            BTC/USD: ${data.predicted_price.toFixed(2)}
          </p>
        </div>
        <div className="dashboard-box p-0 mx-3 __resize w-100 stat-list flex-column align-items-center">
          <p className="stat-label __big yellow">Selected Alpha DRL:</p>
          Model Type
          <div>
            ZT-AWC
          </div>
          {/*<Select*/}
          {/*  value={modelType}*/}
          {/*  onChange={(e) => {*/}
          {/*    setModelType(e);*/}
          {/*    props.changeZTLearner(e.label);*/}
          {/*  }}*/}
          {/*  options={optionsModelType}*/}
          {/*  className="select-white2"*/}
          {/*/>*/}
          <Link to="/research" className="w-100">
            <div className="blue w-100 pr-3 mt-3 text-right">Learn More</div>
          </Link>
        </div>
        <div className="dashboard-box __resize w-100 py-4 d-flex flex-column align-items-center">
          <div className="h4 mb-4 yellow">
            <b>Next Update:</b>
          </div>
          <FlipCountdown
            size="small"
            yearTitle="Year"
            monthTitle="Months"
            dayTitle="Days"
            hourTitle="Hours"
            minuteTitle="Minutes"
            secondTitle="Seconds"
            hideYear
            hideMonth
            hideDay
            titlePosition="bottom"
            // hideHour
            // hideMinute
            // hideSecond
            endAtZero
            style={{ margin: 0 }}
            endAt={"2025-07-9 00:00:00"} // Date/Time
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ metricReducer }) => {
  return metricReducer;
};

const mapDispatchToProps = {
  fetchMetricSuccess,
  fetchMetricError,
  changeZTLearner,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(ForecastTop)
);
