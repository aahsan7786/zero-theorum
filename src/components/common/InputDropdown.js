/** @format */

import React, {useRef, useState, useEffect} from "react";
import useOutsideListner from "./OutsideListner.js";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import arrowRightIcon from "./../../assets/images/icons/arrow-right.svg";
const useStyles = makeStyles({
  root: (props) => ({
    width: props.width,
    height: props.height,
    position: "relative",
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  }),
  box: (props) => ({
    width: props.width,
    position: "fixed",
    textAlign: "left",
    border: "1px solid #e2e2e3",
    backgroundColor: "white",
    boxShadow: "-0.5px 0px 5px -2.5px rgb(0 0 0 / 75%)",
    zIndex: 1,
    opacity: 0,
  }),
  listItem: {
    borderBottom: "1px solid #eff0f0",
    paddingBottom: "6px",
    paddingTop: "6px",
    fontSize: "12px",
    paddingLeft: "10px",
    color: "#676873",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f6f7fa",
    },
  },
});

const InputDropdown = (props) => {
  const classes = useStyles(props);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isMenuOpen, setOpen] = useState(false);
  const [value, setValue] = useState(props.value);

  useOutsideListner(dropdownRef, (event) => {
    event.stopPropagation();
    setOpen(false);
  });
  const getStyles = () => {
    let styles = {};
    if (props.orientation === "left") {
      styles.right = "100%";
    } else if (props.orientation === "right") {
      styles.left = "100%";
    } else if (props.orientation === "bottom") {
      styles.top = props.height;
    } else if (props.orientation === "top") {
    }
    return styles;
  };
  const getList = () => {
    return props.list.map((item, index) => {
      return (
        <div
          key={"ddInput" + index}
          className={clsx(classes.listItem, item.className)}
          onClick={() => {
            setValue(item.name);
            props.onChange(item);
            setOpen(false);
          }}
          data-value={item.value && item.value.toLocaleLowerCase()}>
          {item.name}
        </div>
      );
    });
  };
  var onParentScrollChange = (e) => {
    isMenuOpen && setOpen(false);
    document.removeEventListener("scroll", onParentScrollChange, true);
  };

  useEffect(() => {
    if (dropdownRef && dropdownRef.current) {
      let bounds = dropdownRef.current.getBoundingClientRect();
      if (menuRef && menuRef.current) {
        let offsetTop = props.height ? parseInt(props.height) : 0;
        menuRef.current.style.top = bounds.top + offsetTop + "px";
        menuRef.current.style.left = bounds.left + "px";
        menuRef.current.style.opacity = 1;
      }
    }
    if (isMenuOpen) {
      document.addEventListener("scroll", onParentScrollChange, true);
    }
  }, [isMenuOpen]);
  return (
    <div
      className={clsx(
        "ddInput",
        classes.root,
        props.inputDDclassName,
        props.disabled ? " inputDDdisabled" : "",
        isMenuOpen ? "ddIsOpen" : ""
      )}
      onClick={() => {
        !props.disabled && setOpen(!isMenuOpen);
      }}
      ref={dropdownRef}
      data-value={value && value.toLocaleLowerCase()}>
      <span style={{color: props.textColor, fontSize: props.fontSize}}>
        {value}
      </span>
      <div className={props.inputDDiconClassName}>
        <img
          src={arrowRightIcon}
          style={{
            transform: !isMenuOpen ? "rotate(90deg)" : "rotate(270deg)",
            width: "10px",
            height: "10px",
          }}></img>
        {/* <i className={isMenuOpen ? "fa fa-angle-up" : "fa fa-angle-down"}></i> */}
      </div>
      {isMenuOpen && (
        <div className={classes.box} ref={menuRef}>
          {/* style={getStyles()} */}
          {getList()}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;

InputDropdown.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.any,
  list: PropTypes.array,
  orientation: PropTypes.string,
  inputDDclassName: PropTypes.string,
  inputDDiconClassName: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
};

InputDropdown.defaultProps = {
  width: "fit-content",
  height: "auto",
  value: "",
  list: [],
  onChange: () => {},
  orientation: "bottom",
  inputDDclassName: "",
  inputDDiconClassName: "",
  textColor: "white",
  disabled: false,
  fontSize: "13px",
};
