import React, {Component, lazy, Suspense, Fragment} from 'react';
import {connect} from "react-redux";
import {loadDashboardPageSuccessResearch} from "../../../store/research/actions";
import thumb from "../../../assets/images/icons/market-metrics.svg";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";

const ExchangeInflows = lazy(() => import("../../../components/charts/exchange-inflows/ExchangeInflows"));
const AverageCost = lazy(() => import("../../../components/charts/average-cost/AverageCost"));
const EfficiencyIndex = lazy(() => import("../../../components/charts/efficiencyIndex/EfficiencyIndex"));
const TwoLine = lazy(() => import("../../../components/charts/seasonalDecompose/TwoLine"));
const ErrorBar = lazy(() => import("../../../components/charts/autocorrelation/ErrorBar"));

class MicroFactors extends Component {

    state = {
        icon: thumb,
        title: 'Micro Factors'
    };

    componentDidMount() {
        const {loadDashboardPageSuccessResearch} = this.props;
        loadDashboardPageSuccessResearch(this.state);
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator/>}>
                                    <EfficiencyIndex/>
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <AverageCost />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator/>}>
                                    <ExchangeInflows/>
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <AverageCost />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <TwoLine />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <AverageCost />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <ErrorBar />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <ErrorBar />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    loadDashboardPageSuccessResearch
};

export default connect(mapStateToProps, mapDispatchToProps)(MicroFactors);
