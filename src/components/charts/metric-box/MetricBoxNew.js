import React, {Component, Fragment, useState} from "react";
import "./metric-box.scss";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {fetchMetricSuccess, fetchMetricError} from "Store/metric-box/actions";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import LocalStorage from "../../localStorage/LocalStorage";
import InfoComponent from "Components/info-component/infoComponent";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";

const MetricBoxNew = (props) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const {isLoading, data} = props;

  if (isLoading || isEmpty(data)) {
    return <LoadingIndicator />;
  }

  return (
    <div className="metrix-box-continer">
      <p className="dashboard-box-title yellow" style={{fontSize: "13px"}}>
        <b>PERFORMANCE METRICS</b>
      </p>
      <ul class="timeline">
        <li>
          <div className="metric-row">
            <p className="metric-label">RMSE:</p>
            <div className="metric-value">{data.rmse.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">TPR:</p>
            <div className="metric-value">{data.tpr.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">NPV:</p>
            <div className="metric-value">{data.npv.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">F1:</p>
            <div className="metric-value">{data.f1.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">MAPE:</p>
            <div className="metric-value">{data.mape.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">TNR:</p>
            <div className="metric-value">{data.tnr.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">PT:</p>
            <div className="metric-value">{data.pt.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">ACC:</p>
            <div className="metric-value">{data.acc.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">MADS:</p>
            <div className="metric-value">{data.mads.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">PPV:</p>
            <div className="metric-value">{data.ppv.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">TS:</p>
            <div className="metric-value">{data.ts.toFixed(2)}</div>
          </div>
        </li>
        <li>
          <div className="metric-row">
            <p className="metric-label">BA:</p>
            <div className="metric-value">{data.ba.toFixed(2)}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({metricReducer}) => {
  return metricReducer;
};

const mapDispatchToProps = {
  fetchMetricSuccess,
  fetchMetricError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(MetricBoxNew)
);
