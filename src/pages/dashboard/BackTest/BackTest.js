import React, {lazy, Suspense, useEffect, useState} from "react";

import {makeStyles} from "@material-ui/styles";
import Info from "../../../components/InfoSction/Info";
import backtestIconHover from "./../../../assets/images/dashboardIcons/backtest/SVG/BackTest-hover.svg";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import DashboardBackground from "../DashboardBackground";
import {BACKTEST_INFO} from "../../../constants/Constants";
import DashboardBreadcrumb from "../DashboardBreadcrumb";
import "./BackTest.scss"
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
const useStyles = makeStyles({
  // grid_container_bt: {
  //   position: "absolute",
  //   left: "5%",
  //   display: "grid",
  //   gridTemplateColumns: "repeat(12, 1fr)",
  //   gridTemplateRows: "1.3fr 1fr 1fr",
  //   gap: "0.7em",
  //   width: "90%",
  //   height: "100vh",
  // },
  // griditem_bt_1: {
  //   border: "1px solid grey",
  //   gridColumnStart: "1",
  //   gridColumnEnd: "4",
  // },
  // griditem_bt_2: {
  //   border: "1px solid grey",
  //   gridColumnStart: "4",
  //   gridColumnEnd: "10",

  //   display: "flex",
  //   alignItems: "center",
  // },
  // griditem_bt_3: {
  //   border: "1px solid grey",
  //   gridColumnStart: "10",
  //   gridColumnEnd: "13",
  // },
  // griditem_bt_4: {
  //   border: "1px solid grey",
  //   gridColumnStart: "1",
  //   gridColumnEnd: "7",
  //   height: "400px",
  // },
  // griditem_bt_5: {
  //   border: "1px solid grey",
  //   gridColumnStart: "7",
  //   gridColumnEnd: "13",
  // },
  // griditem_bt_6: {
  //   border: "1px solid grey",
  //   gridColumnStart: "1",
  //   gridColumnEnd: "7",
  //   height: "400px",
  // },
  // griditem_bt_7: {
  //   border: "1px solid grey",
  //   gridColumnStart: "7",
  //   gridColumnEnd: "13",
  // },
  // chartContainer: {
  //   width: "100%",
  //   height: "100%",
  //   position: "relative",
  //   padding: "37px 0 10px",
  // },
});

const BackTest = (props) => {
  const classes = useStyles(props);

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
                <PerformanceBenchmark />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem_bt_5">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <DrawDown />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem_bt_6">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <MonthlyReturn />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className="griditem_bt_7">
          <div className="chartContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <MarketCorrelation />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
      </div>
    </>
  );
};
export default BackTest;
