import React, {Fragment, useEffect, useState} from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {fetchSubstitutionRateSuccess, fetchSubstitutionRateError} from 'Store/charts/substitutionRate/actions';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import './sccatteredPlots.scss';

const ScatteredPlots = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const {api, type, fetchSubstitutionRateSuccess, fetchSubstitutionRateError, data} = props;
        if (isEmpty(data) && !props.disable) {
            api.getSubstitutionRate('2021-07-20', type)
                .then(probData => fetchSubstitutionRateSuccess(probData))
                .catch(error => fetchSubstitutionRateError(error));
        }
    }, [])

    const {isLoading, data} = props;


    if (isLoading) {
        return <Loader style={{marginTop:0}}/>
    }

    return (
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis dictum sem, in vestibulum nisl fermentum vel. Cras malesuada pharetra tortor, at imperdiet nisl bibendum varius.'}/>
            <ReactSVG
                // className={["", scroll ? "scroll" : "", scrollTwo ? "scrollTwo" : ""].join(" ")}
                renumerateIRIElements={false}
                src={information}
                wrapper="div"
                onClick={() => {
                    setShow(!show)
                }}
                style={{zIndex: 2, width: '1.4rem', fill: '#ccc', position: 'absolute', right: '2rem'}}
            />
            {/*<div className={screen.width > 540 ? "d-flex" : "scatteredPlots"}>*/}
            {/*    <div className={screen.width > 540 ? "col-4 d-flex align-items-center justify-content-center" : "display-none"}>*/}
            {/*        <img src={props.image} alt="" />*/}
            {/*    </div>*/}
            {/*    */}
            {/*</div>*/}
            <Plot
                data={[
                    {
                        x: data.date,
                        y: data[props.type],
                        // x: data[type].scatter.x,
                        // y: data[type].scatter.y,
                        mode: 'markers',
                        // name: 'Impsum',
                        marker: {
                            color: '#0F58B3',
                            size: 6
                        },
                        type: 'scatter'
                    },
                    {
                        x: data.date,
                        y: data.btc,
                        // x: data[type].regression.ciX,
                        // y: data[type].regression.ciY,
                        fill: "tozerox",
                        fillcolor: "rgba(74, 74, 74, 0.5)",
                        line: {color: "transparent"},
                        // name: "Dolor",
                        type: "scatter"
                    },
                    {
                        x: data.date,
                        y: data.btc,
                        // x: data[type].regression.x,
                        // y: data[type].regression.y,
                        line: {color: "#FFC600"},
                        mode: "lines",
                        name: "y_pred",
                        type: "scatter"
                    },
                    // {
                    //     // x: data[type].histogram_y.y,
                    //     y: data[type].histogram_y.bins,
                    //     // name: 'Lorem',
                    //     // marker: {color: 'red'},
                    //     marker: {color: '#0F58B3'},
                    //     xaxis: 'x2',
                    //     type: 'histogram'
                    // },
                    // {
                    //     x: data[type].histogram_y.y,
                    //     y: data[type].histogram_y.bins,
                    //     // line: {color: "red"},
                    //     line: {color: "#FFC600"},
                    //     mode: "lines",
                    //     // name: "Ipsume",
                    //     xaxis: 'x2',
                    //     type: "scatter"
                    // },
                    // {
                    //     x: data[type].histogram_X.bins,
                    //     y: data[type].histogram_X.y,
                    //     line: {color: "#FFC600"},
                    //     mode: "lines",
                    //     // name: "Ipsume",
                    //     yaxis: 'y2',
                    //     type: "scatter"
                    // },
                    // {
                    //     x: data[type].histogram_X.bins,
                    //     y: data[type].histogram_X.y,
                    //     // name: 'Lorem',
                    //     marker: {color: '#0F58B3'},
                    //     yaxis: 'y2',
                    //     type: 'histogram'
                    // },
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
                            text: '<b>' + props.title + '</b>',
                            x: 0.05,
                            y: 0.98,
                            font: {
                                size: screen.width > 540 ? 16 : 7,
                                color: '#B2B3B5',
                                family: 'Raleway, sans-serif',
                                fontWeight: 600
                            },
                        },
                        margin: {l: 40, r: 20, t: 120, b: 30},
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
                            tickformat: '',
                            showgrid: true,
                            linecolor: '#4A4A4A',
                            gridcolor: '#4A4A4A',
                            domain: [0, 1],
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
        </Fragment>
    )
}

// const mapStateToProps = state => {
//     return {
//         substitutionRateReducer: state.substitutionRateReducer,
//         substitutionRateCorrReducer: state.substitutionRateCorrReducer
//     };
// };

const mapStateToProps = ({substitutionRateReducer}) => {
    return substitutionRateReducer
};

// const mapDispatchToProps = {
//     fetchScatteredPlotsError,
//     fetchScatteredPlotsSuccess,
// };

const mapDispatchToProps = {
    fetchSubstitutionRateError,
    fetchSubstitutionRateSuccess,
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ScatteredPlots));

