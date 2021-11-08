import React, {Component, Fragment, useState} from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {
    fetchPerformanceBenchmarkSuccess,
    fetchPerformanceBenchmarkError
} from 'Store/charts/performanceBenchmark/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import { useSelector } from "react-redux";

const MonthlyReturn = (props) => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const hours = useSelector((item) => item.hoursReducer.hours);

    const {isLoading, data: {month, Y2017, Y2018, Y2019, Y2020, Y2021}} = props;

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'Return Distribution explores the\n' +
                            'aggregate returns experienced by trading\n' +
                            'Zero Theorem forward valuation.\n' +
                            'Additionally comparing monthly returns\n' +
                            'over several different years'}/>
            <ReactSVG
                // className={["", scroll ? "scroll" : "", scrollTwo ? "scrollTwo" : ""].join(" ")}
                renumerateIRIElements={false}
                src={information}
                wrapper="div"
                onClick={() => {
                    setShow(!show)
                }}
                style={{top: screen.width > 540 ? '2.5rem' : '1.5rem', zIndex: 2, width: '1.4rem', fill: '#ccc', position: 'absolute', right: '2rem'}}
            />
            <Plot
            onClick={() => setScroll(true)}
                data={[
                    {
                        name: '2017',
                        x: Y2017,
                        y: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        orientation: 'h',
                        type: 'bar',
                        marker: {
                            color: '#FFC600',
                        }
                    },
                    {
                        name: '2018',
                        x: Y2018,
                        y: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        orientation: 'h',
                        type: 'bar',
                        marker: {
                            color: '#4A4A4A',
                        }
                    },
                    {
                        name: '2019',
                        x: Y2019,
                        y: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        orientation: 'h',
                        type: 'bar',
                        marker: {
                            color: '#0F58B3',
                        }
                    },
                    {
                        name: '2020',
                        x: Y2020,
                        y: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        orientation: 'h',
                        type: 'bar',
                        marker: {
                            color: 'green',
                        }
                    },
                    {
                        name: '2021',
                        x: Y2021,
                        y: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        orientation: 'h',
                        type: 'bar',
                        marker: {
                            color: 'red',
                        }
                    },
                ]}
                layout={{
                    title: {
                        text: '<b>' + `${hours} Hour Return Distribution` + '</b>',
                        x: 0.05,
                        y: 0.98,
                        font: {
                            size: 16,
                            color: '#deb513',
                            family: 'Raleway, sans-serif',
                            fontWeight: 600
                        },
                    },
                    autosize: true,
                    showlegend: true,
                    legend: {
                        orientation: 'h',
                        x: -0.04,
                        y: 1.15,
                        font: {
                            family: 'Raleway, sans-serif',
                            size: 12,
                            color: '#B2B3B5'
                        }
                    },
                    margin: {
                        l: 30,
                        r: 30,
                        t: 80,
                        b: 30
                    },
                    xaxis: {
                        color: '#B2B3B5',
                        title: {
                            text: 'Total Return Percentage',
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
                        showgrid: false,
                        linecolor: '#4A4A4A',
                        gridcolor: '#4A4A4A',
                    },
                    yaxis: {
                        dtick: 1,
                        color: '#B2B3B5',
                        title: {
                            text: 'Month Number (ex. Jan =1, Feb= 2)',
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
                        showgrid: false,
                        linecolor: '#4A4A4A',
                        gridcolor: '#4A4A4A'
                    },
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    bargroupgap: false,
                    bargap: 0.5,
                    modebar: {
                        bgcolor: 'transparent'
                    },
                    barmode: 'group',
                    barnorm: 'percent',
                }}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true, scroll).config}
            />
        </Fragment>
    )
}


const mapStateToProps = ({performanceBenchmarkReducer}) => {
    return performanceBenchmarkReducer;
};

const mapDispatchToProps = {
    fetchPerformanceBenchmarkSuccess,
    fetchPerformanceBenchmarkError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(MonthlyReturn));
