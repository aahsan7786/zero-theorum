import React, {useEffect, useState, Fragment} from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {fetchHurstExponentError, fetchHurstExponentSuccess} from '../../../store/charts/hurstExponent/actions';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";
import {fetchData} from "Components/globalFunctions/fetchData";
import {transformDateFormat} from "Components/globalFunctions/transformDateFormat";
import {lastWeek} from "Components/globalFunctions/detectDate";
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

const HurstExponent = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const {api, fetchHurstExponentSuccess, fetchHurstExponentError, data} = props;

        if (isEmpty(data)) {
            fetchData(api.getHurstExponent, fetchHurstExponentSuccess, fetchHurstExponentError, transformDateFormat(lastWeek()));
        }
    }, []);


    const onChangeFilter = (startDate) => {
        const {api, fetchHurstExponentSuccess, fetchHurstExponentError} = props;
        fetchData(api.getHurstExponent, fetchHurstExponentSuccess, fetchHurstExponentError, startDate);
    }

    const {isLoading, data: {date, val}} = props;

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'Hurst Exponent values from 0 to 0.5\n' +
                            'indicate anti-persistent behaviour\n' +
                            'hence price series is mean reverting.\n' +
                            'Hurst Exponent values from 0.5 to 1\n' +
                            'indicate persistent behaviour hence\n' +
                            'price series is trending.'}/>
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
                        y: val,
                        mode: 'lines',
                        name: '7d',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: '#FFC600'
                            // color: '#FFC600'
                        }
                    },
                ]}
                layout={viewSettingsLayout('Hurst Exponent', false, {
                    l: 40,
                    r: 30,
                    t: 95,
                    b: 30
                }, '', '', 0.5, 'Date', 'Hurst Exponent', 'stack', 'percent', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
            <DateFilter info={true} onSubmit={onChangeFilter}/>
        </Fragment>
    )
};


const mapStateToProps = ({hurstExponentReducer}) => {
    return hurstExponentReducer;
};

const mapDispatchToProps = {
    fetchHurstExponentSuccess,
    fetchHurstExponentError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(HurstExponent));
