import React from 'react';
import './pdf.scss';
import ad from "Images/ad1.png";
import preview1 from "Images/preview1.png";
import preview2 from "Images/previev2.png";
import {openModalPublication} from "Store/modal/actions";
import {connect} from "react-redux";

const PDF2 = (props) => {

    return (
        <section className="section hero inner-page pdf-page">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <img src={ad} alt="ad" className="imageAdFixed"/>
                        <img src={ad} alt="ad" className="imageAdFixedHidden"/>
                        <div className="row">
                            <div className="publication-block">
                                <div className="col-12 text-center h3 mb-3 publication-title yellow">
                                    ZERO THEOREM PUBLICATION
                                </div>
                                <div className="row publication-body">
                                    <div className="col-lg-6 col-xs-12 d-flex publication-image">
                                        <img src={preview1} alt="" className="col-lg-6 offset-lg-3"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12 text-center align-self-center">
                                        <div className="publication-text">
                                            The following publication aims at developing a new economic framework to value Proof of
                                            Work (PoW) cryptocurrencies using the pilot case of Bitcoin (BTC). Building upon the work
                                            of previous academic studies in both traditional economics and blockchain, a hypothesis is
                                            introduced which addresses the market sizing dilemma of PoW digital assets. This zero sum
                                            game theoretical hypothesis drastically simplifies the short term market sizing estimation
                                            by suggesting that purchasing power of PoW digital assets is derived from a substitution
                                            phenomena (α). And if such a variable was to exists the ability for one to determine future
                                            price levels would be analytically solvable via simple transformations of the equation of
                                            exchange. Several new models are introduced to represent economic output as mining
                                            work, velocity as the average transaction frequency per unit time and traditional market
                                            indexes prices and traded volumes as a means of determining market base in which
                                            substitution occurs.
                                        </div>
                                        <button className="btn __border mt-5">
                                            <span className="btn-title">AWAITING PEER REVIEW</span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-5 w-100"/>
                            <div className="publication-block">
                                <div className="col-12 text-center h3 mb-3 publication-title yellow">
                                    ZERO THEOREM FULL DERIVATION & PROOF
                                </div>
                                <div className="row publication-body">
                                    <div className="col-lg-6 col-xs-12 d-flex publication-image">
                                        <img src={preview1} alt="" className="col-lg-6 offset-lg-3"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12 text-center align-self-center">
                                        <div className="publication-text">
                                            The following publication explores the full mathematical derivation from first principles of
                                            Zero Theorem, it first derivatives, its partial derivatives and ultimate Greeks. Here empirical
                                            proofs are presented using a method of contradiction. Residual and error analysis covers all
                                            model legitimacy tests, including homoscedasticity, normality, serial correlation and
                                            structural stability. All tests are conducted from variety of tradition statistical and
                                            econometric methods with results presented in similar fashion.
                                        </div>
                                        <button className="btn __border mt-5" onClick={() => props.openModalPublication('formPublic')}>
                                            <span className="btn-title">REQUEST EARLY ACCESS</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5 w-100"/>
                            <div className="publication-block">
                                <div className="col-12 text-center h3 mb-3 publication-title yellow">
                                    ZERO THEOREM REINFORCEMENT LEARNING METHODOLOGY
                                </div>
                                <div className="row publication-body">
                                    <div className="col-lg-6 col-xs-12 d-flex publication-image">
                                        <img src={preview1} alt="" className="col-lg-6 offset-lg-3"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12 text-center align-self-center">
                                        <div className="publication-text">
                                            The following publications explores the full methodology of deploying a reinforcement
                                            learning multi-agent system to forecast substitution rates (α) that are used to solve
                                            analytically the Zero Theorem reduced form equation. Here a range of cutting edge
                                            learning algorithms were tested. Online algorithms include Advance Actor Critic (A2C),
                                            Proximal Policy Optimization (PPO), Deep Deterministic Policy Gradients (DDPG), Twin
                                            Delayed Delay Deterministic Policy (TD3) and Soft Actor-Critic (SAC). Offline algorithms
                                            include Conservative Q-Learning (CQL), Bootstrapping Error Accumulation Reduction
                                            (BEAR), Policy in Latent Action Space (PLAS), Advantage Weighted Actor-Critic (AWAC) and
                                            Advantage Weighted Regression (AWR).
                                        </div>
                                        <button className="btn __border mt-5" onClick={() => props.openModalPublication('formPublic')}>
                                            <span className="btn-title">REQUEST EARLY ACCESS</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};


const mapDispatchToProps = {
    openModalPublication,
};

export default connect(null, mapDispatchToProps)(PDF2);
