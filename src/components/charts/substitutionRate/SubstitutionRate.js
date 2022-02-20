import React, {Fragment, useEffect, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchSubstitutionRateCorrSuccess,
  fetchSubstitutionRateCorrError,
  fetchSubstitutionRateCorrLoad,
} from "Store/charts/substitutionRateCorr/actions";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import "./substitutionRate.scss";
import {lastWeek} from "../../globalFunctions/detectDate";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {useSelector} from "react-redux";

const SubstitutionRate = (props) => {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(true);
  const [scroll, setScroll] = useState(false);
  const hours = useSelector((item) => item.hoursReducer.hours);

  const {
    api,
    type,
    isLoading,
    fetchSubstitutionRateCorrSuccess,
    fetchSubstitutionRateCorrError,
    fetchSubstitutionRateCorrLoad,
    data,
  } = props;

  useEffect(() => {
    if (isEmpty(data) && !props.disable) {
      fetchSubstitutionRateCorrLoad();
      api
        .getSubstitutionRateCorr("2019-01-01", type, hours)
        .then((probData) => {
          fetchSubstitutionRateCorrSuccess(probData);
        })
        .catch((error) => fetchSubstitutionRateCorrError(error));
    }
  }, [hours, props.type]);

  useEffect(() => {
    if (!props.disable) {
      fetchSubstitutionRateCorrLoad();
      api
        .getSubstitutionRateCorr("2019-01-01", type, hours)
        .then((probData) => {
          fetchSubstitutionRateCorrSuccess(probData);
        })
        .catch((error) => fetchSubstitutionRateCorrError(error));
    }
  }, [type]);

  if (
    isLoading ||
    !(
      data &&
      data[props.type] &&
      data[props.type].btc &&
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
          top: screen.width > 540 ? ".5rem" : "1.5rem",
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
            x: data[props.type].btc,
            y: data[props.type].index,
            mode: "markers",
            marker: {
              color: "#0F58B3",
              size: 6,
            },
            type: "scatter",
          },
        ]}
        layout={
          viewSettingsLayout(
            props.title,
            false,
            {l: 40, r: 30, t: 95, b: 30},
            "",
            "",
            0.5,
            "BTC",
            props.titleY,
            "stack",
            "percent",
            true,
            true,
            null,
            "x",
            "y",
            "z",
            "",
            "",
            10
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true, scroll).config}
      />
    </Fragment>
  );
};

const mapStateToProps = ({substitutionRateCorrReducer}) => {
  return substitutionRateCorrReducer;
};

const mapDispatchToProps = {
  fetchSubstitutionRateCorrError,
  fetchSubstitutionRateCorrSuccess,
  fetchSubstitutionRateCorrLoad,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(SubstitutionRate)
);
