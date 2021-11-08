import React, { Fragment } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";

const StylizedChart1 = () => {

    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: ['2020.15.8', '2020.16.8', '2020.17.8', '2020.18.8', '2020.19.8', '2020.20.8', '2020.21.8', '2020.22.8', '2020.23.8', '2020.24.8'],
                        y: [15, 17, 12, 13, 15, 16, 12, 14, 17, 18],
                        mode: 'lines',
                        name: 'Lorem',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: '#FFC600'
                        }
                    },
                    {
                        x: ['2020.15.8', '2020.16.8', '2020.17.8', '2020.18.8', '2020.19.8', '2020.20.8', '2020.21.8', '2020.22.8', '2020.23.8', '2020.24.8'],
                        y: [16, 18, 17, 18, 16, 11, 14, 11, 13, 20],
                        mode: 'lines',
                        name: 'Ipsum',
                        line: {
                            dash: 'dot',
                            width: 2,
                            color: '#0F58B3'
                        }
                    },
                    {
                        x: ['2020.15.8', '2020.16.8', '2020.17.8', '2020.18.8', '2020.19.8', '2020.20.8', '2020.21.8', '2020.22.8', '2020.23.8', '2020.24.8'],
                        y: [18, 15, 14, 16, 19, 12, 10, 13, 17, 18],
                        mode: 'lines',
                        name: 'Dolor',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: '#4A4A4A'
                        }
                    }
                ]}
                layout={viewSettingsLayout('30 day Rolling Shape Ratio', true, {l: 40, r: 30, t: 95, b: 30}, '%y/%d/%m', '', 0.5, '', '', 'stack', 'percent', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
            <DateFilter />
        </Fragment>
    )

};

export default StylizedChart1;