import React, {Component, Fragment, useEffect, useState} from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "Components/globalFunctions/globalFunctions";
import {fetchData} from "Components/globalFunctions/fetchData";
import {fetchHodlerDistributionSuccess, fetchHodlerDistributionError} from "Store/charts/hodlerDistribution/actions";
import WithApiService from "Components/hoc/WithApiService";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import DateFilterRange from "Components/date-filter-range/DateFilterRange";
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
];

    const EfficiencyIndex = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const { api, fetchHodlerDistributionSuccess, fetchHodlerDistributionError, data } = props;
        if(isEmpty(data)) {
            fetchData(api.getHodlerDistribution, fetchHodlerDistributionSuccess, fetchHodlerDistributionError, 7);
        }
    }, [])


    const onChangeFilter = (startDate) => {
        const { api, fetchHodlerDistributionSuccess, fetchHodlerDistributionError } = props;
        fetchData(api.getHodlerDistribution, fetchHodlerDistributionSuccess, fetchHodlerDistributionError, startDate);
    }

        const { isLoading, data} = props;

        if(isLoading) {
            return <Loader />
        }


        return(
            <Fragment>
                <InfoModalGraph show={show} onPress={() => setShow(!show)}
                                text={'Minimum Cost of Production is\n' +
                                'calculated via the Cambridge Bitcoin\n' +
                                'Electricity Consumption Index, the\n' +
                                'minimum estimate of electricity cost\n' +
                                'and live block reward rates.\n' +
                                'All Prices are in USD'}/>
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
                            name: 'Today’s Value',
                            y: data.data.first,
                            x: data.data.headers,
                            marker: {
                                color: '#0F58B3',
                            }
                        },
                        {
                            type: 'bar',
                            name: 'Last 7 Days Value',
                            y: data.data.last,
                            x: data.data.headers,
                            marker: {
                                color: 'red',
                            }
                        },
                    ]}
                    layout={viewSettingsLayout('Hodler Distribution', true, {l: 40, r: 30, t: 95, b: 30}, '', '', 0.5, 'Balance of BTC Held In Wallet', 'Percentage of Coins ', 'group', '', true, true).layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig(true).config}
                />
                <DateFilterRange info={true} onSubmit={onChangeFilter} periods={periods} defaultPeriod={0}/>
            </Fragment>
        )
}

const mapStateToProps = ({ hodlerDistributionReducer }) => {
    return hodlerDistributionReducer;
};

const mapDispatchToProps = {
    fetchHodlerDistributionSuccess,
    fetchHodlerDistributionError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(EfficiencyIndex));
