import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import DashboardBackground from "../DashboardBackground";
import Info from "../../../components/InfoSction/Info";
import resourcesIconHover from "./../../../assets/images/dashboardIcons/resources/SVG/Resources-hover.svg";
import {RESOURCES_INFO} from "../../../constants/Constants";
import DashboardBreadcrumb from "../DashboardBreadcrumb";
const useStyles = makeStyles({
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: ".5fr 1fr",
    gap: "0.7em",
    width: "90%",
    height: "70vh",
  },
  boxtop: {
    border: "1px solid grey",
  },

  boxbot: {
    border: "1px solid grey",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "4em",
    alignItems: "center",
    justifyItems: "center",
  },

  griditem: {
    height: "65%",
    width: "80%",
    border: "1px solid yellow",
    background: "purple",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Resources = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb currentPage={"Resources"}></DashboardBreadcrumb>
      <div className={classes.grid_container}>
        <div className={classes.boxtop}>
          <Info
            icon={resourcesIconHover}
            heading={RESOURCES_INFO.heading}
            info={RESOURCES_INFO.info}></Info>
        </div>

        <div className={classes.boxbot}>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
          <div className={classes.griditem}>Zero Theorem literatur review</div>
        </div>
      </div>
    </>
  );
};
export default Resources;
