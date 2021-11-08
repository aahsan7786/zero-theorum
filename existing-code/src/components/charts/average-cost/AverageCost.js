import React, { Fragment } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";

const AverageCost = () => {

    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: [0, 5, 10, 15, 20, 25],
                        y: [20, 25, 30, 38, 40, 42, 38, 42, 38, 55, 42],
                        mode: 'lines',
                        name: 'Lorem',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: '#FFC600'
                        }
                    },
                ]}
                layout={viewSettingsLayout('Average Cost', true, {l: 40, r: 30, t: 95, b: 30}, '', '', 0.5, 'Time', '', 'stack', 'percent', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
            <DateFilter />
        </Fragment>
    )

};

export default AverageCost;
