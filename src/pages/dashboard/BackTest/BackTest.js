import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "1.3fr 1fr 1fr",
    gap: "0.7em",
    width: "90%",
    height: "100vh",
  },
  griditem1: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "5",
  },
  griditem2: {
    border: "1px solid grey",
    gridColumnStart: "5",
    gridColumnEnd: "11",
  },
  griditem3: {
    border: "1px solid grey",
    gridColumnStart: "11",
    gridColumnEnd: "13",
  },
  griditem4: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "7",
  },
  griditem5: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "13",
  },
  griditem6: {
    border: "1px solid grey",
    gridColumnStart: "1",
    gridColumnEnd: "7",
  },
  griditem7: {
    border: "1px solid grey",
    gridColumnStart: "7",
    gridColumnEnd: "13",
  },
  // griditem8:{
  //  border:'1px solid grey',
  //  gridColumnStart:'7',
  //  gridColumnEnd:'13',
  // },
});
const BackTest = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <h3>Backtest</h3>
      <div className={classes.grid_container}>
        <div className={classes.griditem1}>Lorem ipsum dolor, </div>
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
export default BackTest;