import React, { Component, Fragment } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchResidualPlotSuccess, fetchResidualPlotError } from 'Store/charts/residualPlot/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import DateFilter from "../../date-filter/DateFilter";
import {fetchData} from "../../globalFunctions/fetchData";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {lastWeek} from "../../globalFunctions/detectDate";
import data from '../../../assets/ppo_versus_order.json';

let residuals = [];
let observation_order = [];

class ResidualPlot extends Component {

    // constructor(props) {
    //     super(props);
    //     this.onChangeFilter = this.onChangeFilter.bind(this);
    // }

    componentDidMount() {
        data.forEach(item => {
            residuals.push(item.residuals);
            observation_order.push(item.observation_order);
        })
        // const { api, fetchResidualPlotSuccess, fetchResidualPlotError, data } = this.props;
        // if(isEmpty(data)) {
        //     fetchData(api.getResidual, fetchResidualPlotSuccess, fetchResidualPlotError, transformDateFormat(lastWeek()));
        //     // api.getResidual('2020-08-14')
        //     //     .then(resData => {
        //     //         fetchResidualPlotSuccess(resData);
        //     //     })
        //     //     .catch(error => fetchResidualPlotError(error));
        // }
    }

    // onChangeFilter(startDate) {
    //     const { api, fetchResidualPlotSuccess, fetchResidualPlotError } = this.props;
    //     fetchData(api.getResidual, fetchResidualPlotSuccess, fetchResidualPlotError, startDate);
    // }

    render() {

        // const { isLoading, data: { date, residual } } = this.props;
        //
        // if(isLoading) {
        //     return <LoadingIndicator />
        // }

        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            x: observation_order,
                            y: residuals,
                            mode: 'lines+markers',
                            name: 'Residuals 360d',
                            marker: {
                                color: 'red',
                                size: 4
                            },
                            line: {
                                dash: 'solid',
                                width: 2,
                                // color: '#0F58B3'
                                color: '#0f5bb9'
                            }
                        },
                    ]}
                    layout={viewSettingsLayout('Residual Plot', true, {l: 30, r: 30, t: 95, b: 30}, '%y/%d/%m', '', 0, '').layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig().config}
                />
                {/*<DateFilter onSubmit={this.onChangeFilter} />*/}
            </Fragment>
        )

    }

}

const mapStateToProps = ({ residualPlotReducer }) => {
    return residualPlotReducer;
};

const mapDispatchToProps = {
    fetchResidualPlotSuccess,
    fetchResidualPlotError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ResidualPlot));
