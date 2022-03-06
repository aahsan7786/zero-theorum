import React, {useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {
  fetchPerformanceBenchmarkError,
  fetchPerformanceBenchmarkSuccess,
} from "Store/charts/performanceBenchmark/actions";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import information from "Images/icons/information.svg";
import {ReactSVG} from "react-svg";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import "./../metric-box/metric-box.scss";
const Assumptions2New = (props) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const {
      api,
      fetchPerformanceBenchmarkSuccess,
      fetchPerformanceBenchmarkError,
      data,
    } = props;

    if (isEmpty(data)) {
      api
        .getPerformanceBenchmark()
        .then((metricData) => fetchPerformanceBenchmarkSuccess(metricData))
        .catch((error) => fetchPerformanceBenchmarkError(error));
    }
  }, []);

  const {isLoading, data} = props;

  if (isLoading || isEmpty(data)) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div
        className="yellow"
        style={{position: "absolute", marginLeft: "10px"}}>
        <b>{"PERFORMANCE METRICS"}</b>
      </div>
      <div className="metrix-box-continer" style={{padding: "20px 40px"}}>
        <ul class="timeline">
          <li>
            <div className="metric-row">
              <p className="metric-label">Total Returns:</p>
              <div className="metric-value">{data.stats.total_returns}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Benchmark Returns:</p>
              <div className="metric-value">{data.stats.benchmark_returns}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Daily Sharpe:</p>
              <div className="metric-value">{data.stats.daily_sharpe}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Daily Sortino:</p>
              <div className="metric-value">{data.stats.daily_sortino}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Annual Sortino:</p>
              <div className="metric-value">{data.stats.annual_sortino}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Max Drawdown:</p>
              <div className="metric-value">{data.stats.max_draw_down}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Max Lake Ratio:</p>
              <div className="metric-value">{data.stats.max_lake_ratio}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Alpha:</p>
              <div className="metric-value">{data.stats.alpha.toFixed(2)}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label">Beta:</p>
              <div className="metric-value">{data.stats.beta.toFixed(2)}</div>
            </div>
          </li>
          <li>
            <div className="metric-row">
              <p className="metric-label"> Kelly Leverage:</p>
              <div className="metric-value">
                {data.stats.KellyLeverage.toFixed(2)}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = ({performanceBenchmarkReducer}) => {
  return performanceBenchmarkReducer;
};

const mapDispatchToProps = {
  fetchPerformanceBenchmarkSuccess,
  fetchPerformanceBenchmarkError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(Assumptions2New)
);
