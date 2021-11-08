import React from 'react';
import PropTypes from 'prop-types';
import star from "Images/icons/star.svg";

const ResearchThumbnail = ({
                               thumb: {
                                   banner, title = 'How to Jump From a amazing Door-to-Door Salesman to a Fortune 1000 Sales', description = 'Ayodeji Awosika in Forge',
                                   date = 'Aug 29', timeRead = '4'
                               }
                           }) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="research-banner">
                    {/*style={{ backgroundImage: 'url(../../assets/images/resources.png)' }}>*/}
                    {/*<div className="research-banner" style={{ backgroundImage: `url(${banner})` }}>*/}
                    <div className="research-banner-content">
                        <p className="research-banner-date">{date} - {timeRead} Read <img src={star} alt={title}
                                                                                          className="research-banner-icon"/>
                        </p>
                        <h2 className="title-2 research-banner-title">{title}</h2>
                        <p className="research-banner-description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResearchThumbnail;

ResearchThumbnail.propTypes = {
    thumb: PropTypes.object.isRequired
};
