import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";

import {makeStyles} from "@material-ui/styles";
import {useSelector} from "react-redux";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import clsx from "clsx";
import {getTypes, getDefault} from "./SubstitutionTypes";
import {SUBSTITUTION_RATES_INFO} from "../../../constants/Constants";
import Info from "../../../components/InfoSction/Info";
import substitutionHover from "./../../../assets/images/dashboardIcons/substitution/SVG/substitution-hover.svg";
import DashboardBackground from "../DashboardBackground";
import DashboardBreadcrumb from "../DashboardBreadcrumb";

const SubstitutionRate = lazy(() =>
  import("Components/charts/substitutionRate/SubstitutionRate")
);
const SubstitutionRateCorr = lazy(() =>
  import("Components/charts/substitutionRateCorr/SubstitutionRateCorr")
);

const useStyles = makeStyles({
  chartContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: "37px 0 10px",
  },
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: ".5fr 0.15fr 1fr",
    gap: "0.8em",
    width: "90%",
    height: "70vh",
  },
  boxtop: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    height: "200px",
    display: "flex",
    justifyContent: "center",
  },

  boxmid: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "50px",
  },

  boxbot: {
    border: "1px solid grey",
    alignItems: "center",
    justifyItems: "center",
    height: "400px",
    paddingTop: "10px",
  },
  // infoWraper: {height: "100%", width: "80%"},
  gridItems: {
    color: "white",
    // height: "65%",
    width: "80%",
    borderRight: "1px solid black",
    padding: "5px 10px 0 0",
    margin: "0 5px 0 5px",
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  selected: {
    color: "#deb513",
    textDecoration: "underline",
    fontWeight: "bold",
  },
});

const SubstitutionRates = (props) => {
  const classes = useStyles(props);
  const hours = useSelector((item) => item.hoursReducer.hours);
  const [selected, setSelected] = useState(getDefault(hours));

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb
        currentPage={"Substitution Rates"}></DashboardBreadcrumb>
      <div className={classes.grid_container}>
        <div className={classes.boxtop}>
          {/* <div className={classes.infoWraper}> */}
          <Info
            icon={substitutionHover}
            heading={SUBSTITUTION_RATES_INFO.heading}
            info={SUBSTITUTION_RATES_INFO.info}></Info>
          {/* </div> */}
        </div>
        <div className={classes.boxmid}>
          {getTypes(hours).map((type) => {
            let selClass = "";
            if (selected.value === type.value) {
              selClass = classes.selected;
            }
            return (
              <div
                className={clsx(classes.gridItems, selClass)}
                onClick={() => {
                  setSelected(type);
                }}>
                {type.name}
              </div>
            );
          })}
        </div>

        <div className={classes.boxbot}>
          <div className={classes.chartContainer}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <SubstitutionRate
                  type={selected.value}
                  title={selected.title}
                  info={selected.info}
                  titleY={selected.titleY}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.boxbot}>
          <div className={classes.chartContainer}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <SubstitutionRateCorr
                  type={selected.value}
                  title={selected.titleCorr}
                  info={selected.infoCorr}
                  titleY={selected.titleYCorr}
                  legend={selected.legendCorr}
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubstitutionRates;
