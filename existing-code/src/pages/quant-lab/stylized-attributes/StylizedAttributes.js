import React, { Component, Fragment, lazy, Suspense } from 'react';
import { connect } from "react-redux";
import { loadDashboardPageSuccess } from "../../../store/quant-nav/actions";
import thumb from "../../../assets/images/icons/stylized-attributes.svg";
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
const StylizedChart1 = lazy(() => import("../../../components/charts/stylized-chart-1/StylizedChart1"));
const StylizedChart2 = lazy(() => import("../../../components/charts/stylized-chart-2/StylizedChart2"));
const StylizedChart5 = lazy(() => import("../../../components/charts/stylized-chart-5/StylizedChart5"));

class StylizedAttributes extends Component {

    state = {
        icon: thumb,
        title: 'Stylized Attributes'
    };

    componentDidMount() {
        const { loadDashboardPageSuccess } = this.props;
        loadDashboardPageSuccess(this.state);
    }

    render() {
        return(
            <Fragment>
                <div className="row">
                    <div className="col-12">
                        <div className="dashboard-box __stat __panel">
                            <div className="dashboard-panel">
                                <div className="dashboard-panel-item">
                                    <p>Monday: <span className="yellow">XX</span></p>
                                </div>
                                <div className="dashboard-panel-item">
                                    <p>Tuesday: <span className="yellow">XX</span></p>
                                </div>
                                <div className="dashboard-panel-item">
                                    <p>Wednesday: <span className="yellow">XX</span></p>
                                </div>
                                <div className="dashboard-panel-item">
                                    <p>Thursday: <span className="yellow">XX</span></p>
                                </div>
                                <div className="dashboard-panel-item">
                                    <p>Friday: <span className="yellow">XX</span></p>
                                </div>
                                <div className="dashboard-panel-item">
                                    <p>Saturday: <span className="yellow">XX</span></p>
                                </div>
                                <div className="dashboard-panel-item">
                                    <p>Sunday: <span className="yellow">XX</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="dashboard-box __sm">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <StylizedChart1 />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __sm">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <StylizedChart2 />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="dashboard-box __sm">
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __sm">
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="dashboard-box __sm">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <StylizedChart5 />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __sm">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <StylizedChart5 />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="dashboard-box __sm">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <StylizedChart5 />
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
    loadDashboardPageSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(StylizedAttributes);