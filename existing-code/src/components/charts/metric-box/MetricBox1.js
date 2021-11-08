import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchMetricSuccess, fetchMetricError } from 'Store/metric-box/actions';
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import LocalStorage from "../../localStorage/LocalStorage";

class MetricBox extends Component {

    state = {
      forecastPriceDirection: 'down'
    };

    componentDidMount() {

        // const { api, fetchMetricSuccess, fetchMetricError, data } = this.props;
        //
        // if(isEmpty(data)) {
        //     api.getMetric()
        //         .then(metricData => {
        //             fetchMetricSuccess(metricData.data);
        //             this.detectDataWithLocalStorage(metricData.data.predicted_price);
        //         })
        //         .catch(error => fetchMetricError(error));
        // }

        this.detectDataWithLocalStorage(this.props.data.predicted_price);

    }

    detectDataWithLocalStorage = (data) => {
        const localStorage = new LocalStorage();
        const localData = localStorage.getState('forecastPrice');
        if(localData && localData <  data) {
            this.setState({
                forecastPriceDirection: 'up'
            });
        }
    };

    onForecastDirection = direction => {
        let dir = direction === -1 ? 'Down' : 'Up';
        return <p className="stat-value">{dir} <span className={`stat-value-arrow __${dir.toLocaleLowerCase()}`} /></p>;
    };

    render() {

        const { isLoading, data } = this.props;
        const { forecastPriceDirection } = this.state;

        if(isLoading || isEmpty(data)) {
            return <LoadingIndicator />
        }

        return (
            <div className="stat">
                <p className="dashboard-box-title">Metric box</p>
                <div className="stat-body">
                    <div className="stat-list __middle">
                        <div className="stat-list-item">
                            <div className="stat-row">
                                <p className="stat-label">RMSE:</p>
                                <div className="stat-value">{data.rmse}</div>
                            </div>
                        </div>
                        <div className="stat-list-item">
                            <div className="stat-row">
                                <p className="stat-label">MAPPE:</p>
                                <div className="stat-value">{data.mape}</div>
                            </div>
                        </div>
                        <div className="stat-list-item">
                            <div className="stat-row">
                                <p className="stat-label">MADS:</p>
                                <div className="stat-value">{data.mads}</div>
                            </div>
                        </div>
                        {/*<div className="stat-list-item">*/}
                        {/*    <div className="stat-row">*/}
                        {/*        <p className="stat-label">Accuary:</p>*/}
                        {/*        <div className="stat-value">XX</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="stat-list-item full-width">
                            <div className="stat-row">
                                <p className="stat-label">Stationary:</p>
                                <div className="stat-value">{data.stationary}</div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr __vertical" />
                    <div className="stat-list">
                        <div className="stat-list-item">
                            <p className="stat-label __default">Forecasted Price:</p>
                            <p className="stat-value">$ {data.predicted_price.toFixed(2)}
                                <span className={`stat-value-arrow __${forecastPriceDirection}`} />
                            </p>
                        </div>
                        <div className="stat-list-item">
                            <p className="stat-label __default">Forecasted Direction:</p>
                            {this.onForecastDirection(data.predicted_direction)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({ metricReducer }) => {
    return metricReducer;
};

const mapDispatchToProps = {
    fetchMetricSuccess,
    fetchMetricError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(MetricBox));
