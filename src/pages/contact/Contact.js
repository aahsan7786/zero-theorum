import React from 'react';
import './contact.scss';

const Contact = () => {

    return (
        <section className="section hero inner-page feedback">
            <div className="col-lg-12 d-flex justify-content-center flex-column align-content-start our-story">
                <div>
                    <div className="title-zero col-lg-12 col-xs-12 text-center mb-5 yellow">
                        CONTACT
                    </div>
                    <div className="col-lg-12 col-xs-12 text-center">
                        <div className="yellow h5">
                            <b>ZERO THEOREM PTY LTD</b>
                        </div>
                        ABN 41 652 365 056 / ACN 652 365 056
                        <br/><br/>
                        Address: Office 7, 315 Barry Road, Campbellfield, Victoria, 3061, Australia
                        <br/>
                        Email: <a href="mailto:contact@zerotheorem.com" className="blue">contact@zerotheorem.com</a>
                        <br/>
                        Twitter: <a href="https://twitter.com/@0_Theorem" className="blue">@0_Theorem</a>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Contact;
