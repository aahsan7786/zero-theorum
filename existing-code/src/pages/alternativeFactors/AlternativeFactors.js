import React, {lazy, Suspense, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './alternativeFactors.scss';
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import ad from "Images/ad1.png";
import market from "Images/icons/market-metrics.svg";
import featureActive from "Images/icons/feature-exploration-active.svg";
import forecast from "Images/icons/forecast.svg";

const CostOfProduction = lazy(() => import("../../components/charts/cost-of-production/CostOfProduction"));
const Surface = lazy(() => import("Charts/surface/Surface"));
const ImpliedVolatility = lazy(() => import("../../components/charts/impliedVolatility/ImpliedVolatility"));
const BTCReturnHistogram = lazy(() => import("../../components/charts/btcReturnDistribution/BTCReturnHistogram"));
const BTCRolling = lazy(() => import("../../components/charts/btcRolling/BTCRolling"));
const ExchangeInflows = lazy(() => import("../../components/charts/exchange-inflows/ExchangeInflows"));
const EfficiencyIndex = lazy(() => import("../../components/charts/efficiencyIndex/EfficiencyIndex"));
const RollingEnthropy = lazy(() => import("../../components/charts/rolling-enthropy/RollingEnthropy"));
const Autocorrelation = lazy(() => import("../../components/charts/autocorrelation/Autocorrelation"));
const RollingNetFlow = lazy(() => import("../../components/charts/rollingNetFlow/RollingNetFlow"));
const HurstExponent = lazy(() => import("../../components/charts/hurstExponent/HurstExponent"));

const AlternativeFactors = (props) => {

    return (
        <section className="section hero alternativeFactors-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={ad} alt="ad" className="imageAdFixed"/>
                        <img src={ad} alt="ad" className="imageAdFixedHidden"/>
                        <div className="download-button" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                            Download Data
                        </div>
                        <div className="alternativeFactors-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <div className="d-flex mb-4 align-items-center yellow">
                                                            <img src={featureActive} alt="" className="link-thumb-default"/>
                                                            OTHER FACTORS</div>
                                                        <div>Other Factors page explores a range of alternative macro/micro economic
                                                            metrics which can influence Bitcoin pricing dynamics. These factors are
                                                            commonly referenced and sometimes inferred as the cause of volatility.</div>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        {/*<div className="col-xl-6">*/}
                                        {/*    <div className="dashboard-box __lg">*/}
                                        {/*        <ErrorBoundry>*/}
                                        {/*            <Suspense fallback={<div />}>*/}
                                        {/*                <Surface type={'Calls'}/>*/}
                                        {/*            </Suspense>*/}
                                        {/*        </ErrorBoundry>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        {/*<StylizedChart5 />*/}
                                                        <ImpliedVolatility type={'calls'} title=' Implied Call Volatility '
                                                        info='Implied call volatility is calculated from Deribit BTC call options'/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        {/*<div className="col-xl-6">*/}
                                        {/*    <div className="dashboard-box __lg">*/}
                                        {/*        <ErrorBoundry>*/}
                                        {/*            <Suspense fallback={<div />}>*/}
                                        {/*                <Surface type={'Puts'}/>*/}
                                        {/*            </Suspense>*/}
                                        {/*        </ErrorBoundry>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        {/*<StylizedChart5 />*/}
                                                        <ImpliedVolatility type={'puts'} title=' Implied Put Volatility '
                                                                           info='Implied put volatility is calculated from Deribit BTC put options'/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        {/*<div className="col-xl-6">*/}
                                        {/*    <div className="dashboard-box __lg">*/}
                                        {/*        <ErrorBoundry>*/}
                                        {/*            <Suspense fallback={<div />}>*/}
                                        {/*                <ImpliedVolatility type={'delta'}/>*/}
                                        {/*            </Suspense>*/}
                                        {/*        </ErrorBoundry>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        <BTCRolling />
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        <BTCReturnHistogram />
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <CostOfProduction type='min' title={'Minimum Cost of Production'} info={'Minimum Cost of Production is\n' +
                                                        'calculated via the Cambridge Bitcoin\n' +
                                                        'Electricity Consumption Index, the\n' +
                                                        'minimum estimate of electricity cost\n' +
                                                        'and live block reward rates.\n' +
                                                        'All Prices are in USD'}/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <CostOfProduction type='guess' title={'Average Cost of Production'} info={'Average Cost of Production is\n' +
                                                        'calculated via the Cambridge Bitcoin\n' +
                                                        'Electricity Consumption Index, the\n' +
                                                        'minimum estimate of electricity cost\n' +
                                                        'and live block reward rates.\n' +
                                                        'All Prices are in USD'}/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <EfficiencyIndex/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <RollingEnthropy />
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <ExchangeInflows/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <RollingNetFlow />
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <HurstExponent />
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div/>}>
                                                        <Autocorrelation />
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="download-block">
                                                Download data from substitution rates page here.
                                                <br/>
                                                Please note that each download requires users to complete a quick google survey.
                                                <div className="download-button">
                                                    Zero_Theorem_Other_Factors.csv
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

const mapStateToProps = (state) => {
    return state;
};


const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AlternativeFactors);
