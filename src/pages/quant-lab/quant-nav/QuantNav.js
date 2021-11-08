import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const QuantNav = ({ url, navData }) => {

    return(
        <ul className="quant-nav">
            {
                navData.map((link, key) => {
                    return (
                        <li key={key}>
                            <NavLink to={`${url}/${link.pathName}`} className="link">
                                <span className="link-thumb">
                                    <img src={link.icon} alt={link.title} className="link-thumb-default" />
                                    <img src={link.iconActive} alt={link.title} className="link-thumb-active" />
                                </span>
                                <span className="link-title">{link.title}</span>
                            </NavLink>
                        </li>
                    )
                })
            }

        </ul>
    )

};

const mapStateToProps = ({ quantNavReducer }) => {
    return quantNavReducer;
};

export default connect(mapStateToProps)(QuantNav);

QuantNav.propTypes = {
    url: PropTypes.string.isRequired
};