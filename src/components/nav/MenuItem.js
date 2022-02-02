import React, {useState, useEffect} from "react";

const MenuItem = (props) => {
  return (
    <div>
      {props.icon && <img src={props.icon}></img>}
      <span>{props.name}</span>
    </div>
  );
};

export default MenuItem;
