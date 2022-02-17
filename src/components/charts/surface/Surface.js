import React, {Component, Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchMetricsCallsSurfaceSuccess,
  fetchMetricsCallsSurfaceError,
} from "../../../store/charts/metricsCallsSurface/actions";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const graphData = {
  z: [
    [8.83, 8.89, 8.81, 8.87, 8.9, 8.87],
    [8.89, 8.94, 8.85, 8.94, 8.96, 8.92],
    [8.84, 8.9, 8.82, 8.92, 8.93, 8.91],
    [8.79, 8.85, 8.79, 8.9, 8.94, 8.92],
    [8.79, 8.88, 8.81, 8.9, 8.95, 8.92],
    [8.8, 8.82, 8.78, 8.91, 8.94, 8.92],
    [8.75, 8.78, 8.77, 8.91, 8.95, 8.92],
    [8.8, 8.8, 8.77, 8.91, 8.95, 8.94],
    [8.74, 8.81, 8.76, 8.93, 8.98, 8.99],
    [8.89, 8.99, 8.92, 9.1, 9.13, 9.11],
    [8.97, 8.97, 8.91, 9.09, 9.11, 9.11],
    [9.04, 9.08, 9.05, 9.25, 9.28, 9.27],
    [9, 9.01, 9, 9.2, 9.23, 9.2],
    [8.99, 8.99, 8.98, 9.18, 9.2, 9.19],
    [8.93, 8.97, 8.97, 9.18, 9.2, 9.18],
  ],
  masterGraph: {
    title: "Title",
    xAxis: "X-Axis",
    yAxis: "Y-Axis",
    zAxis: "Z-Axis",
  },
};

const Surface = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const {
      api,
      fetchMetricsCallsSurfaceSuccess,
      fetchMetricsCallsSurfaceError,
      data,
    } = props;
    if (isEmpty(data)) {
      api
        .getMetricCallsSurface()
        .then((probData) => fetchMetricsCallsSurfaceSuccess(probData))
        .catch((error) => fetchMetricsCallsSurfaceError(error));
    }
  }, []);

  const {
    isLoading,
    type,
    data: {xcalls, ycalls, zcalls, xputs, yputs, zputs, xDiff, yDiff, zDiff},
  } = props;

  if (isLoading) {
    return <Loader />;
  }

  let x, y, z, c;
  if (type === "Calls") {
    x = xcalls;
    y = ycalls;
    z = zcalls;
    c = "rgb(255,127,80)";
  } else if (type === "Puts") {
    x = xputs;
    y = yputs;
    z = zputs;
    c = "rgb(255,234,80)";
  } else {
    x = xDiff;
    y = yDiff;
    z = zDiff;
    c = "rgb(12,127,80)";
  }

  return (
    <Fragment>
      <InfoModalGraph
        show={show}
        onPress={() => setShow(!show)}
        text={props.info}
      />
      <ReactSVG
        // className={["", scroll ? "scroll" : "", scrollTwo ? "scrollTwo" : ""].join(" ")}
        renumerateIRIElements={false}
        src={information}
        wrapper="div"
        onClick={() => {
          setShow(!show);
        }}
        style={{
          top: screen.width > 540 ? "0.5rem" : "1.5rem",
          zIndex: 2,
          width: "1.4rem",
          fill: "#ccc",
          position: "absolute",
          right: "2rem",
        }}
      />
      <Plot
        onClick={() => setScroll(true)}
        data={[
          {
            color: c,
            type: "mesh3d",
            x,
            y,
            z,
            scene: "scene1",
          },
        ]}
        layout={
          viewSettingsLayout(
            `${type} Options Volatility Surface`,
            true,
            {
              l: 50,
              r: 0,
              t: 0,
              b: 20,
            },
            "",
            "",
            0,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "Strike",
            "Time to Maturity",
            "Implied Volatility"
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true, scroll).config}
      />
      <div className="dashboard-box-rotate">Click To Rotate</div>
      {/*<DateFilter info={true}/>*/}
    </Fragment>
  );
};

const mapStateToProps = ({metricsCallSurfaceReducer}) => {
  return metricsCallSurfaceReducer;
};

const mapDispatchToProps = {
  fetchMetricsCallsSurfaceSuccess,
  fetchMetricsCallsSurfaceError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(Surface)
);
