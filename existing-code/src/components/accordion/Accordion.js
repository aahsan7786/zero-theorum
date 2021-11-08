import React from 'react';
import PropTypes from 'prop-types';
import './accordion.scss';
import AccordionBox from "./AccordionBox";

const Accordion = ({ data }) => {

    return(
        <div className="accordion">
            {
                data.map((box, key) => {
                    return <AccordionBox data={box} key={key} />;
                })
            }
        </div>
    )

};

export default Accordion;

Accordion.propTypes = {
    data: PropTypes.array.isRequired
};