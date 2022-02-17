import React, {Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {
  fetchGoverningEquationsGeeksError,
  fetchGoverningEquationsGreeksSuccess,
} from "Store/charts/governingEquationsGreeks/actions";
import Plot from "../../../../node_modules/react-plotly.js/react-plotly";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {fetchData} from "../../globalFunctions/fetchData";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import DateFilterArray from "Components/date-filter-array/DateFilterArray";
import Select from "react-select";
import "./governing-equationsGreeks.scss";
import DateFilter from "Components/date-filter/DateFilter";
import {lastWeek} from "../../globalFunctions/detectDate";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {useSelector} from "react-redux";

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #fff",
    color: "#fff",
    zIndex: 10000,
    backgroundColor: "#000",
  }),
  control: () => ({
    alignItems: "center",
    cursor: "pointer",
    direction: "ltr",
    backgroundColor: "#000",
    border: "0.1rem solid #4a4a4a",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "40px",
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms",
    borderRadius: "5px",
  }),
  indicatorsContainer: () => ({
    // padding: "0 0 0 1rem",
    padding: "0 1rem 0 0",
    display: "flex",
    flexShrink: 0,
  }),
  dropdownIndicator: () => ({
    display: "grid",
    placeItems: "center",
    color: "#4a4a4a",
  }),
  indicatorSeparator: () => ({
    border: "none",
  }),
  valueContainer: () => ({
    color: "#fff",
    padding: "0 1rem",
    display: "flex",
    flex: "1 1 0%",
    flexWrap: "wrap",
    // padding: "0.2rem 0.8rem",
    zIndex: 100,
  }),
  singleValue: () => ({
    color: "#fff",
  }),
  input: () => ({
    borderRadius: "12rem",
  }),
};

const indexArr = [
  {value: "EURUSD", label: "EURUSD", tf: "6", disabled: false},
  {value: "DXY", label: "DXY", tf: "24", disabled: false},
  {value: "_MGC", label: "_MGC"},
  {value: "_SP", label: "_SP"},
  {value: "_YM", label: "_YM"},
  {value: "_BZ", label: "_BZ"},
  {value: "GDAXI", label: "GDAXI", tf: "24", disabled: false},
  {value: "_GDAXI", label: "_GDAXI", tf: "6", disabled: false},
  {value: "FTSE", label: "FTSE", tf: "24", disabled: false},
  {value: "_NIY", label: "_NIY"},
  {value: "_NG", label: "_NG"},
  {value: "_PL", label: "_PL"},
  {value: "_SI", label: "_SI"},
];

const GoverningEquationsGreeks = (props) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(indexArr[0]);
  const [date, setDate] = useState(transformDateFormat(lastWeek()));
  const [scroll, setScroll] = useState(false);
  const hours = useSelector((item) => item.hoursReducer.hours);

  const {
    api,
    fetchGoverningEquationsGreeksSuccess,
    fetchGoverningEquationsGreeksError,
    data,
    isLoading,
  } = props;

  useEffect(() => {
    if (hours === 24) {
      setIndex(indexArr[1]);
      indexArr.forEach((option) => {
        if (option.tf === "6") {
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      });
    } else if (hours === 6) {
      setIndex(indexArr[0]);
      indexArr.forEach((option) => {
        if (option.tf === "24") {
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      });
    } else {
      setIndex(indexArr[0]);
      indexArr.forEach((option) => {
        if (option.tf === "24") {
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      });
    }
  }, [hours, date, indexArr]);

  const onChangeFilter = (startDate) => {
    setDate(startDate);
    api
      .getGoverningEquationsGreeks(startDate, index.value, props.greek, hours)
      .then((probData) => fetchGoverningEquationsGreeksSuccess(probData))
      .catch((error) => fetchGoverningEquationsGreeksError(error));
  };

  useEffect(() => {
    api
      .getGoverningEquationsGreeks(date, index.value, props.greek, hours)
      .then((probData) => fetchGoverningEquationsGreeksSuccess(probData))
      .catch((error) => fetchGoverningEquationsGreeksError(error));
  }, [index]);

  if (
    isLoading ||
    !(
      data &&
      data[props.greek] &&
      data[props.greek].date &&
      data[props.greek].equation
    )
  ) {
    return <Loader style={{marginTop: 0}} />;
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
            // x: data[`eq_${props.eq}`].date,
            // y: data[`eq_${props.eq}`].eq,
            // x: dateSplice,
            // y: data[`eq_${props.eq}`].eq.slice(-range),
            x: data[props.greek].date,
            y: data[props.greek].equation,
            mode: "lines",
            name: "equation",
            line: {
              dash: "solid",
              width: 2,
              color: "#FFC600",
            },
          },
        ]}
        layout={
          viewSettingsLayout(
            props.title,
            true,
            {
              l: 40,
              r: 30,
              t: 95,
              b: 30,
            },
            "%H:%M",
            "",
            0.5,
            "Date",
            "",
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
            50
            // hours*60*60*1000
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true, scroll).config}
      />
      <DateFilter onSubmit={onChangeFilter} info={true} />

      {/*<DateFilterArray info={true} onSubmit={(startDate) => setRange(startDate)} periods={periods}/>*/}
      <Select
        options={indexArr}
        className="governingIndexSelect"
        styles={customStyles}
        value={index}
        onChange={(e) => {
          setIndex(e);
        }}
        isOptionDisabled={(option) => option.disabled}
      />
    </Fragment>
  );
};

const mapStateToProps = ({governingEquationsGreeksReducer}) => {
  return governingEquationsGreeksReducer;
};

const mapDispatchToProps = {
  fetchGoverningEquationsGreeksSuccess,
  fetchGoverningEquationsGeeksError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(GoverningEquationsGreeks)
);
