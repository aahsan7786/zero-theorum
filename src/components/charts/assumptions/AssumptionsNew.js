import React, {useState} from "react";
import WithApiService from "../../hoc/WithApiService";
import {connect} from "react-redux";
import {
  fetchPerformanceBenchmarkError,
  fetchPerformanceBenchmarkSuccess,
} from "Store/charts/performanceBenchmark/actions";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import InputDropdown from "../../common/InputDropdown";
import "./assumptions.scss";
const optionsStartDate = [
  {value: "Last 7 Days", name: "Last 7 Days"},
  {value: "Last 30 Days", name: "Last 30 Days"},
  {value: "Last 90 Days", name: "Last 90 Days"},
  {value: "Last 180 Days", name: "Last 180 Days"},
  {value: "Last 360 Days", name: "Last 360 Days"},
];

const optionsAllocation = [
  {value: "20", name: "20"},
  {value: "40", name: "40"},
  {value: "60", name: "60"},
  {value: "80", name: "80"},
  {value: "100", name: "100"},
];

const optionsStopLoss = [
  {value: "1", name: "1"},
  {value: "2", name: "2"},
  {value: "3", name: "3"},
  {value: "4", name: "4"},
  {value: "5", name: "5"},
];

const optionsTakeProfit = [
  {value: "1", name: "1"},
  {value: "2", name: "2"},
  {value: "3", name: "3"},
  {value: "4", name: "4"},
  {value: "5", name: "5"},
];

const optionsSlippage = [
  {value: "0.1", name: "0.1"},
  {value: "0.2", name: "0.2"},
  {value: "0.3", name: "0.3"},
  {value: "0.4", name: "0.4"},
  {value: "0.5", name: "0.5"},
];

const optionsTimeStop = [
  {value: "4", name: "4"},
  {value: "8", name: "8"},
  {value: "12", name: "12"},
  {value: "16", name: "16"},
  {value: "20", name: "20"},
  {value: "24", name: "24"},
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
  const ddWidth = "200px";
  const ddHeight = "40px";
  return (
    <div className="assumptionNew">
      <div className="ddGrid">
        <div className="col-lg">
          <InputDropdown
            width={ddWidth}
            height={ddHeight}
            onChange={(e) => setStartDate(e)}
            value={startDate ? startDate : "Select Start Date"}
            list={optionsStartDate}></InputDropdown>
        </div>
        <div className="col-lg">
          <InputDropdown
            width={ddWidth}
            height={ddHeight}
            value={modelType ? modelType : "Select Allocation"}
            onChange={(e) => setModelType(e)}
            list={optionsAllocation}
          />
        </div>
        <div className="col-lg">
          <InputDropdown
            width={ddWidth}
            height={ddHeight}
            value={modelType ? modelType : "Select Slippage/Fee"}
            onChange={(e) => setModelType(e)}
            list={optionsSlippage}
          />
        </div>
        <div className="col-lg">
          <InputDropdown
            width={ddWidth}
            height={ddHeight}
            value={stopLoss ? stopLoss : "Select Stol Loss (%)"}
            onChange={(e) => setStopLoss(e)}
            list={optionsStopLoss}
          />
        </div>
        <div className="col-lg">
          <InputDropdown
            width={ddWidth}
            height={ddHeight}
            value={takeProfit ? takeProfit : "Select Take Profit (%)"}
            onChange={(e) => setTakeProfit(e)}
            list={optionsTakeProfit}
          />
        </div>
        <div className="col-lg">
          <InputDropdown
            width={ddWidth}
            height={ddHeight}
            value={modelType ? modelType : "Select Time Stop"}
            onChange={(e) => setModelType(e)}
            list={optionsTimeStop}
          />
        </div>
      </div>
      <div className="btnGrid">
        <div className="gotolink">
          <Link to="/resources" className="w-100">
            GO TO USER GUIDE
          </Link>
        </div>
        <div className="">
          <button className="btn calculate" type="submit">
            <span>CALCULATE</span>
          </button>
        </div>
        <p className="description text-center">
          *Assumptions: $100,000 USD Initial Capital & No Capital Compounding{" "}
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
