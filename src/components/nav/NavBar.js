import React, {useState, useEffect} from "react";
import logo from "./../../assets/images/logoVector.png";
import Menu from "./Menu";
import "./nav.scss";
const NavBar = (props) => {
  return (
    <div className={"nav-container"}>
      <div className={"logo-container"}>
        <img className={"logo"} src={logo}></img>
      </div>
      <div className="menu-container">{<Menu></Menu>}</div>
      <div className="userInfo"></div>
    </div>
  );
};
export default NavBar;
