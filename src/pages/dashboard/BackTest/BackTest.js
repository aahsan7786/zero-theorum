import React, {lazy, Suspense, useEffect, useState} from "react";

import {makeStyles} from "@material-ui/styles";
import Info from "../../../components/InfoSction/Info";
import backtestIconHover from "./../../../assets/images/dashboardIcons/backtest/SVG/BackTest-hover.svg";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import DashboardBackground from "../DashboardBackground";
import {BACKTEST_INFO} from "../../../constants/Constants";

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
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "1.3fr 1fr 1fr",
    gap: "0.7em",
    width: "90%",
    height: "100vh",
  },
  griditem1: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },
  griditem2: {
    border: "1px solid grey",
    gridColumnStart: "4",
    gridColumnEnd: "10",
  },
  griditem3: {
    border: "1px solid grey",
    gridColumnStart: "10",
    gridColumnEnd: "13",
  },
  griditem4: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "7",
    height: "400px",
  },
  griditem5: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "13",
  },
  griditem6: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "7",
    height: "400px",
  },
  griditem7: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "13",
  },
  chartContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: "37px 0 10px",
  },
});
const BackTest = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <h3>Backtest</h3>
      <div className={classes.grid_container}>
        <div className={classes.griditem1}>
          <Info
            icon={backtestIconHover}
            heading={BACKTEST_INFO.heading}
            info={BACKTEST_INFO.info}></Info>
        </div>
        <div className={classes.griditem2}></div>
        <div className={classes.griditem3}>
          <ErrorBoundry>
            <Suspense fallback={<LoadingIndicator />}>
              <Assumptions2New />
            </Suspense>
          </ErrorBoundry>
        </div>
        <div className={classes.griditem4}>
          <div className={classes.chartContainer}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <PerformanceBenchmark />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem5}>
          <div className={classes.chartContainer}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <DrawDown />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem6}>
          <div className={classes.chartContainer}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <MonthlyReturn />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem7}>
          <div className={classes.chartContainer}>
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
