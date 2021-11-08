import React, {Suspense, useEffect, useState} from 'react';
import './data.scss';
import {connect} from "react-redux";
import DataDownloads from "Components/data-downloads/DataDownloads";
import arrowLeft from "Images/icons/arrow-left.svg";
import arrowRight from "Images/icons/arrow-right.svg";
import {ReactSVG} from "react-svg";
import {openModalData, openModal} from "Store/modal/actions";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import dataPageActive from '../../assets/images/icons/dataPage-active.svg'
import FlipCountdown from "@rumess/react-flip-countdown";

const Data = (props) => {

    return (
        <section className="section hero inner-page data-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div
                            className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
                            <ErrorBoundry>
                                <Suspense fallback={<div/>}>
                                    <div className="d-flex mb-4 align-items-center yellow">
                                        <img src={dataPageActive} alt="" className="link-thumb-default"/>
                                        DATA
                                    </div>
                                    <div>Data page allows users to download all data published on website by completing
                                        a quick Google initiated Survey.
                                        Here proceeds from completing the survey accurately contribute to the ongoing
                                        maintenance and development of our platform.
                                    </div>
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="d-flex data-download-block">
                        <div className="data-download-column">
                            <div className="data-download-cell yellow">Weekly</div>
                            <div className="data-download-cell">Forward Valuation</div>
                            <div className="data-download-cell">Governing Dynamics </div>
                            <div className="data-download-cell-noBorder">Substitution Rates</div>
                        </div>
                        <div className="data-download-column column-xl">
                            <div className="data-download-cell">Last Modified</div>
                            <div className="data-download-cell">30.08.2021</div>
                            <div className="data-download-cell">30.08.2021</div>
                            <div className="data-download-cell-noBorder">30.08.2021</div>
                        </div>
                        <div className="data-download-column column-xl">
                            <div className="data-download-cell">Download</div>
                            <div className="data-download-cell blue">ZT-FV.csv</div>
                            <div className="data-download-cell blue">ZT-GD.csv</div>
                            <div className="data-download-cell-noBorder blue">ZT-SR.csv</div>
                        </div>
                        <div className="data-time-block">
                            <div className="h5 mb-4 mt-2 yellow text-center">
                                <b>Next Update:</b>
                            </div>
                            <FlipCountdown
                                size='small'
                                yearTitle='Year'
                                monthTitle='Months'
                                dayTitle='Days'
                                hourTitle='Hours'
                                minuteTitle='Minutes'
                                secondTitle='Seconds'
                                hideYear
                                hideMonth
                                hideDay
                                titlePosition='bottom'
                                // hideHour
                                // hideMinute
                                // hideSecond
                                endAtZero
                                style={{margin: 0}}
                                endAt={'2025-07-9 00:00:00'} // Date/Time
                            />
                        </div>
                    </div>
                    <div className="d-flex data-download-block">
                        <div className="data-download-column">
                            <div className="data-download-cell yellow">Daily</div>
                            <div className="data-download-cell">Forward Valuation</div>
                            <div className="data-download-cell">Governing Dynamics </div>
                            <div className="data-download-cell-noBorder">Substitution Rates</div>
                        </div>
                        <div className="data-download-column column-xl">
                            <div className="data-download-cell">Last Modified</div>
                            <div className="data-download-cell">30.08.2021</div>
                            <div className="data-download-cell">30.08.2021</div>
                            <div className="data-download-cell-noBorder">30.08.2021</div>
                        </div>
                        <div className="data-download-column column-xl">
                            <div className="data-download-cell">Download</div>
                            <div className="data-download-cell blue">ZT-FV.csv</div>
                            <div className="data-download-cell blue">ZT-GD.csv</div>
                            <div className="data-download-cell-noBorder blue">ZT-SR.csv</div>
                        </div>
                        <div className="data-time-block">
                            <div className="h5 mb-4 mt-2 yellow text-center">
                                <b>Next Update:</b>
                            </div>
                            <FlipCountdown
                                size='small'
                                yearTitle='Year'
                                monthTitle='Months'
                                dayTitle='Days'
                                hourTitle='Hours'
                                minuteTitle='Minutes'
                                secondTitle='Seconds'
                                hideYear
                                hideMonth
                                hideDay
                                titlePosition='bottom'
                                // hideHour
                                // hideMinute
                                // hideSecond
                                endAtZero
                                style={{margin: 0}}
                                endAt={'2025-07-9 00:00:00'} // Date/Time
                            />
                        </div>
                    </div>
                    <div className="d-flex data-download-block">
                        <div className="data-download-column">
                            <div className="data-download-cell yellow">Hourly</div>
                            <div className="data-download-cell">Forward Valuation</div>
                            <div className="data-download-cell">Governing Dynamics </div>
                            <div className="data-download-cell-noBorder">Substitution Rates</div>
                        </div>
                        <div className="data-download-column column-xl">
                            <div className="data-download-cell">Last Modified</div>
                            <div className="data-download-cell">30.08.2021</div>
                            <div className="data-download-cell">30.08.2021</div>
                            <div className="data-download-cell-noBorder">30.08.2021</div>
                        </div>
                        <div className="data-download-column column-xl">
                            <div className="data-download-cell">Download</div>
                            <div className="data-download-cell blue">ZT-FV.csv</div>
                            <div className="data-download-cell blue">ZT-GD.csv</div>
                            <div className="data-download-cell-noBorder blue">ZT-SR.csv</div>
                        </div>
                        <div className="data-time-block">
                            <div className="h5 mb-4 mt-2 yellow text-center">
                                <b>Next Update:</b>
                            </div>
                            <FlipCountdown
                                size='small'
                                yearTitle='Year'
                                monthTitle='Months'
                                dayTitle='Days'
                                hourTitle='Hours'
                                minuteTitle='Minutes'
                                secondTitle='Seconds'
                                hideYear
                                hideMonth
                                hideDay
                                titlePosition='bottom'
                                // hideHour
                                // hideMinute
                                // hideSecond
                                endAtZero
                                style={{margin: 0}}
                                endAt={'2025-07-9 00:00:00'} // Date/Time
                            />
                        </div>
                    </div>
                    {/*<div className="col-xs-12 col-lg-6 pb-4 justify-content-between">*/}
                    {/*    <div className="google-ad-sense justify-content-between d-flex flex-column">*/}
                    {/*        <div className="ad">*/}
                    {/*            <span>GOOGLE ADSENSE SURVEY</span>*/}
                    {/*        </div>*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col-6 google-ad-sense-back">*/}
                    {/*                <ReactSVG*/}
                    {/*                    renumerateIRIElements={false}*/}
                    {/*                    src={arrowLeft}*/}
                    {/*                    wrapper="span"*/}
                    {/*                    onClick={() => {*/}
                    {/*                    }}*/}
                    {/*                    style={{*/}
                    {/*                        width: '0.6rem',*/}
                    {/*                        display: 'inline-block', marginRight: 12,*/}
                    {/*                        marginBottom: -4*/}
                    {/*                    }}*/}
                    {/*                />*/}
                    {/*                <span>Back</span>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-6 google-ad-sense-next">*/}
                    {/*                <span>Next</span>*/}
                    {/*                <ReactSVG*/}
                    {/*                    renumerateIRIElements={false}*/}
                    {/*                    src={arrowRight}*/}
                    {/*                    wrapper="span"*/}
                    {/*                    onClick={() => {*/}
                    {/*                    }}*/}
                    {/*                    style={{*/}
                    {/*                        width: '0.6rem',*/}
                    {/*                        display: 'inline-block', marginLeft: 12,*/}
                    {/*                        marginBottom: -4*/}
                    {/*                    }}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-6 col-xs-12">*/}
                    {/*    <DataDownloads/>*/}
                    {/*</div>*/}
                    {/*<div className="col-12 mb-5">*/}
                    {/*    <div className="google-ad-sense p-5">*/}
                    {/*        <div className={`d-flex align-items-center justify-content-between ${screen.width > 540 ? '' : 'flex-column text-center'}`}>*/}
                    {/*            <div className="text-center">*/}
                    {/*                <span className={`${screen.width > 540 ? 'h2' : 'mb-2'}`}>*/}
                    {/*                WANT ACCESS TO OUR DATABASE?*/}
                    {/*            </span>*/}
                    {/*                <br/><br/>1. Full Range of Different Time Horizons Forecasts*/}
                    {/*                (Intraday, Daily, Weekly, Monthly, etc)*/}
                    {/*                <br/><br/>2. Full Range of Different Digital Asset Models (BTC,*/}
                    {/*                ETH, LTC, DODGE, BCH, ETC, etc)*/}
                    {/*                <br/><br/>3. Access our Financial/Blockchain Feeds, Processed*/}
                    {/*                Metrics and Backtesting Infrastructure*/}
                    {/*                <br/><br/>4. User Dashboard with .csv Download / Direct API*/}
                    {/*                <br/><br/>*/}
                    {/*            </div>*/}
                    {/*            <button className="btn __border" onClick={() => props.openModalData('data')}>*/}
                    {/*                <span className="btn-title">Register interest</span>*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
            {/*<div className="modal-data">*/}
            {/*    */}
            {/*    <div className="col-12 d-flex justify-content-center">*/}
            {/*        <Link to="#" className="btn __border" onClick={() => openModal('done')}>*/}
            {/*            <span className="btn-title">Register interest</span>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    )

};


const mapDispatchToProps = {
    openModalData,
    openModal
};

export default connect(null, mapDispatchToProps)(Data);
