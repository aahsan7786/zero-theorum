import React, { Component, Fragment } from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";

class Blockchain extends Component {

    state = {
        isLoading: true,
        data: [],
        captions: []
    };

    render() {

        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            mode: 'markers',
                            type: 'scatter3d',
                            name: 'PC1',
                            x: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
                            y: [11, 10, 9, 7, 5, 6, 4, 2, 3, 1, 3],
                            z: [4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4],
                            marker: {
                                color: '#0f5bb9',
                                size: 12,
                                cauto: true
                            }
                        },
                        {
                            mode: 'markers',
                            type: 'scatter3d',
                            name: 'PC2',
                            x: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
                            y: [7, 5, 6, 4, 2, 3, 1, 3, -1, -4, -2],
                            z: [2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2],
                            marker: {
                                color: '#b1de13',
                                size: 12,
                                cauto: true
                            }
                        },
                        {
                            mode: 'markers',
                            type: 'scatter3d',
                            name: 'PC3',
                            x: [-1, -2, -4, -3, 0, 3, 1, 4, 6, 2, 1],
                            y: [10, 2, 4, 3, 1, 2, 5, 2, -2, -1, -5],
                            z: [3, 4, 2, 6, 3, 2, 1, 0, -2, -3, -5],
                            marker: {
                                color: '#259c4f',
                                size: 12,
                                cauto: true
                            }
                        }
                    ]}
                    layout={viewSettingsLayout('Blockchain', true, {l: 0, r: 105, t: 105, b: 0}, '', '', 0, '', '').layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig(false).config}
                />
                <div className="dashboard-box-rotate">Click To Rotate</div>
                <div className="dashboard-box-detail">
                    <span className="axis-detail">X: <span className="axis-detail-value">xX%</span></span>
                    <span className="axis-detail">Y: <span className="axis-detail-value">xX%</span></span>
                    <span className="axis-detail">Z: <span className="axis-detail-value">xX%</span></span>
                </div>
                <DateFilter />
            </Fragment>
        )

    }

}

export default WithApiService()(Blockchain);
