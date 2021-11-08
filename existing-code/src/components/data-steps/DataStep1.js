import React, { Fragment } from 'react';

const DataStep1 = () => {
    return(
        <Fragment>
            <p className="data-view-subtitle semi-bold">Question 1</p>
            <p className="data-view-title regular">What do you like/dislike about our platform?</p>
            <div className="input-container">
                <textarea cols="10" rows="5" className="textarea"></textarea>
            </div>
        </Fragment>
    )
};

export default DataStep1;