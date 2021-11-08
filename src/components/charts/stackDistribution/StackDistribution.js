import React, { Component, Fragment } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";

class StackDistribution extends Component {

    render() {

        return (
            <Fragment>
                <Plot
                    data={[
                        {
                            type: 'sunburst',
                            textinfo: '',
                            labels: ['Actual', 'MINT', 'Mnt', 'NFS', 'XFG', 'MINT2', 'NFS2'],
                            parents: ['', 'Actual', 'Actual', 'Actual', 'Actual', 'MINT', 'NFS'],
                            marker: {
                                colors: ['#12191B', '#FFC600', '#AA8812', '#0F58B3', '#0F58B3', '#FFC600', '#0F58B3']
                            }
                            // values: [0, 50, 50, 30, 55, 78, 43]
                        }
                    ]}
                    layout={viewSettingsLayout('Stack Distribution', true, {l: 0, r: 100, t: 95, b: 30}, '', '', 0, '').layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig().config}
                />
                <DateFilter />
            </Fragment>
        )

    }

}

export default StackDistribution;