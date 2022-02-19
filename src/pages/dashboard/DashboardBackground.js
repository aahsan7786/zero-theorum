import React from "react";
import {makeStyles} from "@material-ui/styles";
import dashboardBackground from "./../../assets/images/dashboardBackground.webp";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${dashboardBackground})`,
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundSize: "100%",
    zIndex: 0,
    opacity: 0.2,
    backgroundPosition: "center",
  },
});

const DashboardBackground = (props) => {
  const classes = useStyles(props);

  return <div className={classes.background}></div>;
};
export default DashboardBackground;
