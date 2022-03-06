import React, {lazy, Suspense, useEffect, useState} from "react";

import {makeStyles} from "@material-ui/styles";
import Info from "../../../components/InfoSction/Info";
import backtestIconHover from "./../../../assets/images/dashboardIcons/backtest/SVG/BackTest-hover.svg";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import DashboardBackground from "../DashboardBackground";
import {BACKTEST_INFO} from "../../../constants/Constants";
import DashboardBreadcrumb from "../DashboardBreadcrumb";
import "./BackTest.scss";
const AssumptionsNew = lazy(() => import("Charts/assumptions/AssumptionsNew"));
const Assumptions2New = lazy(() =>
  import("Charts/assumptions2/Assumptions2New")
);
const PerformanceBenchmark = lazy(() =>
  import("Charts/performanceBenchmark/PerformanceBenchmark")
);
const DrawDown = lazy(() => import("Charts/drawDown/DrawDown"));
const MarketCorrelation = lazy(() =>
  import("Charts/market-correlation/MarketCorrelation")
);
const MonthlyReturn = lazy(() => import("Charts/monthlyReturn/MonthlyReturn"));
const useStyles = makeStyles({});
import {useSelector} from "react-redux";

const BackTest = (props) => {
  const classes = useStyles(props);
  const hours = useSelector((item) => item.hoursReducer.hours);

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb currentPage={"Back Test"}></DashboardBreadcrumb>
      <div className="grid_container_bt">
        <div className="griditem_bt_1">
          <Info
            icon={backtestIconHover}
            heading={BACKTEST_INFO.heading}
            info={BACKTEST_INFO.info}></Info>
        </div>
        <div className="griditem_bt_2">
          <ErrorBoundry>
            <Suspense fallback={<LoadingIndicator />}>
              <AssumptionsNew />
            </Suspense>
          </ErrorBoundry>
        </div>
        <div className="griditem_bt_3">
          <ErrorBoundry>
            <Suspense fallback={<LoadingIndicator />}>
              <Assumptions2New />
            </Suspense>
          </ErrorBoundry>
        </div>
        <div className="griditem_bt_4">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Performance Benchmark`}</b>
                </div>
                <PerformanceBenchmark title={""} />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem_bt_5">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Drawdown`}</b>
                </div>
                <DrawDown title={""} />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem_bt_6">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Return Distribution`}</b>
                </div>
                <MonthlyReturn title={""} />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem_bt_7">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Return Correlation`}</b>
                </div>
                <MarketCorrelation title={""} />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
      </div>
    </>
  );
};
export default BackTest;
