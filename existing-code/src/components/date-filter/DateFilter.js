import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { useOnClickOutside } from "../globalFunctions/globalFunctions";
import { transformDateFormat } from "../globalFunctions/transformDateFormat";
import {
  lastMonths,
  lastWeek,
  lastQuarterYear,
  lastHalfYear,
  lastYear,
  _today,
} from "../globalFunctions/detectDate";

const periods = [
  {
    id: "week",
    title: "Last Week",
    isActive: true,
  },
  {
    id: "month",
    title: "Last Month",
    isActive: false,
  },
  {
    id: "quarter",
    title: "Last Quarter",
    isActive: false,
  },
  {
    id: "half_year",
    title: "Last Half Year",
    isActive: false,
  },
  {
    id: "year",
    title: "Last Year",
    isActive: false,
  },
];
const btnClasses = "input-label dropdown-btn semi-bold";

const DateFilter = ({
  onSubmit,
  defaultStartDate,
  defaultFinishedDate,
  defaultPeriod,
  info = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [period, setPeriod] = useState(periods[defaultPeriod] || periods[0]);
  const [selectedPeriod, setSelectedPeriod] = useState(period);
  const [startDate, setStartDate] = useState(defaultStartDate || lastWeek);
  const [finishedDate, setFinishedDate] = useState(
    defaultFinishedDate || _today
  );
  const [finalDates, setFinalDates] = useState({
    startDate: defaultStartDate || lastWeek(),
    finishedDate: defaultFinishedDate || _today,
  });
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => handleCloseSelect());

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSelect = () => {
    setIsOpen(false);
    setSelectedPeriod(period);
    setStartDate(finalDates.startDate);
    setFinishedDate(finalDates.finishedDate);
  };

  const getLastWeek = () => {
    setSelectedPeriod({ ...periods[0], isActive: true });
    setStartDate(lastWeek());
    setFinishedDate(_today);
  };

  const getLastMonths = (count) => {
    let period = null;
    if (count === 1) {
      period = { ...periods[1], isActive: true };
    }
    setStartDate(lastMonths(count));
    setFinishedDate(_today);
    setSelectedPeriod(period);
  };

  const getLastHalfYear = () => {
    setSelectedPeriod({ ...periods[2], isActive: true });
    setStartDate(lastQuarterYear());
    setFinishedDate(_today);
  };

  const getLastQuarterYear = () => {
    setSelectedPeriod({ ...periods[3], isActive: true });
    setStartDate(lastHalfYear());
    setFinishedDate(_today);
  };

  const getLastYear = () => {
    setSelectedPeriod({ ...periods[4], isActive: true });
    setStartDate(lastYear());
    setFinishedDate(_today);
  };

  const onChangeSetStartDate = (date) => {
    setStartDate(date);
    setSelectedPeriod({
      ...period,
      id: "",
      title: `From ${transformDateFormat(date, ".")} to ${transformDateFormat(
        finishedDate,
        "."
      )}`,
    });
  };

  const onChangeSetFinishedDate = (date) => {
    setFinishedDate(date);
    setSelectedPeriod({
      ...period,
      id: "",
      title: `From ${transformDateFormat(
        startDate,
        "."
      )} to ${transformDateFormat(date, ".")}`,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPeriod(selectedPeriod);
    onSubmit(transformDateFormat(startDate), transformDateFormat(finishedDate));
    setIsOpen(false);
    setFinalDates({ startDate: startDate, finishedDate: finishedDate });
  };

  return (
    <div
      className={`dashboard-box-filter ${info ? "positionRight" : ""}`}
      ref={dropdownRef}
    >
      <div className={`dropdown ${isOpen ? "is-active" : ""}`}>
        <div className="dropdown-header" onClick={handleToggleSelect}>
          <span className="dropdown-header-title semi-bold">
            {selectedPeriod.title}
          </span>
        </div>
        <div className="dropdown-select">
          <form onSubmit={handleSubmit}>
            <div className="dropdown-select-list">
              <div className="input-container">
                <span
                  className={`${btnClasses} ${
                    selectedPeriod.id === "week" ? "active" : ""
                  }`}
                  onClick={() => getLastWeek()}
                >
                  {periods[0].title}
                </span>
              </div>
              <div className="input-container">
                <span
                  className={`${btnClasses} ${
                    selectedPeriod.id === "month" ? "active" : ""
                  }`}
                  onClick={() => getLastMonths(1)}
                >
                  {periods[1].title}
                </span>
              </div>
              <div className="input-container">
                <span
                  className={`${btnClasses} ${
                    selectedPeriod.id === "quarter" ? "active" : ""
                  }`}
                  onClick={() => getLastHalfYear(3)}
                >
                  {periods[2].title}
                </span>
              </div>
              <div className="input-container">
                <span
                  className={`${btnClasses} ${
                    selectedPeriod.id === "half_year" ? "active" : ""
                  }`}
                  onClick={() => getLastQuarterYear(6)}
                >
                  {periods[3].title}
                </span>
              </div>
              <div className="input-container">
                <span
                  className={`${btnClasses} ${
                    selectedPeriod.id === "year" ? "active" : ""
                  }`}
                  onClick={() => getLastYear()}
                >
                  {periods[4].title}
                </span>
              </div>
              <hr className="hr dropdown-divider" />
              <div className="input-container">
                <span className="input-container-title">From</span>
                <DatePicker
                  type="text"
                  className="input sm"
                  selected={startDate}
                  dateFormat="MM.dd.yyyy"
                  onChange={(date) => onChangeSetStartDate(date)}
                />
              </div>
              <div className="input-container">
                <span className="input-container-title">To</span>
                <DatePicker
                  className="input sm"
                  selected={finishedDate}
                  dateFormat="MM.dd.yyyy"
                  onChange={(date) => onChangeSetFinishedDate(date)}
                />
              </div>
              <div className="dropdown-action">
                <button className="btn sm">Apply</button>
                <span className="btn sm default" onClick={handleCloseSelect}>
                  Cancel
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DateFilter;

DatePicker.propTypes = {
  onSubmit: PropTypes.func,
  defaultStartDate: PropTypes.string,
  defaultFinishedDate: PropTypes.string,
  defaultPeriod: PropTypes.string,
};
