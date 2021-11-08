import React, { Component, Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { loadDashboardPageSuccess } from '../../../store/quant-nav/actions';
import thumb from '../../../assets/images/icons/feature-exploration.svg';
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
const Blockchain = lazy(() => import("../../../components/charts/blockchain/Blockchain"));

class FeatureExploration extends Component {

    state = {
        icon: thumb,
        title: 'Feature Exploration'
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
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="dashboard-box __xl">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <Blockchain />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureExploration);