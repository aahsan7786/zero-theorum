import React, {Component, Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {
  fetchRollingEnthropySuccess,
  fetchRollingEnthropyError,
} from "Store/charts/rollingEnthropy/actions";
import Plot from "../../../../node_modules/react-plotly.js/react-plotly";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {fetchData} from "../../globalFunctions/fetchData";
import {transformDateFormat} from "Components/globalFunctions/transformDateFormat";
import {lastWeek} from "Components/globalFunctions/detectDate";
import DateFilter from "Components/date-filter/DateFilter";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const RollingEnthropy = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const {api, fetchRollingEnthropySuccess, fetchRollingEnthropyError, data} =
      props;
    if (isEmpty(data)) {
      fetchData(
        api.getRollingEnthropy,
        fetchRollingEnthropySuccess,
        fetchRollingEnthropyError,
        transformDateFormat(lastWeek())
      );
    }
  }, []);

  const onChangeFilter = (startDate) => {
    const {api, fetchRollingEnthropySuccess, fetchRollingEnthropyError} = props;
    fetchData(
      api.getRollingEnthropy,
      fetchRollingEnthropySuccess,
      fetchRollingEnthropyError,
      startDate
    );
  };

  const {
    isLoading,
    data: {date, value},
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
          "Entropy is a measure of market\n" +
          "efficiency, where in the case of high\n" +
          "efficiency prices reflect all available\n" +
          "information."
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
        data={[
          {
            x: date,
            y: value,
            mode: "lines",
            name: "value",
            line: {
              dash: "solid",
              width: 2,
              color: "#FFC600",
            },
          },
        ]}
        layout={
          viewSettingsLayout(
            "Rolling Enthropy",
            false,
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
            "Entropy",
            "stack",
            "percent",
            true,
            true
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true).config}
      />
      <DateFilter onSubmit={onChangeFilter} info={true} />
    </Fragment>
  );
};

const mapStateToProps = ({rollingEnthropyReducer}) => {
  return rollingEnthropyReducer;
};

const mapDispatchToProps = {
  fetchRollingEnthropySuccess,
  fetchRollingEnthropyError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(RollingEnthropy)
);
