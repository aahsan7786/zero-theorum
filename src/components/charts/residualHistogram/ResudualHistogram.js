import React, { Component, Fragment } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchResidualHisSuccess, fetchResidualHisError } from '../../../store/charts/residualHistogram/actions';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {fetchData} from "Components/globalFunctions/fetchData";
import DateFilterRange from "Components/date-filter-range/DateFilterRange";
import {transformDateFormat} from "Components/globalFunctions/transformDateFormat";
import {lastWeek} from "Components/globalFunctions/detectDate";

const residuals = [-0.09051863625475262, 0.0658258857732115,28.0, -0.04113313529167037, -0.016440384810129244, 0.008252365671411882, 0.03294511615295301, 0.057637866634494134, 0.08233061711603526]
const frequency = [8, 28.0, 49, 132, 87, 45, 17, 12]


const periods = [
    {
        id: 'week',
        title: 'Last 7 Days',
        day: 7,
        isActive: true,
    },
    {
        id: 'month',
        title: 'Last 30 Days',
        day: 30,
        isActive: false
    },
    {
        id: 'quarter',
        title: 'Last 90 Days',
        day: 90,
        isActive: false
    },
    {
        id: 'half_year',
        title: 'Last 180 Days',
        day: 180,
        isActive: false
    },
    {
        id: 'year',
        title: 'Last Year',
        day: 360,
        isActive: false
    }
];

class ResidualHistogram extends Component {

    constructor(props) {
        super(props);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    componentDidMount() {
        const { api, fetchResidualHisSuccess, fetchResidualHisError, data } = this.props;
        if(isEmpty(data)) {
            fetchData(api.getResidualHistogram, fetchResidualHisSuccess, fetchResidualHisError, 7);
            // api.getResidual('2020-08-14')
            //     .then(resData => {
            //         fetchResidualPlotSuccess(resData);
            //     })
            //     .catch(error => fetchResidualPlotError(error));
        }
        // if(isEmpty(data)) {
        //     api.getResidualHistogram()
        //         .then(resHisData => {
        //             fetchResidualHisSuccess(resHisData);
        //         })
        //         .catch(error => fetchResidualHisError(error));
        // }
    }


    onChangeFilter(startDate) {
        // const { api, fetchResidualHisSuccess, fetchResidualHisError } = this.props;
        // fetchData(api.getResidualHistogram, fetchResidualHisSuccess, fetchResidualHisError, startDate);
    }

    render() {
        // const { isLoading, data: { bins, frecuencies }  } = this.props;
        // if(isLoading) {
        //     return <LoadingIndicator />
        // }
        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            // x: bins,
                            // y: frecuencies,
                            y: residuals,
                            x: frequency,
                            marker: {
                                color: '#a78814',
                            }
                        }
                    ]}
                    layout={viewSettingsLayout('Residual Histogram', false, {l: 30, r: 30, t: 95, b: 30} ).layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig().config}
                />
                {/*<DateFilterRange onSubmit={this.onChangeFilter} periods={periods}/>*/}
            </Fragment>
        )
    }
}

const mapStateToProps = ({ residualHisReducer }) => {
    return residualHisReducer;
};

const mapDispatchToProps = {
    fetchResidualHisSuccess,
    fetchResidualHisError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ResidualHistogram));
