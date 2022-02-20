import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";

import {makeStyles} from "@material-ui/styles";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import {useSelector} from "react-redux";
import clsx from "clsx";

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

const useStyles = makeStyles({
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: ".9fr 1fr 1fr",
    gap: "0.5em",
    width: "90%",
    height: "100vh",
  },
  chartContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: "50px 0 10px",
  },
  griditem1: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "11",
  },
  griditem2: {
    border: "1px solid grey",
    gridColumnStart: "11",
    gridColumnEnd: "13",
  },
  griditem3: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "4",
    height: "350px",
  },
  griditem4: {
    border: "1px solid grey",
    gridColumnStart: "4",
    gridColumnEnd: "7",
  },
  griditem5: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "10",
  },
  griditem6: {
    border: "1px solid grey",
    gridColumnStart: "10",
    gridColumnEnd: "13",
  },
  griditem7: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "7",
  },
  griditem8: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "13",
  },
  paddingTop: {
    paddingTop: "10px",
  },
});
const ForwardValuation = (props) => {
  const classes = useStyles(props);
  const hours = useSelector((item) => item.hoursReducer.hours);

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb
        currentPage={"Forward Valuation"}></DashboardBreadcrumb>

      <div className={classes.grid_container}>
        <div className={clsx(classes.griditem1, classes.paddingTop)}>
          <div
            className={classes.chartContainer}
            style={{padding: "10px 0 10px"}}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <TrendPlot />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem2}>
          <div className={""}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <MetricBox />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={clsx(classes.griditem3, classes.paddingTop)}>
          <div className={clsx(classes.chartContainer)}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <RollingMads
                  info={
                    "Average Target Accuracy is\n" +
                    "determined by measuring if\n" +
                    "the real price reached the\n" +
                    "expected forecasted price"
                  }
                  title={`${hours} Hour Average Target Accuracy`}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={clsx(classes.griditem4, classes.paddingTop)}>
          <div className={classes.chartContainer}>
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
        <div className={clsx(classes.griditem5, classes.paddingTop)}>
          <div className={classes.chartContainer}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <RollingMads
                  info={
                    "Average Directional Accuracy is\n" +
                    "determined by measuring if\n" +
                    "the real price persisted in the\n" +
                    "expected forecasted directional\n" +
                    "for duration of forecast"
                  }
                  title={`${hours} Hour Average Directional Accuracy`}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem6}>
          <div className={classes.chartContainer}>
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
        <div className={classes.griditem7}>
          {" "}
          <div className={classes.chartContainer}>
            {" "}
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <Surface
                  type={"Calls"}
                  info={
                    "Implied volatility surface\n" +
                    "calculated from Deribit BTC call\n" +
                    "options"
                  }
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem8}>
          {" "}
          <div className={classes.chartContainer}>
            {" "}
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <Surface
                  type={"Puts"}
                  info={
                    "Implied volatility surface\n" +
                    "calculated from Deribit BTC put\n" +
                    "options"
                  }
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
