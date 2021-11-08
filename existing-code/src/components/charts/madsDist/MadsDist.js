import React, { Fragment, useEffect, useState } from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchMadsDistSuccess,
  fetchMadsDistError,
} from "../../../store/charts/madsDist/actions";
import { viewSettingsConfig, viewSettingsLayout } from "../ChartViewSettins";
import { isEmpty } from "../../globalFunctions/globalFunctions";
import { connect } from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import { ReactSVG } from "react-svg";
import information from "Images/icons/information.svg";

const MadsDist = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const { api, fetchMadsDistSuccess, fetchMadsDistError, data, apiRoute } =
      props;
    if (isEmpty(data)) {
      api[apiRoute]()
        .then((probData) => fetchMadsDistSuccess(probData))
        .catch((error) => fetchMadsDistError(error));
    }
  }, []);

  const { isLoading, data } = props;

  if (
    isLoading ||
    !(
      data &&
      data[props.type] &&
      data[props.type].accuracy &&
      data[props.type].index &&
      data[props.type].error
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
            name: "accuracy",
            y: data[props.type].accuracy,
            x: data[props.type].index,
            type: "bar",
            marker: {
              color: "#FFC600",
            },
          },
          {
            name: "error",
            y: data[props.type].error,
            x: data[props.type].index,
            type: "bar",
            marker: {
              color: "#4A4A4A",
            },
          },
        ]}
        layout={
          viewSettingsLayout(
            props.title,
            true,
            {
              l: 30,
              r: 30,
              t: 80,
              b: 30,
            },
            "",
            "",
            0.5,
            "Date",
            "Accuracy",
            "stack",
            "percent",
            false,
            false
          ).layout
        }
        useResizeHandler={viewSettingsLayout().useResizeHandler}
        style={viewSettingsLayout().style}
        config={viewSettingsConfig(true, scroll).config}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ madsDistReducer }) => {
  return madsDistReducer;
};

const mapDispatchToProps = {
  fetchMadsDistSuccess,
  fetchMadsDistError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(MadsDist)
);
