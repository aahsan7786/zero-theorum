import React, {Fragment, lazy, Suspense} from 'react';
import './about.scss';
import Mission from "./mission/Mission";
import Manifesto from "./manifesto/Manifesto";
import whyUsIcon1 from 'Images/home/why-us/1.png';
import whyUsIcon2 from 'Images/home/why-us/2.svg';
import whyUsIcon3 from 'Images/home/why-us/3.svg';
import whyUsIcon4 from 'Images/home/why-us/4.svg';
import explore from '../../assets/images/homeImage.jpg';
import {Link} from 'react-router-dom';
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";

const ResearchBox = lazy(() => import("Components/research-box/ResearchBox"));
import faqBannerWebp from 'Images/home/faq-banner.webp';
import faqBannerPng from 'Images/home/faq-banner.png';
import FaqAccordion from "./faq/FaqAccordion";

const About = () => {

    return (
        <section className="section hero inner-page">
            {/*<div className="motivation">*/}
            {/*    <div className="abstract __10"/>*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-7">*/}
            {/*                <div className="hero-title">*/}
            {/*                    <p className="subtitle">our incentives</p>*/}
            {/*                    <h1 className="title-1 title-border">Motivation</h1>*/}
            {/*                </div>*/}
            {/*                <div className="hero-quote">*/}
            {/*                    <p>“We believe that the pricing uncertainty is the primary cause of Bitcoin’s market*/}
            {/*                        inefficiency, higher volatility and adoption drag ...for its destined global*/}
            {/*                        dominance...”</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-4">*/}
            {/*                <div className="motivation-description">*/}
            {/*                    <p>In to am attended desirous raptures declared diverted confined at. Collected*/}
            {/*                        instantly remaining up certainly to necessary as. Over walk dull into son boy door*/}
            {/*                        went new. At or happiness commanded daughters as. Is handsome an declared at*/}
            {/*                        received in extended vicinity subjects. Into miss on he over been late pain an. Only*/}
            {/*                        week bore boy what fat case left use. Match round scale now sex style far times.*/}
            {/*                        Your me past an much. </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-4">*/}
            {/*                <div className="motivation-description">*/}
            {/*                    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and*/}
            {/*                        fulfilled propriety led. Waited get either are wooded little her. Contrasted*/}
            {/*                        unreserved as mr particular collecting it everything as indulgence. Seems ask meant*/}
            {/*                        merry could put. Age old begin had boy noisy table front whole given.</p>*/}
            {/*                    <p>Sufficient unpleasing an insensible motionless if introduced ye. Now give nor both*/}
            {/*                        come near many late.</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-4">*/}
            {/*                <div className="motivation-description">*/}
            {/*                    <p>Effects present letters inquiry no an removed or friends. Desire behind latter me*/}
            {/*                        though in. Supposing shameless am he engrossed up additions. My possible peculiar*/}
            {/*                        together to. Desire so better am cannot he up before points. Remember mistaken*/}
            {/*                        opinions it pleasure of debating. Court front maids forty if aware their at. Chicken*/}
            {/*                        use are pressed removed. </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Mission/>
            {/*<div className="infrastructure">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-12">*/}
            {/*                <div className="hero-title">*/}
            {/*                    <p className="subtitle">WTF...IS ZT?</p>*/}
            {/*                    <h3 className="title-1 title-border">ZT Infrastructure</h3>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-12">*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <section className="section why">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/*<p className="subtitle">We will make clear</p>*/}
                            <div className="why-title">
                                <h3 className="title-2">OUR MANIFESTO</h3>
                            </div>
                            <div className="folder-content-subtitle mt-3">
                                <h6 className="title-6">“...Inspired by the Modelers’ Hippocratic Oath” <br/> By Dr.
                                    Emanuel
                                    Derman and Dr. Paul Wilmott</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="why-list">
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon1} alt="Stochastic properties"/>
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">Stochastic properties</h4>
                                            <p>Even though we use a combination of statistical, econometric and machine
                                                learning methods to estimate value, we will never overlook the
                                                stochastic properties of reality for the pristine beauty of mathematical
                                                formulation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon2} alt="We understand"/>
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We understand</h4>
                                            <p>We understand that our models can provoke past, current and future
                                                economic theory and accept that our work may result in consequences on
                                                society that can be far beyond our own comprehension.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon3} alt="We will make clear "/>
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We will make clear </h4>
                                            <p>We will make clear the assumptions, oversights and accuracy of our models
                                                to those who intent to use them and never claim that th ey have the full
                                                explanatory insights into real world market dynamics. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon4} alt="We commit"/>
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We commit</h4>
                                            <p>We will make clear the assumptions, oversights and accuracy of our models
                                                to those who intent to use them and never claim that th ey have the full
                                                explanatory insights into real world market dynamics.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon4} alt="We commit"/>
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We will make clear</h4>
                                            <p>We commit to continuously improving and evolving our models and will
                                                never claim that they arecomplete. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<Manifesto />*/}
            <div className="whoAreWe">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={explore} alt="whoarewe"/>
                        </div>
                        <div className="col-9">
                            <div className="hero-title">
                                <p className="subtitle">010010000100010101</p>
                                <h3 className="title-1 title-border">WHO ARE WE?</h3>
                            </div>
                            <p className=" mt-4">We suffered... a great loss... and we struggled for a long time
                                to understand the reason for it... the reason we were chosen, if chosen we were, to go
                                on living with this misfortune... We came to this place... It seemed to suit us...</p>
                            <br/><p className="">Then the phone rang... We answered... A voice said, "Dr. Qohen Leth,"
                                and suddenly we felt a flash of light... We felt... a current of pure energy connecting
                                us to something... something greater...
                            </p>
                            <br/><p className="">We suddenly knew clearly that we only had to answer, “yes”, and the
                                voice would reveal the purpose behind our loss... would give us a reason to go on...
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default About;
