import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { loadDashboardPageSuccessResearch } from 'Store/research/actions';
import thumb from 'Images/icons/forecast-2.svg';
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
const Bar = lazy(() => import("../../../components/charts/bar/Bar"));
const StylizedChart5 = lazy(() => import("../../../components/charts/stylized-chart-5/StylizedChart5"));
const ImpliedVolatility = lazy(() => import("../../../components/charts/impliedVolatility/ImpliedVolatility"));
const Surface = lazy(() => import("../../../components/charts/surface/Surface"));

class VolatilityFactors extends Component {

    state = {
        icon: thumb,
        title: 'Volatility Factors'
    };

    componentDidMount() {
        const { loadDashboardPageSuccessResearch } = this.props;
        loadDashboardPageSuccessResearch(this.state);
    }

    render() {

        return(
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <Surface type={'Calls'}/>
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        {/*<StylizedChart5 />*/}
                                        <ImpliedVolatility type={'calls'}/>
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <Surface  type={'Puts'}/>
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        {/*<StylizedChart5 />*/}
                                        <ImpliedVolatility type={'puts'}/>
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <Surface  type={'Different'}/>
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <ImpliedVolatility type={'delta'}/>
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <StylizedChart5 />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <Bar />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    loadDashboardPageSuccessResearch
};

export default connect(mapStateToProps, mapDispatchToProps)(VolatilityFactors);
