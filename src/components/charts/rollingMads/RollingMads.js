import React, {useEffect, Fragment, useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import Plot from "react-plotly.js";
import {
  fetchRollingMadsError,
  fetchRollingMadsSuccess,
} from "../../../store/charts/rollingMads/actions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import {fetchData} from "Components/globalFunctions/fetchData";

const RollingMads = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const {api, fetchRollingMadsSuccess, fetchRollingMadsError, data} = props;
    if (isEmpty(data)) {
      api
        .getRollingMads()
        .then((probData) => fetchRollingMadsSuccess(probData))
        .catch((error) => fetchRollingMadsError(error));
    }
  }, []);

  const onChangeFilter = (startDate) => {
    const {api, fetchRollingMadsSuccess, fetchRollingMadsError} = props;
    fetchData(
      api.getRollingMads,
      fetchRollingMadsSuccess,
      fetchRollingMadsError,
      startDate
    );
  };

  const {
    isLoading,
    data: {date, val},
  } = props;

  if (isLoading) {
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
            x: date,
            y: val,
            mode: "lines",
            name: "Rolling 360 MADS",
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
            "Accuracy",
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
      <DateFilter onSubmit={onChangeFilter} info={true} />
    </Fragment>
  );
};

const mapStateToProps = ({rollingMadsReducer}) => {
  return rollingMadsReducer;
};

const mapDispatchToProps = {
  fetchRollingMadsSuccess,
  fetchRollingMadsError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(RollingMads)
);
