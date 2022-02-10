import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import dashboardBackground from "./../../assets/images/dashboardBackground.webp";
import DashboardBackground from "./DashboardBackground";
const useStyles = makeStyles({
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: ".9fr 1fr 1fr",
    gap: "0.5em",
    width: "90%",
    height: "100vh",
  },
  griditem1: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "11",
  },
  griditem2: {
    border: "1px solid grey",
    gridColumnStart: "11",
    gridColumnEnd: "13",
  },
  griditem3: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },
  griditem4: {
    border: "1px solid grey",
    gridColumnStart: "4",
    gridColumnEnd: "7",
  },
  griditem5: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "10",
  },
  griditem6: {
    border: "1px solid grey",
    gridColumnStart: "10",
    gridColumnEnd: "13",
  },
  griditem7: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "7",
  },
  griditem8: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "13",
  },
});
const Dashboard = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <h4>Dashboard</h4>
      <div className={classes.grid_container}>
        <div className={classes.griditem1}>1</div>
        <div className={classes.griditem2}>2</div>
        <div className={classes.griditem3}>3</div>
        <div className={classes.griditem4}>4</div>
        <div className={classes.griditem5}>5</div>
        <div className={classes.griditem6}>6</div>
        <div className={classes.griditem7}>7</div>
        <div className={classes.griditem8}>8</div>
      </div>
    </>
  );
};
export default Dashboard;
