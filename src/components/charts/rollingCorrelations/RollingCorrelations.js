import React, {useEffect, useState, Fragment} from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {fetchRollingCorrelationsSuccess, fetchRollingCorrelationsError} from 'Store/charts/rollingCorrelations/actions';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import {fetchData} from "Components/globalFunctions/fetchData";
import DateFilterArray from "Components/date-filter-array/DateFilterArray";
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

const RollingCorrelations = (props) => {
    const [range, setRange] = useState(7);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const {api, fetchRollingCorrelationsSuccess, fetchRollingCorrelationsError, data} = props;
        if (isEmpty(data)) {
            fetchData(api.getRollingCorrelations, fetchRollingCorrelationsSuccess, fetchRollingCorrelationsError);
        }
    }, []);


    const {isLoading, data, type} = props;

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            {/*{date.length}*/}
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'When 𝛼\n' +
                            '′ > 0, 𝑃𝐵𝑇𝐶\n' +
                            '′\n' +
                            'is a decreasing function\n' +
                            'of 𝛼 and when 𝛼\n' +
                            '′ < 0, 𝑃𝐵𝑇𝐶\n' +
                            '′\n' +
                            'is a Increasing\n' +
                            'function of 𝛼'}/>
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
            <Plot
                data={[
                    {
                        x: props.data.date.slice(-range),
                        y: data[type],
                        mode: 'lines',
                        name: props.type,
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: '#FFC600'
                            // color: '#FFC600'
                        }
                    }
                ]}
                layout={viewSettingsLayout('Rolling Correlations', true, {
                    l: 40,
                    r: 30,
                    t: 95,
                    b: 30
                }, '', '', 0.5, '', '', 'stack', 'percent', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
            <DateFilterArray info={true} onSubmit={(startDate) => setRange(startDate)} periods={periods}/>
        </Fragment>
    )
};


const mapStateToProps = ({rollingCorrelationsReducer}) => {
    return rollingCorrelationsReducer;
};

const mapDispatchToProps = {
    fetchRollingCorrelationsSuccess,
    fetchRollingCorrelationsError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(RollingCorrelations));
