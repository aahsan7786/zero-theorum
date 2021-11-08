import React, {Fragment, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import './microFactors.scss';
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import { loadDashboardPageSuccessResearch } from 'Store/research/actions';
import ad from "Images/ad1.png";

const ExchangeInflows = lazy(() => import("../../components/charts/exchange-inflows/ExchangeInflows"));
const AverageCost = lazy(() => import("../../components/charts/average-cost/AverageCost"));
const EfficiencyIndex = lazy(() => import("../../components/charts/efficiencyIndex/EfficiencyIndex"));
const RollingEnthropy = lazy(() => import("../../components/charts/rolling-enthropy/RollingEnthropy"));
const SeasonalDecompose = lazy(() => import("../../components/charts/seasonalDecompose/SeasonalDecompose"));
const TrendDecompose = lazy(() => import("../../components/charts/trendDecompose/TrendDecompose"));
const Autocorrelation = lazy(() => import("../../components/charts/autocorrelation/Autocorrelation"));
const PartialAutoCorrelation = lazy(() => import("../../components/charts/partialAutoCorrelation/PartialAutoCorrelation"));
const RollingNetFlow = lazy(() => import("../../components/charts/rollingNetFlow/RollingNetFlow"));
const HurstExponent = lazy(() => import("../../components/charts/hurstExponent/HurstExponent"));

const MicroFactors = (props) => {

    return(
        <section className="section hero microFactors-page">
           <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={ad} alt="ad" className="imageAdFixed"/>
                        <img src={ad} alt="ad" className="imageAdFixedHidden"/>
                        <div className="microFactors-body">
                            <Fragment>
                                <div className="row">
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
                                    {/*<div className="col-xl-6">*/}
                                    {/*    <div className="dashboard-box __lg">*/}
                                    {/*        <ErrorBoundry>*/}
                                    {/*            <Suspense fallback={<div/>}>*/}
                                    {/*                <SeasonalDecompose />*/}
                                    {/*            </Suspense>*/}
                                    {/*        </ErrorBoundry>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xl-6">*/}
                                    {/*    <div className="dashboard-box __lg">*/}
                                    {/*        <ErrorBoundry>*/}
                                    {/*            <Suspense fallback={<div/>}>*/}
                                    {/*                <TrendDecompose />*/}
                                    {/*            </Suspense>*/}
                                    {/*        </ErrorBoundry>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
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
                                </div>
                            </Fragment>
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


const mapDispatchToProps = {
    loadDashboardPageSuccessResearch
};

export default connect(mapStateToProps, mapDispatchToProps)(MicroFactors);
