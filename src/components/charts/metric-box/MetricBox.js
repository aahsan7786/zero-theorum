import React, {Component, Fragment, useState} from 'react';
import './metric-box.scss';
import WithApiService from '../../hoc/WithApiService';
import {connect} from 'react-redux';
import {fetchMetricSuccess, fetchMetricError} from 'Store/metric-box/actions';
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import LocalStorage from "../../localStorage/LocalStorage";
import InfoComponent from "Components/info-component/infoComponent";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";

const MetricBox = (props) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const {isLoading, data} = props;

    if (isLoading || isEmpty(data)) {
        return <LoadingIndicator/>
    }

    return (
        <div className="stat">
            <p className="dashboard-box-title yellow"><b>PERFORMANCE METRICS</b></p>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={text} style={{backgroundColor: '#1f1c18'}}/>
            <div className="stat-body">
                <div className="stat-list __fullFour">
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">RMSE:</p>
                            <div className="stat-value">{data.rmse.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('RMSE: Root Mean Squared Error,\n' +
                                        'describes the difference between\n' +
                                        'the values predicted compared to\n' +
                                        'those experienced');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">TPR:</p>
                            <div className="stat-value">{data.tpr.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('TPR: True Positive Rate, describes\n' +
                                        'the accuracy of forecast to\n' +
                                        'predict positive Price moves');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem',zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">NPV:</p>
                            <div className="stat-value">{data.npv.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('NPV: Negative Predicted Value,\n' +
                                        'describes the proportion of\n' +
                                        'negative results (that are false\n' +
                                        'positive and false negative) of\n' +
                                        'forecasts');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">F1:</p>
                            <div className="stat-value">{data.f1.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('F1: F-Measure, describes the\n' +
                                        'accuracy of forecasts based on\n' +
                                        'precision and sensitivity');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">MAPE:</p>
                            <div className="stat-value">{data.mape.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('MAPE: Mean Absolute\n' +
                                        'Percentage Error, describes the\n' +
                                        'absolute percentage difference\n' +
                                        'between the values predicted\n' +
                                        'compared to those experienced');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">TNR:</p>
                            <div className="stat-value">{data.tnr.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('TNR: True Negative Rate,\n' +
                                        'describes the accuracy of forecast\n' +
                                        'to predict negative Price moves');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">PT:</p>
                            <div className="stat-value">{data.pt.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('PT: Prevalence Threshold,\n' +
                                        'describes the level in which PPV\n' +
                                        'declines sharply and hence NPV\n' +
                                        'increases rapidly ');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">ACC:</p>
                            <div className="stat-value">{data.acc.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('ACC: Accuracy, describes the\n' +
                                        'specific accuracy of both positive\n' +
                                        'and negative forecast');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">MADS:</p>
                            <div className="stat-value">{data.mads.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('MADS: Mean Absolute Direction\n' +
                                        'Score, describes the directional\n' +
                                        'accuracy of forecasts');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">PPV:</p>
                            <div className="stat-value">{data.ppv.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('PPV: Positive Predicted Value,\n' +
                                        'describes the proportion of\n' +
                                        'positive results (that are true\n' +
                                        'positive and true negative) of\n' +
                                        'forecasts');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">TS:</p>
                            <div className="stat-value">{data.ts.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('TS: Threat Score, describes the\n' +
                                        'quantity of True values relative to\n' +
                                        'all forecasts');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">BA:</p>
                            <div className="stat-value">{data.ba.toFixed(2)}</div>
                            <ReactSVG
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                    setText('BA: Balanced Accuracy, describes\n' +
                                        'the average accuracy of both\n' +
                                        'positive and negative forecast');
                                    setShow(true);
                                }}
                                style={{marginLeft: '1rem', zIndex: 0, width: '1.4rem', fill: '#ccc', right: '2rem'}}
                            />
                        </div>
                    </div>
                </div>
                <div className="stat-list">

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({metricReducer}) => {
    return metricReducer;
};

const mapDispatchToProps = {
    fetchMetricSuccess,
    fetchMetricError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(MetricBox));
