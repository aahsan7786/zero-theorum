import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "20px",
    fontSize: "13px",
  },
  selected: {
    color: "#ffce00",
  },
  link: {
    zIndex: 8,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const DashboardBreadcrumb = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div>{"ZeroTheorem / "}</div>
      &nbsp;
      {/* <Link to="/" className={classes.link}> */}
      <div>{`Dashboard`}</div>
      {/* </Link> */}
      &nbsp;
      {props.currentPage ? " / " : " "}
      &nbsp;
      <Link to="/" className={clsx(classes.link, classes.selected)}>
        <div className={classes.selected}>{props.currentPage}</div>
      </Link>
    </div>
  );
};

export default DashboardBreadcrumb;
