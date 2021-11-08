import React, {useEffect, useState} from 'react';
import WithApiService from '../../hoc/WithApiService';
import {connect} from 'react-redux';
import {
    fetchPerformanceBenchmarkError,
    fetchPerformanceBenchmarkSuccess
} from 'Store/charts/performanceBenchmark/actions';
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import information from "Images/icons/information.svg";
import {ReactSVG} from "react-svg";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";


const infoArr = [
    'Total Returns represent the aggregate yield in USD earned via trading Zero Theorem',
    'Average Daily Return represent the average daily yield in percentage earned via trading Zero Theorem forecasts',
    'Beta represents the relationship of Zero Theorem return compared to the return of the SNP 500 Index.',
    'Benchmark Returns represents the return if one buy’s and hold’s BTC for the duration of backtest.',
    'Max Drawdown represents the maximum loss experienced via trading the Zero Theorem forecasts',
    'Return Decay represents the quality of monthly return compared to the returned experienced over the previous months.',
    'Max Drawdown Days represents the quantity of days consecutively where Zero Theorem Forecasts have experienced a Loss',
    'Mean Lake Ratio represents the average ratio between the depth of the draw down relative to the duration',
    'Daily Sharpe represents the ratio of average return per unit of volatility',
    'Gain to Pain Ratio represents the absolute ratio of the sum of monthly profits relative to the monthly losses',
    'Max Lake Ratio represents the maximum ratio between the depth of the draw down relative to the duration',
    'Annual Sharpe is Daily Sharpe ratio annualized',
    'Gain to Pain Ratio % represents the percentage ratio of the sum of monthly profits relative to the monthly losses',
    'Kelly Allocation represents the optimal asset allocation percentage as defined by the Kelly Criteria',
    'Kelly Leverage represents the optimal leverage as defined by the Kelly Criteria',
    'Alpha represents the ratio of Zero Theorem return relative to the return of a standard buy and hold strategy. Here Alpha > 1 indicates that Zero Theorem outperforms a Buy and Hold strategy',
    'Annual Sortino is Daily Sortino ratio annualized',
    'Daily Sortino represents the ratio of average return per unit of downside volatility'
]

const Assumptions2 = (props) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const {api, fetchPerformanceBenchmarkSuccess, fetchPerformanceBenchmarkError, data} = props;

        if (isEmpty(data)) {
            api.getPerformanceBenchmark()
                .then(metricData => fetchPerformanceBenchmarkSuccess(metricData))
                .catch(error => fetchPerformanceBenchmarkError(error));
        }
    }, [])


    const {isLoading, data} = props;

    if (isLoading || isEmpty(data)) {
        return <LoadingIndicator/>
    }

    return (
        <div className="stat">
            <div className="stat-body row">
                <InfoModalGraph show={show} onPress={() => setShow(!show)}
                                text={text} style={{backgroundColor: '#1f1c18'}}/>
                <div className="stat-list d-flex w-100 justify-content-between mb-4 mt-3 info-block">
                    <div className="row col-lg-2">
                        <div>
                            Total Returns:
                            <div className="stat-yellow">{data.stats.total_returns}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[0]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Benchmark Returns:
                            <div className="stat-yellow">{data.stats.benchmark_returns}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[3]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Daily Sharpe:
                            <div className="stat-yellow">{data.stats.daily_sharpe}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[8]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Daily Sortino:
                            <div className="stat-yellow">{data.stats.daily_sortino}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[17]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',
                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Annual Sharpe:
                            <div className="stat-yellow">{data.stats.annual_sharpe}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[11]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Annual Sortino:
                            <div className="stat-yellow">{data.stats.annual_sortino}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[16]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                </div>
                <div className="stat-list d-flex w-100 justify-content-between mb-4 info-block">
                    <div className="row col-lg-2">
                        <div>
                            Avg Daily Return:
                            <div className="stat-yellow">{data.stats.avg_daily_return.toFixed(2)}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[1]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Max Drawdown:
                            <div className="stat-yellow">{data.stats.max_draw_down}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[4]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Max Drawdown Days:
                            <div className="stat-yellow">{data.stats.maxPeriodsInDradown}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[6]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Gain to Pain Ratio:
                            <div className="stat-yellow">{data.stats.absolute_gain_to_pain_ratio}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[9]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Gain To Pain Ratio %
                            <div className="stat-yellow">{data.stats.percentage_gain_to_pain_ratio}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[12]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Alpha:
                            <div className="stat-yellow">{data.stats.alpha.toFixed(2)}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[15]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                </div>
                <div className="stat-list d-flex w-100 justify-content-between info-block">
                    <div className="row col-lg-2">
                        <div>
                            Beta:
                            <div className="stat-yellow">{data.stats.beta.toFixed(2)}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[2]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Return Decay:
                            <div className="stat-yellow">{data.stats.return_decay}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[5]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Mean Lake Ratio:
                            <div className="stat-yellow">{data.stats.mean_lake_ratio}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[7]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Max Lake Ratio:
                            <div className="stat-yellow">{data.stats.max_lake_ratio}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[10]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Kelly Allocation:
                            <div className="stat-yellow">{data.stats.KellyCriterion.toFixed(2)}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[13]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                    <div className="row col-lg-2">
                        <div>
                            Kelly Leverage:
                            <div className="stat-yellow">{data.stats.KellyLeverage.toFixed(2)}</div>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={information}
                            wrapper="div"
                            onClick={() => {
                                setText(infoArr[14]);
                                setShow(true);
                            }}
                            style={{
                                marginLeft: '1rem',
                                zIndex: 0,
                                width: '1.4rem',
                                fill: '#ccc',

                                display: 'flex'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = ({performanceBenchmarkReducer}) => {
    return performanceBenchmarkReducer;
};

const mapDispatchToProps = {
    fetchPerformanceBenchmarkSuccess,
    fetchPerformanceBenchmarkError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(Assumptions2));
