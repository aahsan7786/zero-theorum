import React, {Component, Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchImpliedVolatilitySuccess,
  fetchImpliedVolatilityError,
} from "../../../store/charts/impliedVolatility/actions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const ImpliedVolatility = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const {
      api,
      fetchImpliedVolatilitySuccess,
      fetchImpliedVolatilityError,
      data,
    } = props;
    if (isEmpty(data)) {
      api
        .getImpliedVolatility()
        .then((probData) => fetchImpliedVolatilitySuccess(probData))
        .catch((error) => fetchImpliedVolatilityError(error));
    }
  }, []);

  const {
    isLoading,
    data: {calls, puts, delta},
  } = props;

  if (isLoading) {
    return <Loader />;
  }

  let x;
  let y;
  if (props.type === "calls") {
    x = calls.x;
    y = calls.y;
  } else if (props.type === "puts") {
    x = puts.x;
    y = puts.y;
  } else {
    x = delta.x;
    y = delta.y;
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
        data={[
          {
            x,
            y,
            mode: "lines",
            name: props.type,
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
            props.title,
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
            "Volatility",
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
    </Fragment>
  );
};

const mapStateToProps = ({impliedVolatilityReducer}) => {
  return impliedVolatilityReducer;
};

const mapDispatchToProps = {
  fetchImpliedVolatilitySuccess,
  fetchImpliedVolatilityError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(ImpliedVolatility)
);
