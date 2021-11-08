import React, {useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {
    fetchPerformanceBenchmarkError,
    fetchPerformanceBenchmarkSuccess,
} from "Store/charts/performanceBenchmark/actions";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Select from "react-select";
import { useSelector } from "react-redux";
import "./assumptions.scss";
import {Link} from "react-router-dom";

const optionsStartDate = [
    {value: "Last 7 Days", label: "Last 7 Days"},
    {value: "Last 30 Days", label: "Last 30 Days"},
    {value: "Last 90 Days", label: "Last 90 Days"},
    {value: "Last 180 Days", label: "Last 180 Days"},
    {value: "Last 360 Days", label: "Last 360 Days"},
];

const optionsAllocation = [
    {value: "20", label: "20"},
    {value: "40", label: "40"},
    {value: "60", label: "60"},
    {value: "80", label: "80"},
    {value: "100", label: "100"},
];

const optionsStopLoss = [
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
    {value: "5", label: "5"},
];

const optionsTakeProfit = [
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
    {value: "5", label: "5"},
];

const optionsSlippage = [
    {value: "0.1", label: "0.1"},
    {value: "0.2", label: "0.2"},
    {value: "0.3", label: "0.3"},
    {value: "0.4", label: "0.4"},
    {value: "0.5", label: "0.5"},
];

const optionsTimeStop = [
    {value: "4", label: "4"},
    {value: "8", label: "8"},
    {value: "12", label: "12"},
    {value: "16", label: "16"},
    {value: "20", label: "20"},
    {value: "24", label: "24"},
];

const Assumptions = () => {
    const [stopLoss, setStopLoss] = useState();
    const [takeProfit, setTakeProfit] = useState();
    const [startDate, setStartDate] = useState();
    const [modelType, setModelType] = useState();

    const hours = useSelector((item) => item.hoursReducer.hours);

    // const { api, fetchPerformanceBenchmarkSuccess, fetchPerformanceBenchmarkError, data } = this.props;
    //
    // if(isEmpty(data)) {
    //     api.getPerformanceBenchmark()
    //         .then(metricData => fetchPerformanceBenchmarkSuccess(metricData))
    //         .catch(error => fetchPerformanceBenchmarkError(error));
    // }

    // const { isLoading, data } = this.props;
    //
    // if(isLoading || isEmpty(data)) {
    //     return <LoadingIndicator />
    // }

    return (
        <div className="d-flex stat text-center assumptions">
            {/*<div className="white-block">*/}
            <div
                className={`align-items-center mt-3 row-block ${
                    screen.width > 540 ? "col-lg-8" : "flex-column"
                }`}
            >
                <div className="d-flex col-lg-12 mb-3">
                    <div className="col-lg">
                        <Select
                            value={startDate}
                            onChange={(e) => setStartDate(e)}
                            options={optionsStartDate}
                            className="select-white"
                        />
                        <div className="my-1">
                            Select Start Date
                        </div>
                    </div>
                    <div className="col-lg">
                        <Select
                            value={modelType}
                            onChange={(e) => setModelType(e)}
                            options={optionsAllocation}
                            className="select-white"
                        />
                        <div className="my-1">
                            Select
                            Allocation
                        </div>
                    </div>
                    <div className="col-lg">
                        <Select
                            value={modelType}
                            onChange={(e) => setModelType(e)}
                            options={optionsSlippage}
                            className="select-white"
                        />
                        <div className="my-1">
                            Select
                            Slippage/Fee
                        </div>
                    </div>
                </div>
                <div className="d-flex col-lg-12">
                    <div className="col-lg">
                        <Select
                            value={stopLoss}
                            onChange={(e) => setStopLoss(e)}
                            options={optionsStopLoss}
                            className="select-white"
                        />
                        <div className="my-1">
                            Select Stop Loss (%)
                        </div>
                    </div>
                    <div className="col-lg">
                        <Select
                            value={takeProfit}
                            onChange={(e) => setTakeProfit(e)}
                            options={optionsTakeProfit}
                            className="select-white"
                        />
                        <div className="my-1">
                            Select Take Profit (%)
                        </div>
                    </div>
                    <div className="col-lg">
                        <Select
                            value={modelType}
                            onChange={(e) => setModelType(e)}
                            options={optionsTimeStop}
                            className="select-white"
                        />
                        <div className="my-1">
                            Select
                            Time Stop
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="blue">
                    <Link to="/research" className="w-100">
                        GO TO USER GUIDE
                    </Link>
                </div>
                <div className="col-lg-12">
                    <div className="my-3">
                        <button className="btn lg calculate" type="submit">
                            <span>CALCULATE</span>
                        </button>
                    </div>
                </div>
                <p className="description text-center">
                    *Assumptions: $100,000 USD Initial Capital
                    & No Capital Compounding{" "}
                </p>
            </div>
            {/*</div>*/}
        </div>
    );
};

const mapStateToProps = ({performanceBenchmarkReducer}) => {
    return performanceBenchmarkReducer;
};

const mapDispatchToProps = {
    fetchPerformanceBenchmarkSuccess,
    fetchPerformanceBenchmarkError,
};

export default WithApiService()(
    connect(mapStateToProps, mapDispatchToProps)(Assumptions)
);
