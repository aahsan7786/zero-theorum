import React from 'react';
import './contact.scss';
import Feedback from "./feedback/Feedback";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";

const ContactOld = () => {

    return (
        <section className="section hero inner-page">
            {/*<div className="abstract __13" />*/}
            {/*<div className="abstract __14" />*/}
            <div className="container">
                {/*<div className="row">*/}
                {/*    <div className="col-12">*/}
                {/*        <div className="hero-title">*/}
                {/*            <p className="subtitle">Resources</p>*/}
                {/*            <h1 className="title-1 title-border">Contact</h1>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="row">
                    <div className="col-12 mb-5 text-center dashboard-box __resize">
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
                    <div className="col-lg-12 dashboard-box __resize">
                        <ErrorBoundry>
                            <Feedback />
                        </ErrorBoundry>
                    </div>
                    {/*<div className="col-lg-6">*/}
                    {/*    <div className="contact-us">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col-xl-8 offset-xl-2">*/}
                    {/*                <h3 className="title-3">Reach out to us?</h3>*/}
                    {/*                <div className="contact-us-description">*/}
                    {/*                    <p>General Inquires</p>*/}
                    {/*                </div>*/}
                    {/*                <div className="contact-us-table">*/}
                    {/*                    <div className="contact-us-row">*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <p className="regular">Email:</p>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <a href="mailto:contact@zerotheorem.com">contact@zerotheorem.com</a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="contact-us-row">*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <p className="regular">Twitter:</p>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <a href="https://twitter.com/jessealso/media" target="_blank">https://twitter.com/jessealso/media</a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="contact-us-row">*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <p className="regular">Facebook:</p>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <a href="https://www.facebook.com/" target="_blank">https://www.facebook.com/</a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="contact-us-row">*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <p className="regular">Telegram:</p>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <a href="@zerotheorem" target="_blank">@zerotheorem</a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="contact-us-table">*/}
                    {/*                    <div className="contact-us-row">*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <p className="regular">Company Registration Number:</p>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <a>241542351345677</a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="contact-us-row">*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <p className="regular">Company Address:</p>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="contact-us-box">*/}
                    {/*                            <a href="https://www.google.com/maps?q=Sherman+Mills,+1884+Fantages+Way&rlz=1C1JZAP_ruUA879UA879&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiW25HO1tvqAhVHzqYKHTvxDCgQ_AUoAXoECAsQAw" target="_blank">Sherman Mills, 1884  Fantages Way</a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )

};

export default ContactOld;
