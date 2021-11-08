import React, {Component, lazy, Suspense, Fragment} from 'react';
import { connect } from "react-redux";
import { loadDashboardPageSuccess } from "../../../store/quant-nav/actions";
import thumb from "../../../assets/images/icons/market-metrics.svg";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
const ExchangeInflows = lazy(() => import("../../../components/charts/exchange-inflows/ExchangeInflows"));
const CostOfProduction = lazy(() => import("../../../components/charts/cost-of-production/CostOfProduction"));
const EfficiencyIndex = lazy(() => import("../../../components/charts/efficiencyIndex/EfficiencyIndex"));
const MarketCorrelation = lazy(() => import("../../../components/charts/market-correlation/MarketCorrelation"));

class MarketMetrics extends Component {

    state = {
        icon: thumb,
        title: 'Market Metrics'
    };

    componentDidMount() {
        const { loadDashboardPageSuccess } = this.props;
        loadDashboardPageSuccess(this.state);
    }

    render() {
        return(
            <Fragment>
                <div className="row">
                    <div className="col-xl-7">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <CostOfProduction />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <ExchangeInflows />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="dashboard-box __lg">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <EfficiencyIndex />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="dashboard-box __xl">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <MarketCorrelation />
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketMetrics);
