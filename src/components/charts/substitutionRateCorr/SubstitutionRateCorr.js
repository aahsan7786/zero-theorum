import React, {Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchSubstitutionRateSuccess,
  fetchSubstitutionRateError,
  fetchSubstitutionRateLoad,
} from "Store/charts/substitutionRate/actions";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import "./substitutionRateCorr.scss";
import DateFilter from "Components/date-filter/DateFilter";
import {fetchData} from "Components/globalFunctions/fetchData";
import {lastWeek} from "../../globalFunctions/detectDate";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {useSelector} from "react-redux";

const SubstitutionRateCorr = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const hours = useSelector((item) => item.hoursReducer.hours);
  const [date, setDate] = useState(transformDateFormat(lastWeek()));

  const {
    api,
    type,
    isLoading,
    fetchSubstitutionRateSuccess,
    fetchSubstitutionRateError,
    fetchSubstitutionRateLoad,
    data,
  } = props;

  useEffect(() => {
    if (isEmpty(data) && !props.disable) {
      fetchSubstitutionRateLoad();
      api
        .getSubstitutionRate(date, type, hours)
        .then((probData) => fetchSubstitutionRateSuccess(probData))
        .catch((error) => fetchSubstitutionRateError(error));
    }
  }, [date, hours]);

  useEffect(() => {
    if (!props.disable) {
      fetchSubstitutionRateLoad();
      api
        .getSubstitutionRate(date, type, hours)
        .then((probData) => fetchSubstitutionRateSuccess(probData))
        .catch((error) => fetchSubstitutionRateError(error));
    }
  }, [type]);

  const onChangeFilter = (startDate) => {
    setDate(startDate);
    api
      .getSubstitutionRate(startDate, type, hours)
      .then((probData) => fetchSubstitutionRateSuccess(probData))
      .catch((error) => fetchSubstitutionRateError(error));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (
    isLoading ||
    !(
      data &&
      data[props.type] &&
      data[props.type].date &&
      data[props.type].index
    )
  ) {
    return <Loader />;
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
        className={"infoBtn"}
      />
      <Plot
        onClick={() => setScroll(true)}
        data={[
          {
            x: data[props.type].date,
            y: data[props.type].index,
            line: {color: "#FFC600"},
            mode: "lines",
            name: props.legend,
            type: "scatter",
          },
        ]}
        layout={
          viewSettingsLayout(
            props.title,
            true,
            {l: 40, r: 30, t: 95, b: 30},
            // "%H:%M",
            "",
            "",
            0.5,
            "Date",
            props.titleY,
            "stack",
            "percent",
            true,
            true,
            "",
            "",
            "",
            "",
            "",
            "",
            10
            // hours*60*60*1000
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={{
          width: "100%",
          height: "100%",
        }}
        config={viewSettingsConfig(true, scroll).config}
      />
      <DateFilter onSubmit={onChangeFilter} info={true} />
    </Fragment>
  );
};

const mapStateToProps = ({substitutionRateReducer}) => {
  return substitutionRateReducer;
};

const mapDispatchToProps = {
  fetchSubstitutionRateError,
  fetchSubstitutionRateSuccess,
  fetchSubstitutionRateLoad,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(SubstitutionRateCorr)
);
