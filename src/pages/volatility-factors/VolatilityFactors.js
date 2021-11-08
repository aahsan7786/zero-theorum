import React, {lazy, Suspense, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import './volatilityFactors.scss';
import HeaderGraphPage from "Components/headerGraphPage/HeaderGraphPage";
import thumb from "Images/icons/forecast-2.svg";
import ad from "Images/ad1.png";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import { loadDashboardPageSuccessResearch } from 'Store/research/actions';
import Loader from "Components/loader/loader";

const Surface = lazy(() => import("Charts/surface/Surface"));
const Bar = lazy(() => import("../../components/charts/bar/Bar"));
const StylizedChart5 = lazy(() => import("../../components/charts/stylized-chart-5/StylizedChart5"));
const ImpliedVolatility = lazy(() => import("../../components/charts/impliedVolatility/ImpliedVolatility"));
const BTCReturnHistogram = lazy(() => import("../../components/charts/btcReturnDistribution/BTCReturnHistogram"));
const BTCRolling = lazy(() => import("../../components/charts/btcRolling/BTCRolling"));

const VolatilityFactors = (props) => {

    return(
        <section className="section hero volatility-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={ad} alt="ad" className="imageAdFixed"/>
                        <img src={ad} alt="ad" className="imageAdFixedHidden"/>
                        {/*<HeaderGraphPage icon={thumb} title='Volatility Factors'/>*/}
                        <div className="volatility-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        <Surface type={'Calls'}/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        {/*<StylizedChart5 />*/}
                                                        <ImpliedVolatility type={'calls'}/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        <Surface type={'Puts'}/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        {/*<StylizedChart5 />*/}
                                                        <ImpliedVolatility type={'puts'}/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="dashboard-box __lg">
                                                <ErrorBoundry>
                                                    <Suspense fallback={<div />}>
                                                        <ImpliedVolatility type={'delta'}/>
                                                    </Suspense>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<HeaderGraphPage icon={thumb} title='Forecast'/>*/}
                    </div>
                </div>
            </div>
        </section>
    )

};

const mapStateToProps = (state) => {
  return state;
};


const mapDispatchToProps = {
    loadDashboardPageSuccessResearch
};

export default connect(mapStateToProps, mapDispatchToProps)(VolatilityFactors);
