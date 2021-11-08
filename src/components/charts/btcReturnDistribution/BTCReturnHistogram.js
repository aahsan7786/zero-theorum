import React, {Component, Fragment, useEffect, useState} from 'react';
import WithApiService from '../../hoc/WithApiService';
import {connect} from 'react-redux';
import {fetchBTCReturnDisError, fetchBTCReturnDisSuccess} from '../../../store/charts/BTCReturnDistribution/actions';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {fetchData} from "Components/globalFunctions/fetchData";
import DateFilterRange from "Components/date-filter-range/DateFilterRange";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";


const periods = [
    {
        id: 'week',
        title: 'Last 7 Days',
        day: 7,
        isActive: true,
    },
    {
        id: 'days15',
        title: 'Last 15 Days',
        day: 15,
        isActive: false
    },
    {
        id: 'month',
        title: 'Last 30 Days',
        day: 30,
        isActive: false
    },
    {
        id: 'quarter',
        title: 'Last 90 Days',
        day: 90,
        isActive: false
    },
    {
        id: 'half_year',
        title: 'Last 180 Days',
        day: 180,
        isActive: false
    },
    {
        id: 'year',
        title: 'Last Year',
        day: 360,
        isActive: false
    }
];

const BTCReturnHistogram = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const {api, fetchBTCReturnDisSuccess, fetchBTCReturnDisError, data} = props;
        if (isEmpty(data)) {
            fetchData(api.getBTCReturnDistribution, fetchBTCReturnDisSuccess, fetchBTCReturnDisError, 360);
        }
    }, [])


    const onChangeFilter = (startDate) => {
        const {api, fetchBTCReturnDisSuccess, fetchBTCReturnDisError} = props;
        fetchData(api.getBTCReturnDistribution, fetchBTCReturnDisSuccess, fetchBTCReturnDisError, startDate);
    }

    const {isLoading, data: {bins, frecuencies}} = props;
    if (isLoading) {
        return <Loader/>
    }
    return (
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'The distribution of BTC returns'}/>
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
                        type: 'bar',
                        x: bins,
                        name: 'BTC Return Histogram',
                        y: frecuencies,
                        marker: {
                            color: '#a78814',
                        }
                    }
                ]}
                layout={viewSettingsLayout('BTC Return Distribution', false, {l: 30, r: 30, t: 95, b: 30}, '', '', 0.2, 'Percentile', 'Frequency' ).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig().config}
            />
            <DateFilterRange info={true} onSubmit={onChangeFilter} periods={periods} defaultPeriod={5}/>
        </Fragment>
    )
}

const mapStateToProps = ({btcReturnDisReducer}) => {
    return btcReturnDisReducer;
};

const mapDispatchToProps = {
    fetchBTCReturnDisSuccess,
    fetchBTCReturnDisError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(BTCReturnHistogram));
