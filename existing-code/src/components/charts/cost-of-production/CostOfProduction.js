import React, { Fragment, useEffect, useState } from "react";
import WithApiService from "../../hoc/WithApiService";
import { connect } from "react-redux";
import {
  fetchCostOfProductionSuccess,
  fetchCostOfProductionError,
} from "Store/charts/costOfProduction/actions";
import Plot from "../../../../node_modules/react-plotly.js/react-plotly";
import { viewSettingsConfig, viewSettingsLayout } from "../ChartViewSettins";
import { isEmpty } from "../../globalFunctions/globalFunctions";
import { lastWeek, _today } from "../../globalFunctions/detectDate";
import { transformDateFormat } from "../../globalFunctions/transformDateFormat";
import { fetchData } from "../../globalFunctions/fetchData";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import { ReactSVG } from "react-svg";
import information from "Images/icons/information.svg";
import DateFilter from "Components/date-filter/DateFilter";

const CostOfProduction = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const {
      api,
      fetchCostOfProductionSuccess,
      fetchCostOfProductionError,
      data,
    } = props;
    if (isEmpty(data)) {
      fetchData(
        api.getCostOfProduction,
        fetchCostOfProductionSuccess,
        fetchCostOfProductionError,
        transformDateFormat(lastWeek())
      );
    }
  }, []);

  const onChangeFilter = (startDate) => {
    const { api, fetchCostOfProductionSuccess, fetchCostOfProductionError } =
      props;
    fetchData(
      api.getCostOfProduction,
      fetchCostOfProductionSuccess,
      fetchCostOfProductionError,
      startDate
    );
  };

  const {
    isLoading,
    data: { date, min, guess },
  } = props;

  if (isLoading) {
    return <Loader />;
  }

  let y, title;
  if (props.type === "min") {
    y = min;
    title = "cost_of_production_min";
  } else {
    y = guess;
    title = "cost_of_production_guess";
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
        data={[
          {
            x: date,
            y,
            mode: "lines",
            name: title,
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
            "Cost of Production (USD)",
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

const mapStateToProps = ({ costOfProductionReducer }) => {
  return costOfProductionReducer;
};

const mapDispatchToProps = {
  fetchCostOfProductionSuccess,
  fetchCostOfProductionError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(CostOfProduction)
);
