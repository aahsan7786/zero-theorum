import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
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
    background: "grey",
    border: "1px solid red",
    gridColumnStart: "1",
    gridColumnEnd: "3",
  },

  boxmid: {
    background: "grey",
    boder: "1px solid red",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
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

  gridItems: {
    color: "white",
    height: "65%",
    width: "80%",
    //   border:'1px solid yellow',
    //   background:'purple',
    borderRight: "1px solid black",
    padding: "5px 10px 0 0",
    margin: "0 5px 0 5px",
    textAlign: "center",
  },
});

const SubstitutionRates = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <h3>Substitution Rates</h3>
      <div className={classes.grid_container}>
        <div className={classes.boxtop}>00</div>
        <div className={classes.boxmid}>
          <div className={classes.gridItems}>SNP 500</div>
          <div className={classes.gridItems}>DXY</div>
          <div className={classes.gridItems}>Gold</div>
          <div className={classes.gridItems}>Dow Jones</div>
          <div className={classes.gridItems}>GDAX</div>
          <div className={classes.gridItems}>FTSE</div>
          <div className={classes.gridItems}>NIKKEI</div>
          <div className={classes.gridItems}>Natural Gas</div>
          <div className={classes.gridItems}>Platinum</div>
          <div className={classes.gridItems}>Platinum</div>
        </div>

        <div className={classes.boxbot}></div>
        <div className={classes.boxbot}></div>
      </div>
    </>
  );
};
export default SubstitutionRates;
