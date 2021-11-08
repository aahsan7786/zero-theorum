import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchQqPlotSuccess, fetchQqPlotError } from '../../../store/charts/qqPlot/actions';
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import Plot from "react-plotly.js";

class QqPlot extends Component {

    componentDidMount() {
        const { api, fetchQqPlotSuccess, fetchQqPlotError, data } = this.props;
        if(isEmpty(data)){
            api.getQqPlot()
                .then(qqPlotData => fetchQqPlotSuccess(qqPlotData))
                .catch(error => fetchQqPlotError(error));
        }
    }

    render() {

        const { isLoading, data: { line, z_actual, z_theorical } } = this.props;

        if(isLoading) {
            return <LoadingIndicator />
        }

        return(
            <Plot
                data={[
                    {
                        x: z_theorical,
                        y: z_actual,
                        name: 'Actual theoretical',
                        line: {
                            color: '#0f5bb9',
                            width: 9
                        },
                        type: 'scatter',
                        mode: 'markers',
                    },
                    {
                        x: [-3.5, 3.5],
                        y: [-3.5, 3.5],
                        name: 'Line',
                        line: {
                            color: '#deb513',
                            width: 1
                        },
                        type: 'scatter',
                        mode: 'lines',
                    }
                ]}
                layout={viewSettingsLayout('QQ plot', true, {l: 45, r: 30, t: 85, b: 30}, '', '', 0, '', '<b>Quante Quantiles</b>').layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig().config}
            />
        )

    }

}

const mapStateToProps = ({ qqPlotReducer }) => {
    return qqPlotReducer;
};

const mapDispatchToProps = {
    fetchQqPlotSuccess,
    fetchQqPlotError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(QqPlot));
