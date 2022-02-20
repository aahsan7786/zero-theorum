import React, {useEffect, Fragment, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {fetchTrendSuccess, fetchTrendError} from "Store/charts/trend/actions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from "../../../../node_modules/react-plotly.js/react-plotly";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import DateFilter from "../../date-filter/DateFilter";
import {lastWeek, _today} from "../../globalFunctions/detectDate";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {fetchData} from "../../globalFunctions/fetchData";
import Loader from "Components/loader/loader";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import DateFilterRange from "Components/date-filter-range/DateFilterRange";
import {useSelector} from "react-redux";
import {fetchMetricError, fetchMetricSuccess} from "Store/metric-box/actions";
import LocalStorage from "Components/localStorage/LocalStorage";

const periods = [
  {
    id: "week",
    title: "Last 7 Days",
    day: 7,
    isActive: true,
  },
  {
    id: "days15",
    title: "Last 15 Days",
    day: 15,
    isActive: false,
  },
  {
    id: "month",
    title: "Last 30 Days",
    day: 30,
    isActive: false,
  },
  {
    id: "quarter",
    title: "Last 90 Days",
    day: 90,
    isActive: false,
  },
  {
    id: "half_year",
    title: "Last 180 Days",
    day: 180,
    isActive: false,
  },
  {
    id: "year",
    title: "Last Year",
    day: 360,
    isActive: false,
  },
];

const TrendPlot = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const hours = useSelector((item) => item.hoursReducer.hours);

  useEffect(() => {
    const {
      api,
      fetchTrendSuccess,
      fetchTrendError,
      trendReducer,
      metricReducer,
      fetchMetricSuccess,
      fetchMetricError,
    } = props;
    if (isEmpty(trendReducer.data)) {
      fetchData(
        api.getTrend,
        fetchTrendSuccess,
        fetchTrendError,
        transformDateFormat(lastWeek())
      );
    }
    if (isEmpty(metricReducer.data)) {
      api
        .getMetric()
        .then((metricData) => {
          fetchMetricSuccess(metricData.data);
        })
        .catch((error) => fetchMetricError(error));
    }
  }, []);

  const onChangeFilter = (startDate) => {
    const {api, fetchTrendSuccess, fetchTrendError} = props;
    fetchData(api.getTrend, fetchTrendSuccess, fetchTrendError, startDate);
  };

  useEffect(() => {
    onChangeFilter(transformDateFormat(lastWeek()));
  }, [hours]);

  const onForecastDirection = (direction) => {
    let dir = direction === -1 ? "Down" : "Up";
    return (
      <p className="stat-value">
        <span className={`stat-value-arrow __${dir.toLocaleLowerCase()}`} />
      </p>
    );
  };

  const {isLoading, trendReducer, ztLearnerReducer, metricReducer} = props;

  if (isLoading) {
    return <Loader />;
  }

  useEffect(() => {
    console.log("metric", metricReducer);
  }, [metricReducer]);

  return (
    <Fragment>
      <InfoModalGraph
        show={show}
        onPress={() => setShow(!show)}
        text={
          "Forecast Price (USD) derived\n" +
          "from Zero Theorem\n" +
          "compared to Real Price(USD)\n" +
          "sourced from Binance"
        }
      />
      <ReactSVG
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
            x: trendReducer.data.date,
            y: trendReducer.data.close,
            mode: "lines",
            name: "Live Price",
            line: {
              dash: "solid",
              width: 2,
              // color: '#0F58B3'
              color: "#0f5bb9",
            },
          },
          {
            x: trendReducer.data.date,
            y: trendReducer.data.prediction,
            name: ztLearnerReducer.type,
            line: {
              color: "orange",
              width: 2,
            },
            type: "scatter",
            mode: "lines",
          },
        ]}
        layout={{
          scene: {
            xaxis: {title: "x"},
            yaxis: {title: "y"},
            zaxis: {title: "z"},
          },
          width: null,
          height: null,
          font: {
            family: "Raleway, sans-serif",
            color: "#B2B3B5",
            size: 12,
            fontWeight: 600,
          },
          title: {
            text:
              '<b><span style="margin-right: 2rem;">' +
              hours +
              " Hour Target Price:" +
              '<span style="margin: 0 2rem; color: #fff "> BTC/USD: ' +
              metricReducer?.data?.predicted_price?.toFixed(2) +
              "</span></span></b>",
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
            l: 45,
            r: 30,
            t: 95,
            b: 30,
          },
          xaxis: {
            color: "#B2B3B5",
            title: {
              text: "",
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
            // tickformat: "%H:%M",
            nticks: 10,
            // dtick: hours * 60 * 60 * 1000,
            showline: false,
            zeroline: false,
            showgrid: true,
            linecolor: "#4A4A4A",
            gridcolor: "#4A4A4A",
          },
          yaxis: {
            color: "#B2B3B5",
            title: {
              text: "<b>Price USD</b>",
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
            tickformat: "",
            showline: false,
            zeroline: false,
            showgrid: true,
            linecolor: "#4A4A4A",
            gridcolor: "#4A4A4A",
          },
          paper_bgcolor: "transparent",
          plot_bgcolor: "transparent",
          bargroupgap: false,
          bargap: 0,
          modebar: {
            bgcolor: "transparent",
          },
          barmode: "group",
          barnorm: "",
          annotations: "",
        }}
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true, scroll).config}
      />
      <DateFilter onSubmit={onChangeFilter} info={true} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    trendReducer: state.trendReducer,
    ztLearnerReducer: state.ztLearnerReducer,
    metricReducer: state.metricReducer,
  };
};

const mapDispatchToProps = {
  fetchTrendSuccess,
  fetchTrendError,
  fetchMetricSuccess,
  fetchMetricError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(TrendPlot)
);
