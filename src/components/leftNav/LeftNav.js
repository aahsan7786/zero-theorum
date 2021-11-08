import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "./leftNav.scss";
import forecast from "../../assets/images/icons/forecast.svg";
import forecastActive from "../../assets/images/icons/forecast-active.svg";
import volatility from "../../assets/images/icons/volatility.svg";
import volatilityActive from "../../assets/images/icons/volatility-active.svg";
import feature from "../../assets/images/icons/feature-exploration.svg";
import featureActive from "../../assets/images/icons/feature-exploration-active.svg";
import documents from "../../assets/images/icons/documents.svg";
import documentsActive from "../../assets/images/icons/documents-active.svg";
import global from "../../assets/images/icons/global-correlation.svg";
import globalActive from "../../assets/images/icons/global-correlation-active.svg";
import governing from "../../assets/images/icons/governing.svg";
import governingActive from "../../assets/images/icons/governing-active.svg";
import substitution from "../../assets/images/icons/substitution.svg";
import substitutionActive from "../../assets/images/icons/substitution-active.svg";
import contact from "../../assets/images/icons/dataPage.svg";
import contactActive from "../../assets/images/icons/dataPage-active.svg";
import dataPage from "../../assets/images/icons/contact.svg";
import dataPageActive from "../../assets/images/icons/contact-active.svg";
import discord from "../../assets/images/icons/discord.svg";
import discordActive from "../../assets/images/icons/discord-active.svg";
import Logo from "Components/logo/Logo";

const LeftNav = (props) => {
  return (
    <div className={`folder navFixed ${props.menuBig ? "menuBig" : ""}`}>
      <Logo menuBig={props.menuBig} />
      <div className="leftNav">
        <nav className={"nav-left"}>
          <ul className="leftNav-navUl">
            <li>
              <NavLink to="/summary" className="link">
                <span className="link-thumb">
                  <img
                    src={global}
                    alt={forecast}
                    className="link-thumb-default"
                  />
                  <img
                    src={globalActive}
                    alt={forecast}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`link-title ${props.menuBig ? "" : "hide"}`}>
                  ABOUT
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                isActive={(match, location) => {
                  if (!location) return false;
                  const { pathname } = location;
                  return pathname === "/";
                }}
                to="/"
                className="link ttu"
              >
                <span className="link-thumb">
                  <img
                    src={forecast}
                    alt={forecast}
                    className="link-thumb-default"
                  />
                  <img
                    src={forecastActive}
                    alt={forecast}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  FORWARD VALUATION
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/back-test" className="link ttu">
                <span className="link-thumb">
                  <img
                    src={volatility}
                    alt={forecast}
                    className="link-thumb-default"
                  />
                  <img
                    src={volatilityActive}
                    alt={forecast}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  Backtest
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/governing-equations" className="link ttu">
                <span className="link-thumb">
                  <img
                    src={governing}
                    alt={forecast}
                    className="link-thumb-default"
                  />
                  <img
                    src={governingActive}
                    alt={forecast}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  GOVERNING DYNAMICS
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/substitution-rates" className="link ttu">
                <span className="link-thumb">
                  <img
                    src={substitution}
                    alt={forecast}
                    className="link-thumb-default"
                  />
                  <img
                    src={substitutionActive}
                    alt={forecast}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  SUBSTITUTION RATES
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/research" className="link">
                <span className="link-thumb">
                  <img
                    src={documents}
                    alt={forecast}
                    className="link-thumb-default"
                  />
                  <img
                    src={documentsActive}
                    alt={forecast}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  RESOURCES
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/data" className="link">
                <span className="link-thumb">
                  <img
                    src={contact}
                    alt={forecast}
                    className="link-thumb-default"
                  />
                  <img
                    src={contactActive}
                    alt={forecast}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  DATA NFT
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/discord" className="link">
                <span className="link-thumb">
                  <img
                    src={discord}
                    alt={discord}
                    className="link-thumb-default"
                  />
                  <img
                    src={discordActive}
                    alt={discord}
                    className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  DISCORD
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link">
                <span className="link-thumb">
                  <img
                      src={dataPage}
                      alt={forecast}
                      className="link-thumb-default"
                  />
                  <img
                      src={dataPageActive}
                      alt={forecast}
                      className="link-thumb-active"
                  />
                </span>
                <span className={`"link-title" ${props.menuBig ? "" : "hide"}`}>
                  CONTACT
                </span>
              </NavLink>
            </li>
            {/*<li>*/}
            {/*    <NavLink to="/macro-factors" className="link">*/}
            {/*        <span className="link-thumb">*/}
            {/*            <img src={stylized} alt={forecast} className="link-thumb-default"/>*/}
            {/*            <img src={stylizedActive} alt={forecast} className="link-thumb-active"/>*/}
            {/*        </span>*/}
            {/*        <span className="link-title">MACRO-FACTORS</span>*/}
            {/*    </NavLink>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <NavLink to="/micro-factors" className="link">*/}
            {/*        <span className="link-thumb">*/}
            {/*            <img src={feature} alt={forecast} className="link-thumb-default"/>*/}
            {/*            <img src={featureActive} alt={forecast} className="link-thumb-active"/>*/}
            {/*        </span>*/}
            {/*        <span className="link-title">MICRO-FACTORS</span>*/}
            {/*    </NavLink>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <NavLink to="/research" className="link">*/}
            {/*        <span className="link-thumb">*/}
            {/*            <img src={documents} alt={forecast} className="link-thumb-default"/>*/}
            {/*            <img src={documentsActive} alt={forecast} className="link-thumb-active"/>*/}
            {/*        </span>*/}
            {/*        <span className={`"link-title" ${props.menuBig ? '' : 'hide'}`}>RESOURCES</span>*/}
            {/*    </NavLink>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <NavLink to="/alternative-data" className="link">ALTERNATIVE DATA</NavLink>*/}
            {/*</li>*/}
            {/* <li>
                            <NavLink to="/data" className="link">
                                <span className="link-thumb">
                                    <img src={dataPage} alt={forecast} className="link-thumb-default"/>
                                    <img src={dataPageActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className={`"link-title" ${props.menuBig ? '' : 'hide'}`}>DATA & API</span>
                            </NavLink>
                        </li> */}
            {/*<li>*/}
            {/*    <NavLink to="/who-are-we" className="link">*/}
            {/*        <span className="link-thumb">*/}
            {/*            <img src={market} alt={forecast} className="link-thumb-default"/>*/}
            {/*            <img src={marketActive} alt={forecast} className="link-thumb-active"/>*/}
            {/*        </span>*/}
            {/*        <span className="link-title">WHO ARE WE?</span>*/}
            {/*    </NavLink>*/}
            {/*</li>*/}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftNav;
