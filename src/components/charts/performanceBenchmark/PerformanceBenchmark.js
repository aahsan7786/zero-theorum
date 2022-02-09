import React, {Component, Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchPerformanceBenchmarkSuccess,
  fetchPerformanceBenchmarkError,
} from "Store/charts/performanceBenchmark/actions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import {useSelector} from "react-redux";

const PerformanceBenchmark = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const hours = useSelector((item) => item.hoursReducer.hours);

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
        .then((probData) => fetchPerformanceBenchmarkSuccess(probData))
        .catch((error) => fetchPerformanceBenchmarkError(error));
    }
  }, []);

  const {
    isLoading,
    data: {date, zt_cum_perf, btc_cum_perf},
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
          "Performance\n" +
          "comparison between\n" +
          "“Buy and Hold” and\n" +
          "actively Trading Zero\n" +
          "Theorem Forward\n" +
          "Valuations"
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
          top: screen.width > 540 ? "2.5rem" : "1.5rem",
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
            x: date,
            y: zt_cum_perf,
            mode: "lines",
            name: "ZeroTheorem",
            line: {
              dash: "solid",
              width: 2,
              color: "yellow",
              // color: '#FFC600'
            },
          },
          {
            x: date,
            y: btc_cum_perf,
            mode: "lines",
            name: "BTC Benchmark",
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
            `${hours} Hour Performance Benchmark`,
            true,
            {
              l: 40,
              r: 30,
              t: 95,
              b: 30,
            },
            "",
            "",
            0.5,
            "Date",
            "Portfolio Value (USD)",
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
  connect(mapStateToProps, mapDispatchToProps)(PerformanceBenchmark)
);
