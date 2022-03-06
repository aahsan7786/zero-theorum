import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: "0px 20px",
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
    <div className={clsx(classes.container, "infoSectionContainer")}>
      <div className={clsx(classes.heading, "infoSectionHeading")}>
        <img
          src={props.icon}
          className={clsx(classes.headingIcon, "infoSectionIcon")}></img>
        <span className={clsx(classes.headingText, "infoSectionHeadingText")}>
          {props.heading}
        </span>
      </div>
      <div className={clsx(classes.info, "infoSectionInfoText")}>
        {props.info}
      </div>
    </div>
  );
};

export default Info;
