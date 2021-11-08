import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './leftNavMobile.scss';
import burger from 'Images/icons/burger.svg';
import {ReactSVG} from "react-svg";
import global from "Images/icons/global-correlation.svg";
import forecast from "Images/icons/forecast.svg";
import globalActive from "Images/icons/global-correlation-active.svg";
import forecastActive from "Images/icons/forecast-active.svg";
import baseline from "Images/icons/baseline-model.svg";
import baselineActive from "Images/icons/baseline-model-active.svg";
import volatility from "Images/icons/volatility.svg";
import volatilityActive from "Images/icons/volatility-active.svg";
import stylized from "Images/icons/stylized-attributes.svg";
import stylizedActive from "Images/icons/stylized-attributes-active.svg";
import feature from "Images/icons/feature-exploration.svg";
import featureActive from "Images/icons/feature-exploration-active.svg";
import documents from "Images/icons/documents.svg";
import documentsActive from "Images/icons/documents-active.svg";
import data from "Images/icons/data.svg";
import dataActive from "Images/icons/data-active.svg";
import market from "Images/icons/market-metrics.svg";
import marketActive from "Images/icons/market-metrics-active.svg";
import governing from '../../assets/images/icons/governing.svg';
import governingActive from '../../assets/images/icons/governing-active.svg'
import substitution from '../../assets/images/icons/substitution.svg';
import substitutionActive from '../../assets/images/icons/substitution-active.svg'
import contact from '../../assets/images/icons/dataPage.svg';
import contactActive from '../../assets/images/icons/dataPage-active.svg'
import discord from "../../assets/images/icons/discord.svg";
import discordActive from "../../assets/images/icons/discord-active.svg";
import dataPage from '../../assets/images/icons/contact.svg';
import dataPageActive from '../../assets/images/icons/contact-active.svg'
import Logo from "Components/logo/Logo";

const LeftNavMobile = ({setOverlay}) => {

    return (
        <div className="folder navFixedMobile">
            <div className="leftNavMobile">
                <nav className={'nav-left'}>
                    <ul className="leftNavMobile-navUl">
                        <li onClick={() => setOverlay()}>
                            <NavLink to="/summary" className="link">
                                <span className="link-thumb">
                                    <img src={global} alt={forecast} className="link-thumb-default"/>
                                    <img src={globalActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">ABOUT</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setOverlay()}>
                            <NavLink isActive={(match, location) => {
                                if (!location) return false;
                                const {pathname} = location;
                                return pathname === "/";
                            }} to="/" className="link ttu">
                            <span className="link-thumb">
                                    <img src={forecast} alt={forecast} className="link-thumb-default"/>
                                    <img src={forecastActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">FORWARD VALUATION</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setOverlay()}>
                            <NavLink to="/accuracy" className="link ttu">
                                <span className="link-thumb">
                                    <img src={volatility} alt={forecast} className="link-thumb-default"/>
                                    <img src={volatilityActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">Backtest</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setOverlay()}>
                            <NavLink to="/governing-equations" className="link ttu">
                                <span className="link-thumb">
                                    <img src={governing} alt={forecast} className="link-thumb-default"/>
                                    <img src={governingActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">GOVERNING DYNAMICS</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setOverlay()}>
                            <NavLink to="/substitution-rates" className="link ttu">
                                <span className="link-thumb">
                                    <img src={substitution} alt={forecast} className="link-thumb-default"/>
                                    <img src={substitutionActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">SUBSTITUTION RATES</span>
                            </NavLink>
                        </li>
                        {/* <li onClick={() => setOverlay()}>
                            <NavLink to="/alternative-factors" className="link ttu">
                                <span className="link-thumb">
                                    <img src={feature} alt={forecast} className="link-thumb-default"/>
                                    <img src={featureActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">OTHER FACTORS</span>
                            </NavLink>
                        </li> */}
                        {/*<li onClick={() => setOverlay()}>*/}
                        {/*    <NavLink to="/macro-factors" className="link">*/}
                        {/*        <span className="link-thumb">*/}
                        {/*            <img src={stylized} alt={forecast} className="link-thumb-default"/>*/}
                        {/*            <img src={stylizedActive} alt={forecast} className="link-thumb-active"/>*/}
                        {/*        </span>*/}
                        {/*        <span className="link-title">MACRO-FACTORS</span>*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        {/*<li onClick={() => setOverlay()}>*/}
                        {/*    <NavLink to="/micro-factors" className="link">*/}
                        {/*        <span className="link-thumb">*/}
                        {/*            <img src={feature} alt={forecast} className="link-thumb-default"/>*/}
                        {/*            <img src={featureActive} alt={forecast} className="link-thumb-active"/>*/}
                        {/*        </span>*/}
                        {/*        <span className="link-title">MICRO-FACTORS</span>*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li onClick={() => setOverlay()}>
                            <NavLink to="/research" className="link">
                                 <span className="link-thumb">
                                    <img src={documents} alt={forecast} className="link-thumb-default"/>
                                    <img src={documentsActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">RESOURCES</span>
                            </NavLink>
                        </li>
                        {/* <li onClick={() => setOverlay()}>
                            <NavLink to="/faq" className="link">
                                 <span className="link-thumb">
                                    <img src={data} alt={forecast} className="link-thumb-default"/>
                                    <img src={dataActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">FAQ</span>
                            </NavLink>
                        </li> */}
                        {/* <li onClick={() => setOverlay()}>
                            <NavLink to="/data" className="link">
                                <span className="link-thumb">
                                    <img src={dataPage} alt={forecast} className="link-thumb-default"/>
                                    <img src={dataPageActive} alt={forecast} className="link-thumb-active"/>
                                </span>
                                <span className="link-title">DATA & API</span>
                            </NavLink>
                        </li> */}
                        <li onClick={() => setOverlay()}>
                           <NavLink to="/data" className="link">
                               <span className="link-thumb">
                                   <img src={contact} alt={forecast} className="link-thumb-default"/>
                                   <img src={contactActive} alt={forecast} className="link-thumb-active"/>
                               </span>
                               <span className="link-title">DATA NFT</span>
                           </NavLink>
                        </li>
                        <li onClick={() => setOverlay()}>
                           <NavLink to="/discord" className="link">
                               <span className="link-thumb">
                                   <img src={discord} alt={discord} className="link-thumb-default"/>
                                   <img src={discordActive} alt={discord} className="link-thumb-active"/>
                               </span>
                               <span className="link-title">DISCORD</span>
                           </NavLink>
                        </li>
                        <li onClick={() => setOverlay()}>
                           <NavLink to="/contact" className="link">
                               <span className="link-thumb">
                                   <img src={dataPage} alt={forecast} className="link-thumb-default"/>
                                   <img src={dataPageActive} alt={forecast} className="link-thumb-active"/>
                               </span>
                               <span className="link-title">CONTACT</span>
                           </NavLink>
                        </li>
                        {/*<li onClick={() => setOverlay()}>*/}
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
    )

};

export default LeftNavMobile;
