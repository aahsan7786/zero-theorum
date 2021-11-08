import React, {Component, Fragment, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import { loadDashboardPageSuccess } from 'Store/quant-nav/actions';
import thumb from "Images/icons/baseline-model.svg";
import './base-models.scss';
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import DateFilter from "Components/date-filter/DateFilter";
const StackDistribution = lazy(() => import("Charts/stackDistribution/StackDistribution"));
const BaselineModel2 = lazy(() => import("Charts/baseline-model-2/BaselineModel2"));

class BaseModels extends Component {

    state = {
        icon: thumb,
        title: 'Baseline Model'
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
                                <div className="dashboard-box __sm">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <StackDistribution />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="dashboard-box __sm">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <BaselineModel2 />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="dashboard-box __stat __table">
                                    <div className="table">
                                        <div className="table-header">
                                            <div className="table-header-box">
                                                <span className="table-body-title">Table title</span>
                                            </div>
                                            <div className="table-header-box">
                                                <DateFilter />
                                            </div>
                                        </div>
                                        <div className="table-scroll">
                                            <table className="table-body">
                                                <thead>
                                                    <tr>
                                                        <th>Ranking</th>
                                                        <th>Rank</th>
                                                        <th>Author</th>
                                                        <th>Forecast</th>
                                                        <th>Direction</th>
                                                        <th>RMSE</th>
                                                        <th>MAPE</th>
                                                        <th>MADS</th>
                                                        <th>R<sub>2</sub></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Model 1</td>
                                                        <td><span className="num">1</span></td>
                                                        <td>John Smith</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Model 2</td>
                                                        <td><span className="num">2</span></td>
                                                        <td>John Smith</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Model 3</td>
                                                        <td><span className="num">3</span></td>
                                                        <td>John Smith</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Model 4</td>
                                                        <td><span className="num">4</span></td>
                                                        <td>John Smith</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                        <td>Lorem Impsum</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseModels);