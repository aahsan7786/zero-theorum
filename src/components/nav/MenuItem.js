import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

const MenuItem = (props) => {
  const [isHover, setHover] = useState(false);
  const history = useHistory();

  return (
    <div
      className={"menu-icon-container"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        history.push(props.route);
      }}>
      {props.icon && (
        <img
          src={
            isHover || history.location.pathname === props.route
              ? props.hoverIcon
              : props.icon
          }
          className={"menu-icon"}></img>
      )}
      <span
        className={
          "menu-name " +
          (isHover || history.location.pathname === props.route
            ? "menu-name-selected"
            : "")
        }>
        {props.name}
      </span>
    </div>
  );
};

export default MenuItem;
