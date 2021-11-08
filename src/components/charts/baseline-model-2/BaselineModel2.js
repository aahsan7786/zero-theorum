import React, { Fragment } from 'react'
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";

const BaselineModel2 = () => {

    return(
        <Fragment>
            <Plot
                data={[
                    {
                        name: 'Actual',
                        y: [35, 30, 86, 10, 50, 60, 70, 75, 10, 30, 40, 30],
                        x: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        type: 'bar',
                        marker: {
                            color: '#FFC600',
                        }
                    },
                    {
                        name: 'Forecast',
                        y: [65, 70, 14, 90, 50, 40, 30, 25, 90, 70, 60, 70],
                        x: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        type: 'bar',
                        marker: {
                            color: '#4A4A4A',
                        }
                    }
                ]}
                layout={viewSettingsLayout('Baseline model 2', true, {l: 30, r: 30, t: 70, b: 30}, '', '', 0.5, '', '', 'stack', 'percent', false, false).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(false).config}
            />
            <DateFilter />
        </Fragment>
    )

};

export default BaselineModel2;