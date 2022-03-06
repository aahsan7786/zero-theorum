import React, {Component, Fragment, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchPerformanceBenchmarkSuccess,
  fetchPerformanceBenchmarkError,
} from "Store/charts/performanceBenchmark/actions";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import {useSelector} from "react-redux";

const DrawDown = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const hours = useSelector((item) => item.hoursReducer.hours);

  const {
    isLoading,
    title,
    data: {date, PctDrawdown},
  } = props;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <InfoModalGraph
        show={show}
        onPress={() => setShow(!show)}
        text={
          "Drawdown explores the\n" +
          "percentage losses occurred via\n" +
          "trading zero theorem forward\n" +
          "valuations. Here the intensity,\n" +
          "duration and recovery horizon\n" +
          "are of particular interest"
        }
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
        className={"infoBtn"}
      />
      <Plot
        onClick={() => setScroll(true)}
        data={[
          {
            x: date,
            y: PctDrawdown,
            mode: "lines",
            name: "PctDrawdown",
            fill: "tonexty",
            line: {
              dash: "solid",
              width: 2,
              color: "#0F58B3",
              // color: '#FFC600'
            },
          },
        ]}
        layout={
          viewSettingsLayout(
            title,
            true,
            {
              l: 40,
              r: 30,
              t: 95,
              b: 30,
            },
            "",
            "%y/%d/%m",
            0.5,
            "Date",
            "Percentage Loss",
            "stack",
            "percent",
            true,
            true
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true, scroll).config}
      />
      {/*<DateFilter />*/}
    </Fragment>
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
  connect(mapStateToProps, mapDispatchToProps)(DrawDown)
);
