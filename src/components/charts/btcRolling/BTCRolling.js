import React, {Component, Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {
  fetchBTCRollingSuccess,
  fetchBTCRollingError,
} from "Store/charts/btcRolling/actions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from "../../../../node_modules/react-plotly.js/react-plotly";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import DateFilter from "../../date-filter/DateFilter";
import {fetchData} from "../../globalFunctions/fetchData";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {lastWeek} from "../../globalFunctions/detectDate";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const BTCRolling = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const {api, fetchBTCRollingSuccess, fetchBTCRollingError, data} = props;
    if (isEmpty(data)) {
      fetchData(
        api.getBTCRolling,
        fetchBTCRollingSuccess,
        fetchBTCRollingError,
        transformDateFormat(lastWeek())
      );
    }
  }, []);

  const onChangeFilter = (startDate) => {
    const {api, fetchBTCRollingSuccess, fetchBTCRollingError} = props;
    fetchData(
      api.getBTCRolling,
      fetchBTCRollingSuccess,
      fetchBTCRollingError,
      startDate
    );
  };

  const {
    isLoading,
    data: {date, sharpe},
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
          "Sharpe Ratio is the ratio of average\n" +
          "return per unit of volatility and is\n" +
          "often used to measure the quality\n" +
          "of an investment"
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
      />
      <Plot
        data={[
          {
            x: date,
            y: sharpe,
            mode: "lines",
            name: "30 Day Rolling Average",
            line: {
              dash: "solid",
              width: 2,
              // color: '#0F58B3'
              color: "#0f5bb9",
            },
          },
        ]}
        layout={
          viewSettingsLayout(
            "BTC Sharpe Ratio",
            true,
            {
              l: 30,
              r: 30,
              t: 95,
              b: 30,
            },
            "%y/%d/%m",
            "",
            0,
            "Date",
            "Sharpe Ratio"
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig().config}
      />
      <DateFilter onSubmit={onChangeFilter} info={true} />
    </Fragment>
  );
};

const mapStateToProps = ({btcRollingReducer}) => {
  return btcRollingReducer;
};

const mapDispatchToProps = {
  fetchBTCRollingSuccess,
  fetchBTCRollingError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(BTCRolling)
);
