import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { useOnClickOutside } from "../globalFunctions/globalFunctions";
import {transformDateFormat} from "../globalFunctions/transformDateFormat";
import {lastMonths, lastWeek, lastYear, _today} from "../globalFunctions/detectDate";

const btnClasses = 'input-label dropdown-btn semi-bold';

const DateFilterArray = ({ onSubmit, defaultStartDate, info, defaultFinishedDate, defaultPeriod, periods }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [period, setPeriod] = useState(periods[defaultPeriod] || periods[0]);
    const [selectedPeriod, setSelectedPeriod] = useState(period);
    const [startDate, setStartDate] = useState(defaultStartDate || lastWeek);
    const [finishedDate, setFinishedDate] = useState(defaultFinishedDate || _today);
    const [finalDates, setFinalDates] = useState({
       startDate: defaultStartDate || lastWeek(),
       finishedDate: defaultFinishedDate || _today
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

    const getRange = (el, i) => {
        setSelectedPeriod({...periods[i], isActive: true});
        setStartDate(el.day);
        setFinishedDate(_today);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPeriod(selectedPeriod);
        onSubmit(startDate, transformDateFormat(finishedDate));
        setIsOpen(false);
        setFinalDates({startDate: startDate, finishedDate: finishedDate});
    };

    return(
        <div className={`dashboard-box-filter ${info ? 'positionRight' : ''}`} ref={dropdownRef}>
            <div className={`dropdown ${isOpen ? 'is-active': ''}`}>
                <div className="dropdown-header" onClick={handleToggleSelect}>
                    <span className="dropdown-header-title semi-bold">{selectedPeriod.title}</span>
                </div>
                <div className="dropdown-select">
                    <form onSubmit={handleSubmit}>
                        <div className="dropdown-select-list">
                            {periods.map((item, index) => {
                                return <div className="input-container" key={index}>
                                <span
                                    className={`${btnClasses} ${selectedPeriod.id === item.id ? 'active' : ''}`}
                                    onClick={() => getRange(item, index)}>{periods[index].title}</span>
                                </div>
                            })}
                            <div className="dropdown-action">
                                <button className="btn sm">Apply</button>
                                <span className="btn sm default" onClick={handleCloseSelect}>Cancel</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default DateFilterArray;

DatePicker.propTypes = {
    onSubmit: PropTypes.func,
    defaultStartDate: PropTypes.string,
    defaultFinishedDate: PropTypes.string,
    defaultPeriod: PropTypes.string
};
