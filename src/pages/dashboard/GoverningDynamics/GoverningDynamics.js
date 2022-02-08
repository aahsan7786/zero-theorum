import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0.7em",
    width: "90%",
    height: "100vh",
  },
  griditem: {
    border: "1px solid grey",
    background: "grey",
  },
});

const GoverningDynamics = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <h3>GoverningDynamics</h3>
      <div className={classes.grid_container}>
        <div className={classes.griditem}>Lorem ipsum dolor, </div>
        <div className={classes.griditem}>2</div>
        <div className={classes.griditem}>3</div>
        <div className={classes.griditem}>4</div>
        <div className={classes.griditem}>5</div>
        <div className={classes.griditem}>6</div>
        <div className={classes.griditem}>7</div>
        <div className={classes.griditem}>8</div>
      </div>
    </>
  );
};
export default GoverningDynamics;
