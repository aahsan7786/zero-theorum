import React, {Fragment, useEffect, useState} from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import data from "../../../assets/ppo_versus_fit.json"

const Snp500 = () => {
    const [residuals, setResiduals] = useState([]);
    const [fitted_value, setFitted_value] = useState([]);

    useEffect(() => {
        data.forEach(item => {
            residuals.push(item.residuals);
            fitted_value.push(item.fitted_value);
        })
    }, [])

    return (
        <Fragment>
            <Plot
                data={[
                    {
                        y: residuals,
                        x: fitted_value,
                        mode: 'markers',
                        name: 'Impsum',
                        marker: {
                            color: '#0F58B3',
                            size: 8
                        },
                        type: 'scatter'
                    },
                    {
                        x: [-0.04, 0.07],
                        y: [0, 0],
                        name: 'Line',
                        line: {
                            color: '#deb513',
                            width: 1
                        },
                        type: 'scatter',
                        mode: 'lines',
                    }
                ]}
                layout={
                    {
                        showlegend: true,
                        autosize: true,
                        width: null,
                        height: null,
                        font: {
                            family: 'Raleway, sans-serif',
                            color: '#B2B3B5',
                            size: 12,
                            fontWeight: 600
                        },
                        title: {
                            text: '<b>' + 'Price USD' + '</b>',
                            x: 0.05,
                            y: 0.98,
                            font: {
                                size: 16,
                                color: '#B2B3B5',
                                family: 'Raleway, sans-serif',
                                fontWeight: 600
                            },
                        },
                        margin: {l: 40, r: 30, t: 120, b: 30},
                        hovermode: 'closest',
                        bargap: 0.5,
                        xaxis: {
                            color: '#B2B3B5',

                            title: {
                                text: '',
                                standoff: 0,
                                font: {
                                    family: 'Raleway, sans-serif',
                                    size: 12,
                                    color: '#B2B3B5'
                                }
                            },
                            tickfont: {
                                size: 10,
                                color: '#B2B3B5',
                                family: 'Raleway, sans-serif'
                            },
                            showline: false,
                            zeroline: false,
                            showgrid: true,
                            linecolor: '#4A4A4A',
                            gridcolor: '#4A4A4A',
                            domain: [0, 1],
                            // showgrid: false,
                        },
                        yaxis: {
                            domain: [0, 1],
                            showgrid: true,
                            zeroline: false,
                            color: '#B2B3B5',
                            title: {
                                text: '',
                                standoff: 0,
                                font: {
                                    family: 'Raleway, sans-serif',
                                    size: 12,
                                    color: '#B2B3B5'
                                }
                            },
                            tickfont: {
                                size: 10,
                                color: '#B2B3B5',
                                family: 'Raleway, sans-serif'
                            },
                            showline: false,
                            linecolor: '#4A4A4A',
                            gridcolor: '#4A4A4A'
                        },
                        // xaxis2: {
                        //     linecolor: '#4A4A4A',
                        //     gridcolor: '#4A4A4A',
                        //     domain: [0.85, 1],
                        //     showgrid: true,
                        //     zeroline: false
                        // },
                        // yaxis2: {
                        //     linecolor: '#4A4A4A',
                        //     gridcolor: '#4A4A4A',
                        //     domain: [0.85, 1],
                        //     showgrid: true,
                        //     zeroline: false
                        // },
                        legend: {
                            orientation: 'h',
                            x: -0.04,
                            y: 1.15,
                            width: '70%',
                            font: {
                                family: 'Raleway, sans-serif',
                                size: 12,
                                color: '#B2B3B5'
                            }
                        },
                        paper_bgcolor: 'transparent',
                        plot_bgcolor: 'transparent',
                        bargroupgap: false,
                        modebar: {
                            bgcolor: 'transparent'
                        },
                        barmode: 'group',
                        barnorm: '',
                        annotations: ''
                    }}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                config={viewSettingsConfig(true).config}
            />
            <DateFilter/>
        </Fragment>
    )

};

export default Snp500;
