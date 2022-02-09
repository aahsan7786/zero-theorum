import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  heading: {
    display: "flex",
    gridGap: "10px",
    alignItems: "center",
    marginBottom: "20px",
  },
  headingIcon: {
    width: "25px",
    heght: "25px",
  },
  headingText: {
    color: "#ddb611",
    fontWeight: "bold",
  },
  info: {
    textAlign: "center",
    fontSize: "14px",
  },
});
const Info = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <img src={props.icon} className={classes.headingIcon}></img>
        <span className={classes.headingText}>{props.heading}</span>
      </div>
      <div className={classes.info}>{props.info}</div>
    </div>
  );
};

export default Info;
