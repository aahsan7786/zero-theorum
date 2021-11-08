import React, { Fragment } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";

const StylizedChart5 = () => {

    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: [0.0, 0.05, 0.1, 0.18, 0.22],
                        // x: [0.809, 0.964, 1.165, 1.425, 1.753, 2.22, 2.798, 3.911, 5.34, 6.915, 9.443, 15.772, 23.21, 40.019, 69.684],
                        // y: [0.713, 0.55, 0.525, 0.538, 0.5, 0.45, 0.4, 0.401, 0.403, 0.411, 0.379, 0.387, 0.248, 0.216, 0.154],
                        y: [10.0, 8.05, 5.1, 6.18, 4.22],
                        mode: 'lines',
                        name: 'Lorem',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: '#0F58B3'
                            // color: '#FFC600'
                        }
                    }
                ]}
                layout={viewSettingsLayout('Price decomposition (Trend)', true, {l: 40, r: 30, t: 95, b: 30}, '', '', 0.5, '', '', 'stack', 'percent', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
            <DateFilter />
        </Fragment>
    )

};

export default StylizedChart5;
