import React, {useState, useEffect} from "react";
import logo from "./../../assets/images/logoVector.png";
import Menu from "./Menu";
import "./nav.scss";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import UserInfo from "./UserInfo";

const NavBar = (props) => {
  const history = useHistory();

  return (
    <div className={"nav-container"}>
      <div
        className={"logo-container"}
        onClick={() => {
          history.push("/");
        }}>
        <img className={"logo"} src={logo}></img>
      </div>
      <div className="menu-container">{<Menu></Menu>}</div>
      <div className="userInfo">
        <UserInfo></UserInfo>
      </div>
    </div>
  );
};
export default NavBar;
