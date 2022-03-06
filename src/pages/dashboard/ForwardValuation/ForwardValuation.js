import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";

import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import {useSelector} from "react-redux";
import "./ForwardValuation.scss";

const TrendPlot = lazy(() => import("Charts/trendPlot/TrendPlot"));
const MetricBox = lazy(() => import("Charts/metric-box/MetricBoxNew"));
const RollingMads = lazy(() =>
  import("../../../components/charts/rollingMads/RollingMads")
);
const MadsDist = lazy(() =>
  import("../../../components/charts/madsDist/MadsDist")
);
const Surface = lazy(() =>
  import("../../../components/charts/surface/Surface")
);
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import DashboardBackground from "../DashboardBackground";
import DashboardBreadcrumb from "../DashboardBreadcrumb";

const ForwardValuation = (props) => {
  const hours = useSelector((item) => item.hoursReducer.hours);
  const metricReducer = useSelector((state) => state.metricReducer);
  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb
        currentPage={"Forward Valuation"}></DashboardBreadcrumb>

      <div className="grid_container" id="forwardValuation">
        <div className="griditem1 paddingTop">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>
                    <span>
                      {hours}
                      Hour Target Price:{" "}
                      <span style={{color: "#fff"}}>
                        BTC/USD:{" "}
                        {metricReducer?.data?.predicted_price?.toFixed(2)}
                      </span>
                    </span>
                  </b>
                </div>
                <TrendPlot title={""} />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem2">
          <div className={""}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <MetricBox />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem3 paddingTop">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Average Target Accuracy`}</b>
                </div>
                <RollingMads
                  info={
                    "Average Target Accuracy is\n" +
                    "determined by measuring if\n" +
                    "the real price reached the\n" +
                    "expected forecasted price"
                  }
                  title={""}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem4 paddingTop">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Average Target Accuracy per Time Horizon`}</b>
                </div>
                <MadsDist
                  info={
                    "Measuring the average\n" +
                    "target accuracy with\n" +
                    "alternative time horizons:\n" +
                    "7days, 10 days, 30 days, 45\n" +
                    "Days, 90 days and 180 days."
                  }
                  title={""}
                  apiRoute="getTasDist"
                  type="tas"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem5 paddingTop">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Average Directional Accuracy`}</b>
                </div>
                <RollingMads
                  info={
                    "Average Directional Accuracy is\n" +
                    "determined by measuring if\n" +
                    "the real price persisted in the\n" +
                    "expected forecasted directional\n" +
                    "for duration of forecast"
                  }
                  title={""}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem6 paddingTop">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Average Directional Accuracy per Time Horizon`}</b>
                </div>
                <MadsDist
                  info={
                    "Measuring the Directional\n" +
                    "Accuracy with alternative\n" +
                    "time horizons: 7days, 10\n" +
                    "days, 30 days, 45 Days, 90\n" +
                    "days and 180 days."
                  }
                  title={""}
                  apiRoute="getMadsDist"
                  type="mads"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem7 paddingTop">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{"Calls Options Volatility Surface"}</b>
                </div>
                <Surface
                  type={"Calls"}
                  info={
                    "Implied volatility surface\n" +
                    "calculated from Deribit BTC call\n" +
                    "options"
                  }
                  title={""}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem8 paddingTop">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{"Calls Options Volatility Surface"}</b>
                </div>
                <Surface
                  type={"Puts"}
                  info={
                    "Implied volatility surface\n" +
                    "calculated from Deribit BTC put\n" +
                    "options"
                  }
                  title={""}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForwardValuation;
