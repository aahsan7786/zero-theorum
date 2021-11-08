import React from 'react';
import { connect } from 'react-redux';
import Accordion from "Components/accordion/Accordion";

const FaqAccordion = ({ data }) => {
    return <Accordion data={data} />
};

const mapStateToProps = ({ faqReducer }) => {
    return faqReducer;
};

export default connect(mapStateToProps)(FaqAccordion);