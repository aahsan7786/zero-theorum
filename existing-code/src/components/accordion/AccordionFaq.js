import React, { useState } from "react";
import PropTypes from "prop-types";

const AccordionFaq = ({ data: { title, description, collapsed } }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <div className={`accordion-box ${isCollapsed ? "" : "is-active"}`}>
      <div
        className="accordion-box-header"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="accordion-btn" />
        <div className="accordion-title title-4 yellow">
          <p>{title}</p>
        </div>
      </div>
      <div className="accordion-box-body">
        <div className="accordion-description">
          <div className="d-flex">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionFaq;

AccordionFaq.propTypes = {
  data: PropTypes.object.isRequired,
};
