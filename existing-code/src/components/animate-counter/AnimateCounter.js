import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Odometer from 'react-odometerjs';
import './animate-counter.scss';

class AnimateCounter extends Component{

    valueInterval = 0;

    state = {
        value: this.props.value,
        currency: this.props.currency,
        direction: ''
    };

    componentDidMount() {
        this.valueInterval = setInterval(() => this.update(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.valueInterval);
    }

    getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

    update() {
        let newValue = this.getRandomInt(1000, 2000);
        let direction = this.state.value > newValue ? 'down' : 'up';
        this.setState({
            direction,
            value: newValue
        });
        // setTimeout(() => {
        //     this.setState({
        //         direction: ''
        //     });
        // }, 1500);
    }

    numberWithDot(x) {
        return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };

    render() {

        const { value, currency, direction } = this.state;
        return(
            <Fragment>
                <div className="counter">
                    <div className="counter-body">
                        <div className="counter-body-label regular">{currency}</div>
                        <div className="counter-body-value regular">
                            <Odometer value={value} format="(.ddd).dd" duration={1000} />
                        </div>
                    </div>
                    <div className={`counter-control ${direction}`}>
                        <div className="counter-control-arrow __up" />
                        <div className="counter-control-arrow __down" />
                    </div>
                </div>
                <div className="counter-description">
                    <p>Zero Theorem forecast
                        <span>for 08/25/2020</span></p>
                </div>
            </Fragment>
        )

    }

}

export default AnimateCounter;

AnimateCounter.propTypes = {
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
};
