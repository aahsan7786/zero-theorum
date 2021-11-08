import React from 'react';
import Countdown, { zeroPad } from "react-countdown";
import './countdown-timer.scss';

const CountdownTimer = () => {

    const onCompleteTimer = () => {

        alert('Time is over');

    };

    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="timer-box light">
                <div className="timer-box-item">{zeroPad(days)}<div className="timer-label semi-bold">Days</div></div>
                <div className="timer-box-dots">:</div>
                <div className="timer-box-item">{zeroPad(hours)}<div className="timer-label semi-bold">Hours</div></div>
                <div className="timer-box-dots">:</div>
                <div className="timer-box-item">{zeroPad(minutes)}<div className="timer-label semi-bold">Minutes</div></div>
                <div className="timer-box-dots">:</div>
                <div className="timer-box-item">{zeroPad(seconds)}<div className="timer-label semi-bold">Seconds</div></div>
            </div>
        );
    };

    return (
        <div className="timer">
            <p className="timer-title semi-bold">Time to Next Update</p>
            <Countdown
                date="2020-09-06T08:00:00"
                renderer={renderer}
                onComplete={onCompleteTimer} />
        </div>
    )

};

export default CountdownTimer;