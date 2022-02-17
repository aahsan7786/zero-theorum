import React, {Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {
  fetchGoverningEquationsError,
  fetchGoverningEquationsSuccess,
} from "Store/charts/governingEquations/actions";
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
import "./governing-equations.scss";
import DateFilter from "Components/date-filter/DateFilter";
import {lastWeek} from "../../globalFunctions/detectDate";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {useSelector} from "react-redux";

const GoverningEquations = (props) => {
  const [show, setShow] = useState(false);
  // const [range, setRange] = useState(7);
  // const [dateSplice, setDateSplice] = useState();
  const [date, setDate] = useState(transformDateFormat(lastWeek()));
  const [scroll, setScroll] = useState(false);
  const hours = useSelector((item) => item.hoursReducer.hours);

  const {
    api,
    fetchGoverningEquationsSuccess,
    fetchGoverningEquationsError,
    data,
    isLoading,
  } = props;

  useEffect(() => {
    if (isEmpty(data)) {
      api
        .getGoverningEquations(props.eq, date, hours)
        .then((probData) => fetchGoverningEquationsSuccess(probData))
        .catch((error) => fetchGoverningEquationsError(error));
    }
  }, []);

  const onChangeFilter = (startDate) => {
    setDate(startDate);
    api
      .getGoverningEquations(props.eq, startDate, hours)
      .then((probData) => fetchGoverningEquationsSuccess(probData))
      .catch((error) => fetchGoverningEquationsError(error));
  };

  // useEffect(() => {
  //     if (data && data[`eq_${props.eq}`] && data[`eq_${props.eq}`].date) {
  //         setDateSplice(data[`eq_${props.eq}`].date.splice(-range))
  //     }
  // }, [range])

  if (
    isLoading ||
    !(
      data &&
      data[`eq_${props.eq}`] &&
      data[`eq_${props.eq}`].equation &&
      data[`eq_${props.eq}`].date
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
            x: data[`eq_${props.eq}`].date,
            y: data[`eq_${props.eq}`].equation,
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
      {/* <DateFilterArray info={true} onSubmit={(startDate) => setRange(startDate)} periods={periods}/> */}
    </Fragment>
  );
};

const mapStateToProps = ({governingEquationsReducer}) => {
  return governingEquationsReducer;
};

const mapDispatchToProps = {
  fetchGoverningEquationsSuccess,
  fetchGoverningEquationsError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(GoverningEquations)
);
