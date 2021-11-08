import React from 'react';
import PropTypes from 'prop-types';
import earth from '../../assets/images/planet-1.svg';
import moon from '../../assets/images/planet-2.svg';
import './planets.scss';
import TrackVisibility from 'react-on-screen';

const Planets = ({ width, height, sun }) => {

    const sunStyles = { width: width, height: height };
    const earthOrbitStyles = { width: width + 400, height: height + 400 };

    const SunSystem = ({ isVisible }) => {

        return(
            <div className={`planets ${ isVisible ? 'is-active' : '' }`}>
                <div className="planets-item sun" style={sunStyles}>
                    <img src={sun} alt="Planet" />
                </div>
                <div className="orbit-earth" style={earthOrbitStyles}>
                    <div className="planets-item earth">
                        <img src={earth} alt="Earth" />
                        <div className="orbit-moon">
                            <div className="planets-item moon">
                                <img src={moon} alt="Moon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    };

    return(
        <TrackVisibility className="space" partialVisibility offset={200}>
            <SunSystem />
        </TrackVisibility>
    )

};

export default Planets;

Planets.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    sun: PropTypes.string.isRequired
};