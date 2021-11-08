import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { nextDataStep } from '../../store/data/actions';

const DataStart = ({ nextDataStep }) => {
    return(
        <Fragment>
            <p className="data-view-subtitle semi-bold">In Order To Download Our Historical Data</p>
            <p className="data-view-title regular">Please Fill Out Our Feedback Form</p>
            <button className="btn sm" onClick={nextDataStep}>
                <span className="btn-title">Get Start</span>
            </button>
        </Fragment>
    )
};

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    nextDataStep
};

export default connect(mapStateToProps, mapDispatchToProps)(DataStart);