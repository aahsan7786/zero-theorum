import React from 'react';
import PropTypes from 'prop-types';
import './accordion.scss';
import AccordionFaq from "./AccordionFaq";

const AccordionList = ({ data }) => {

    return(
        <div className="accordion">
            {
                data.map((box, key) => {
                    return <AccordionFaq data={box} key={key} />;
                })
            }
        </div>
    )

};

export default AccordionList;

AccordionList.propTypes = {
    data: PropTypes.array.isRequired
};