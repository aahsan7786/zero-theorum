import React, {useEffect, Fragment, useState} from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "Components/globalFunctions/globalFunctions";
import {fetchData} from "Components/globalFunctions/fetchData";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import {fetchAutoCorrelationError, fetchAutoCorrelationSuccess} from "Store/charts/autocorrelation/actions";
import WithApiService from "Components/hoc/WithApiService";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const Autocorrelation = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const {api, fetchAutoCorrelationSuccess, fetchAutoCorrelationError, data} = props;
        if (isEmpty(data)) {
            fetchData(api.getAutocorrelation, fetchAutoCorrelationSuccess, fetchAutoCorrelationError);
        }
    }, []);

    const {isLoading, data: {corr, lags }} = props;

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'Autocorrelation explores the relationship\n' +
                            'between the price series and previous price\n' +
                            'series observations (classified as lags). Here\n' +
                            'analysis of the correlation intensity and\n' +
                            'persistence can be exploreed.'}/>
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
                data={[
                    {
                        x: [0, lags[lags.length-1]],
                        y: [0, 0],
                        mode: 'lines',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: 'rgba(255, 105, 105,0.6)'
                        }
                    },
                    {
                        y: corr,
                        type: 'bar',
                        marker: {
                            color: "rgba(255, 105, 105,0.6)",
                        }
                    },
                    // {
                    //     y: confint_2,
                    //     fill: "tozerox",
                    //     fillcolor: "rgba(255, 105, 105,0.6)",
                    //     line: {color: "transparent"},
                    //     name: "Fair",
                    //     type: "scatter"
                    // },
                    // {
                    //     y: confint_1,
                    //     fill: "tozerox",
                    //     fillcolor: "rgba(255, 105, 105,0.6)",
                    //     line: {color: "transparent"},
                    //     name: "Fair",
                    //     type: "scatter"
                    // }
                ]}
                layout={viewSettingsLayout('Autocorrelation Plot', true, {
                    l: 40,
                    r: 30,
                    t: 95,
                    b: 30
                }, '', '', 0.5, 'Lag', 'Autocorrelation Factor', '', '', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
        </Fragment>
    )

};


const mapStateToProps = ({autoCorrelationReducer}) => {
    return autoCorrelationReducer;
};

const mapDispatchToProps = {
    fetchAutoCorrelationSuccess,
    fetchAutoCorrelationError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(Autocorrelation));
