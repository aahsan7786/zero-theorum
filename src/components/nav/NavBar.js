import React, {useState, useEffect} from "react";
import logo from "./../../assets/images/logoVector.png";
import Menu from "./Menu";
import "./nav.scss";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import UserInfo from "./UserInfo";

const NavBar = (props) => {
  const history = useHistory();
  const [isActive , setIsActive] = useState(false);


  return (
    <>
      <div
        className={`hamburger `}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>

          <div className={`nav-container ${isActive ? "show" : ""}`}>
      
      <div
        className={"logo-container"}
        onClick={() => {
          history.push("/");
        }}
      >
        <img className={"logo"} src={logo}></img>
      </div>
      <div className={`menu-container ${isActive ? "show" : ""}`}>
        {<Menu></Menu>}
      </div>
      <div className={`userInfo ${isActive ? "show" : ""}`}>
        <UserInfo></UserInfo>
      </div>
    </div>
  </>
  );
};
export default NavBar;
