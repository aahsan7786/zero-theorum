import React, {useState, useEffect} from "react";
import logo from "./../../assets/images/logoVector.png";
import Menu from "./Menu";

const NavBar = (props) => {
  return (
    <div className={"nav-container"}>
      <div className={"logo-container"}>
        <img src={logo}></img>
      </div>
      <div>{<Menu></Menu>}</div>
    </div>
  );
};
export default NavBar;
