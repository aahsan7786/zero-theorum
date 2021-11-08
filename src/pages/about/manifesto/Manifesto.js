import React from 'react';
import './manifesto.scss';

const Manifesto = ({ theme = '' }) => {

    return (
        <div className={`manifesto ${theme}`}>
            <div className="abstract __12" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-title">
                            <p className="subtitle">We will make clear</p>
                            <h3 className="title-1 title-border">OUR manifesto</h3>
                        </div>
                        <div className="hero-title-description __quote">
                            <p className="quote-title">
                                “...Inspired by the Modelers’ Hippocratic Oath”
                                <span className="quote-author">By Dr. Emanuel Derman and Dr. Paul Wilmott</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="manifesto-list">
                    <div className="manifesto-list-item">
                        <div className="manifesto-box" data-num="01">
                            <div className="manifesto-box-title">
                                <h3 className="title-3">Stochastic properties</h3>
                            </div>
                            <div className="manifesto-box-description">
                                <p>Even though we use a combination of statistical, econometric and machine learning methods to estimate value, we will never overlook the stochastic properties of reality for the pristine beauty of mathematical formulation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="manifesto-list-item">
                        <div className="manifesto-box" data-num="02">
                            <div className="manifesto-box-title">
                                <h3 className="title-3">We will make clear</h3>
                            </div>
                            <div className="manifesto-box-description">
                                <p>We will make clear the assumptions, oversights and accuracy of our models to those who intent to use them and never claim that they have the full explanatory insights into real world market dynamics.</p>
                            </div>
                        </div>
                    </div>
                    <div className="manifesto-list-item">
                        <div className="manifesto-box" data-num="03">
                            <div className="manifesto-box-title">
                                <h3 className="title-3">We understand</h3>
                            </div>
                            <div className="manifesto-box-description">
                                <p>We understand that our models can provoke past, current and future economic theory and accept that our work may result in consequences on society that can be far beyond our own comprehension.</p>
                            </div>
                        </div>
                    </div>
                    <div className="manifesto-list-item">
                        <div className="manifesto-box" data-num="04">
                            <div className="manifesto-box-title">
                                <h3 className="title-3">We commit</h3>
                            </div>
                            <div className="manifesto-box-description">
                                <p>We commit to continuously improving and evolving our models and will never claim that they are complete.</p>
                            </div>
                        </div>
                    </div>
                    <div className="manifesto-list-item">
                        <div className="manifesto-box" data-num="05">
                            <div className="manifesto-box-title">
                                <h3 className="title-3">We dedicate</h3>
                            </div>
                            <div className="manifesto-box-description">
                                <p>We dedicate ourselves to expanding the current body of knowledge by providing our own academic research and releasing this information to the public at zero cost.</p>
                            </div>
                        </div>
                    </div>
                    <div className="manifesto-list-item">
                        <div className="manifesto-box" data-num="06">
                            <div className="manifesto-box-title">
                                <h3 className="title-3">We express</h3>
                            </div>
                            <div className="manifesto-box-description">
                                <p>We express specifically that our models or their outputs are not intended to be used as financial advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Manifesto;
