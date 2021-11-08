import React, {Fragment, useEffect, useState} from 'react'
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "Components/globalFunctions/globalFunctions";
import {fetchExchangeInOutFlowSuccess, fetchExchangeInOutFlowError} from "Store/charts/exchangeInOutFlow/actions";
import WithApiService from "Components/hoc/WithApiService";
import {connect} from "react-redux";
import {fetchData} from "Components/globalFunctions/fetchData";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const periods = [
    {
        id: 'day',
        title: '1 Days',
        day: 1,
        isActive: true,
    },
    {
        id: 'week',
        title: 'Week',
        day: 7,
        isActive: false
    },
    {
        id: 'month',
        title: 'Month',
        day: 30,
        isActive: false
    }
];

const ExchangeInflows = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const { api, fetchExchangeInOutFlowSuccess, fetchExchangeInOutFlowError, data } = props;
        if(isEmpty(data)) {
            fetchData(api.getExchangeInOutFlow, fetchExchangeInOutFlowSuccess, fetchExchangeInOutFlowError, 1);
        }
    }, []);

    const onChangeFilter = (startDate) => {
        const { api, fetchExchangeInOutFlowSuccess, fetchExchangeInOutFlowError } = props;
        fetchData(api.getExchangeInOutFlow, fetchExchangeInOutFlowSuccess, fetchExchangeInOutFlowError, startDate);
    }

    const {isLoading, data} = props;

    if (isLoading) {
        return <Loader/>
    }

    return(
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'Aggregate deposits and withdrawals\n' +
                            'tracked from a vast range of BTC cold\n' +
                            'and hot wallets associated to the\n' +
                            'major exchanges world wide'}/>
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
                        name: 'Outflow',
                        y: data.data.exchange_inflow.slice(data.data.exchange_inflow.length-10),
                        x: data.data.date.slice(data.data.date.length-10),
                        type: 'bar',
                        marker: {
                            color: '#4A4A4A',
                        }
                    },
                    {
                        name: 'Inflow',
                        y: data.data.exchange_outflow.slice(data.data.exchange_outflow.length-10),
                        x: data.data.date.slice(data.data.date.length-10),
                        type: 'bar',
                        marker: {
                            color: '#FFC600',
                        }
                    }
                ]}
                layout={viewSettingsLayout('Exchange Inflows/Outflows', true, {l: 30, r: 30, t: 80, b: 30}, '', '', 0.5, 'Date', 'Percentage', 'stack', 'percent', false, false).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig().config}
            />
            <DateFilter onSubmit={onChangeFilter} info={true}/>
        </Fragment>
    )

};


const mapStateToProps = ({exchangeInOutFlowReducer}) => {
    return exchangeInOutFlowReducer;
};

const mapDispatchToProps = {
    fetchExchangeInOutFlowSuccess,
    fetchExchangeInOutFlowError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ExchangeInflows));
