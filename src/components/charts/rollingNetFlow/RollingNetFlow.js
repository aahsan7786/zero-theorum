import React, {Component, Fragment, useEffect, useState} from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {fetchRollingNetFlowSuccess, fetchRollingNetFlowError} from '../../../store/charts/rollingNetFlow/actions';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import {fetchData} from "Components/globalFunctions/fetchData";
import {transformDateFormat} from "Components/globalFunctions/transformDateFormat";
import {lastWeek} from "Components/globalFunctions/detectDate";
import DateFilter from "Components/date-filter/DateFilter";


const RollingNetFlow = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const { api, fetchRollingNetFlowSuccess, fetchRollingNetFlowError, data } = props;
        if(isEmpty(data)) {
            fetchData(api.getRollingNetFlow, fetchRollingNetFlowSuccess, fetchRollingNetFlowError, transformDateFormat(lastWeek()));
        }
    }, [])

    const onChangeFilter = (startDate) => {
        const { api, fetchRollingNetFlowSuccess, fetchRollingNetFlowError } = props;
        fetchData(api.getRollingNetFlow, fetchRollingNetFlowSuccess, fetchRollingNetFlowError, startDate);
    }


    const {isLoading, data: {date, day_7, day_14, day_30}} = props;

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'Calculating the Net aggregate BTC\n' +
                            'transfers from Exchange\n' +
                            'Inflow/Outflow. Here rolling\n' +
                            'averages of 7 days, 14 days and 30\n' +
                            'days are presented'}/>
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
                        x: date,
                        y: day_7,
                        mode: 'lines',
                        name: '7d',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: '#0F58B3'
                            // color: '#FFC600'
                        }
                    },
                    {
                        x: date,
                        y: day_14,
                        mode: 'lines',
                        name: '14d',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: 'yellow'
                            // color: '#FFC600'
                        }
                    },
                    {
                        x: date,
                        y: day_30,
                        mode: 'lines',
                        name: '30d',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: 'red'
                            // color: '#FFC600'
                        }
                    }
                ]}
                layout={viewSettingsLayout('Rolling Exchange Netflow', true, {
                    l: 40,
                    r: 30,
                    t: 95,
                    b: 30
                }, '', '', 0.5, 'Date', 'Net Quantity of BTC Transferred', 'stack', 'percent', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
            <DateFilter onSubmit={onChangeFilter} info={true} />
        </Fragment>
    )
}


const mapStateToProps = ({rollingNetFlowReducer}) => {
    return rollingNetFlowReducer;
};

const mapDispatchToProps = {
    fetchRollingNetFlowSuccess,
    fetchRollingNetFlowError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(RollingNetFlow));
