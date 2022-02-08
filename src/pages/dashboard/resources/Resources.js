import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";

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
    background: "grey",
    boder: "1px solid red",
  },

  boxbot: {
    background: "grey",
    boder: "1px solid red",
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
      <h3>resources</h3>
      <div className={classes.grid_container}>
        <div className={classes.boxtop}>00</div>

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
