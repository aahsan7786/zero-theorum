import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchProbPlotSuccess, fetchProbPlotError } from '../../../store/charts/probabilityPlot/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import Plot from "react-plotly.js";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import data from "../../../assets/ppo_qq.json"

let residuals = [];

class ProbabilityPlot extends Component {

    componentDidMount() {
        data.forEach(item => {
            residuals.push(item.residuals);
        })
    //
    //     const { api, fetchProbPlotSuccess, fetchProbPlotError, data } = this.props;
    //     if(isEmpty(data)) {
    //         api.getProbPlot()
    //             .then(probData => fetchProbPlotSuccess(probData))
    //             .catch(error => fetchProbPlotError(error));
    //     }
    }

    render() {

        // const { isLoading, data: { prob_theorical, prob_actual, line } } = this.props;
        //
        // if(isLoading) {
        //     return <LoadingIndicator />
        // }

        return (
            <Plot
                data={[
                    {
                        x: residuals,
                        y: residuals,
                        name: 'Actual theoretical',
                        line: {
                            color: '#0f5bb9',
                            width: 9
                        },
                        type: 'scatter',
                        mode: 'markers',
                    },
                    {
                        x: residuals,
                        y: residuals,
                        name: 'Line',
                        line: {
                            color: '#deb513',
                            width: 1
                        },
                        type: 'scatter',
                        mode: 'lines',
                    }
                ]}
                layout={viewSettingsLayout('Probability Plot', true, {l: 45, r: 30, t: 85, b: 30}, '', '', 0, '', '<b>Ordered Values</b>').layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig().config}
            />
        )

    }

}

const mapStateToProps = ({ probabilityPlotReducer }) => {
    return probabilityPlotReducer;
};

const mapDispatchToProps = {
    fetchProbPlotSuccess,
    fetchProbPlotError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ProbabilityPlot));
