import React from "react";

import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
const useStyles = makeStyles({
  btn: {
    background:
      "linear-gradient(90deg, rgba(229,111,4,1) 8%, rgba(250,172,7,1) 58%)",
    width: "fit-content",
    textAlign: "center",
    padding: "10px 10px",
    fontSize: "10px",
    borderRadius: "3px",
    cursor: "pointer",
    "&:hover": {
      background:
        "linear-gradient(to left, #ececec 50%, rgba(229,111,4,1) 50%) right",
      backgroundSize: "200%",
      transition: ".3s ease-out",
      color: "#faac07",
    },
  },
});

const TransitionButton = (props) => {
  const classes = useStyles(props);

  return (
    <div
      className={clsx(classes.btn, props.className)}
      onClick={() => {
        props.onClick();
      }}>
      {props.text}
    </div>
  );
};

export default TransitionButton;

TransitionButton.defaultProps = {
  text: "",
  className: "",
  onClick: () => {},
};
