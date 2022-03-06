import React, {Component, Fragment, useEffect, useState} from "react";
import Plot from "../../../../node_modules/react-plotly.js/react-plotly";
import DateFilter from "../../date-filter/DateFilter";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {
  fetchPerformanceBenchmarkError,
  fetchPerformanceBenchmarkSuccess,
} from "Store/charts/performanceBenchmark/actions";
import WithApiService from "Components/hoc/WithApiService";
import {connect} from "react-redux";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import {useSelector} from "react-redux";

const xValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const yValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// const yValues = ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
const zValues = [
  [0, 0, 0.8, 0.4, 0.8, 0.4, 1, 0.4, 0.2, 1],
  [0.4, 0.8, 0, 0.2, 0.4, 0.2, 0.8, 1, 1, 0.8],
  [0.2, 0.8, 0.8, 0.6, 1, 0, 0.2, 1, 0.2, 0.2],
  [0.4, 1, 0.4, 1, 0, 0.2, 1, 0.8, 0, 1],
  [0.2, 0.6, 1, 0.2, 0.4, 1, 0, 0.4, 0.8, 0.4],
  [0.2, 1, 0.4, 0.2, 1, 0, 0.6, 1, 0.4, 0.2],
  [0.8, 0.4, 1, 1, 0.2, 0.4, 0.8, 0, 1, 0.6],
  [0, 0.8, 1, 0.2, 0, 1, 0.8, 0.2, 0.6, 0.2],
  [0, 1, 0, 0.8, 0.2, 0.4, 1, 0.6, 0.2, 0.2],
  [1, 0.8, 0.8, 0.8, 0.8, 1, 0.4, 1, 0.8, 1],
  [1, 0.8, 0.8, 0.8, 0.8, 1, 0.4, 1, 0.8, 1],
  [1, 0.8, 0.8, 0.8, 0.8, 1, 0.4, 1, 0.8, 1],
];
const annotations = [];

const MarketCorrelation = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const hours = useSelector((item) => item.hoursReducer.hours);

  useEffect(() => {
    for (let i = 0; i < yValues.length; i++) {
      for (let j = 0; j < xValues.length; j++) {
        let result = {
          x: xValues[j],
          y: yValues[i],
          text: zValues[i][j],
          font: {
            size: 12,
            color: "rgb(255,255,255)",
          },
          showarrow: false,
        };
        annotations.push(result);
      }
    }
  }, []);

  const {
    isLoading,
    data: {month_month_corr},
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
          "Return correlation explores the return\n" +
          "relationships between different months\n" +
          "across several years"
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
            z: month_month_corr,
            x: xValues,
            y: yValues,
            xgap: 5,
            ygap: 5,
            colorscale: [
              ["0.0", "rgb(255,198,0)"],
              ["0.2", "rgb(207,176,36)"],
              ["0.4", "rgb(158,153,72)"],
              ["0.6", "rgb(111,132,108)"],
              ["0.8", "rgb(63,110,143)"],
              ["1.0", "rgb(15,88,179)"],
            ],
            type: "heatmap",
          },
        ]}
        layout={{
          title: {
            text: "<b>" + `${hours} Hour Return Correlation` + "</b>",
            x: 0.05,
            y: 0.98,
            font: {
              size: 16,
              color: "#deb513",
              family: "Raleway, sans-serif",
              fontWeight: 600,
            },
          },
          autosize: true,
          showlegend: true,
          legend: {
            orientation: "h",
            x: -0.04,
            y: 1.15,
            font: {
              family: "Raleway, sans-serif",
              size: 12,
              color: "#B2B3B5",
            },
          },
          margin: {
            l: 40,
            r: 30,
            t: 95,
            b: 30,
          },
          xaxis: {
            dtick: 1,
            color: "#B2B3B5",
            title: {
              text: "Month Number (ex. Jan =1, Feb= 2)",
              standoff: 0,
              font: {
                family: "Raleway, sans-serif",
                size: 12,
                color: "#B2B3B5",
              },
            },
            tickfont: {
              size: 10,
              color: "#B2B3B5",
              family: "Raleway, sans-serif",
            },
            showline: false,
            zeroline: false,
            showgrid: true,
            linecolor: "#4A4A4A",
            gridcolor: "#4A4A4A",
          },
          yaxis: {
            dtick: 1,
            color: "#B2B3B5",
            title: {
              text: "Month Number (ex. Jan =1, Feb= 2)",
              standoff: 0,
              font: {
                family: "Raleway, sans-serif",
                size: 12,
                color: "#B2B3B5",
              },
            },
            tickfont: {
              size: 10,
              color: "#B2B3B5",
              family: "Raleway, sans-serif",
            },
            showline: false,
            zeroline: false,
            showgrid: true,
            linecolor: "#4A4A4A",
            gridcolor: "#4A4A4A",
          },
          paper_bgcolor: "transparent",
          plot_bgcolor: "transparent",
          bargroupgap: false,
          bargap: 0.5,
          modebar: {
            bgcolor: "transparent",
          },
          barmode: "group",
        }}
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true, scroll).config}
      />
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          color: "#9E9FA1",
        }}>
        Correlation
      </div>
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
  connect(mapStateToProps, mapDispatchToProps)(MarketCorrelation)
);
// export default MarketCorrelation;
