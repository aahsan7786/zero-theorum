import React from 'react';
import './loadingIndicator.scss';
import Rolling from '../../assets/images/Rolling.svg';

const LoadingIndicator = () => {

    return(
        <div className="loading-box">
            <img src={Rolling} className="loading-box-icon" alt="Loading" />
        </div>
    )

};

export default LoadingIndicator;
