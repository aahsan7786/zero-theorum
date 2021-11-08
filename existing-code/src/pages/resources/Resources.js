import React from 'react';
import Mission from "../about/mission/Mission";
import './resources.scss';
import icon1 from '../../assets/images/icons/subscribers.png';
import icon2 from '../../assets/images/icons/lab.png';
import icon3 from '../../assets/images/icons/research.png';
import whoPhoto from '../../assets/images/who-photo.png';
import Manifesto from "../about/manifesto/Manifesto";

const Resources = () => {

    return(
        <section className="section hero inner-page">
            <Mission />
            <div className="funding-model">
                <div className="abstract __6" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">Useful</p>
                                <h3 className="title-1 title-border">Our funding model</h3>
                                <p className="hero-title-description">“Our subscribers finance the research and development of future economic theory…”</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="funding-model-box">
                                <div className="model">
                                    <div className="model-area __1" />
                                    <div className="model-area __2" />
                                    <div className="model-area __3" />
                                    <div className="model-header">
                                        <div className="model-header-item __1">
                                            <p className="regular">Global Community</p>
                                        </div>
                                        <div className="model-header-item __2">
                                            <p className="regular">Zero Theorem</p>
                                        </div>
                                    </div>
                                    <div className="model-body">
                                        <div className="model-row">
                                            <div className="model-row-item">
                                                <div className="model-row-box">
                                                    <p>$$$</p>
                                                    <div className="model-arrow right" />
                                                </div>
                                            </div>
                                            <div className="model-row-item">
                                                <div className="model-row-box">
                                                    <p>$</p>
                                                    <div className="model-arrow right" />
                                                </div>
                                                <div className="model-row-box">
                                                    <p>Infrastructure</p>
                                                </div>
                                                <div className="model-row-box">
                                                    <p>Data & Models</p>
                                                    <div className="model-arrow right" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="model-row">
                                            <div className="model-row-detail">
                                                <img src={icon1} alt="Subscribers" />
                                                <p className="regular">Subscribers</p>
                                            </div>
                                            <div className="model-row-box">
                                                <p>Advanced Forecasts</p>
                                                <div className="model-arrow model-arrow-left left" />
                                            </div>
                                            <div className="model-row-detail">
                                                <img src={icon2} alt="Quant Lab" />
                                                <p className="regular">Quant Lab</p>
                                            </div>
                                            <div className="model-row-box">
                                                <p>Satoshi Stack Enhancements</p>
                                                <div className="model-arrow model-arrow-left left" />
                                            </div>
                                            <div className="model-row-detail">
                                                <img src={icon3} alt="Research" />
                                                <p className="regular">Research</p>
                                            </div>
                                        </div>
                                        <div className="model-row">
                                            <div className="model-row-item">
                                                <div className="model-row-box">
                                                    <p>Improve Baseline Valuation Model + Economic Research Pipeline</p>
                                                    <div className="model-arrow model-arrow-left left" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Manifesto theme="column" />
            <div className="who">
                <div className="abstract __16" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">???Whowhowho???</p>
                                <h3 className="title-1 title-border">Who are we?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-9 offset-xl-1">
                            <div className="who-quote regular">
                                <p className="who-quote-title">“It is irrelevant who we are... our models and their outputs speak for themselves. Perhaps a better question to ask ...is why?”</p>
                                <p className="who-quote-author">Dr. Qohen Leth</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                            <div className="who-preview">
                                <div className="who-preview-icon" />
                                <div className="who-preview-icon" />
                                <div className="who-preview-icon" />
                                <div className="who-preview-icon" />
                                <img src={whoPhoto} alt="Who are we" />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-9 col-md-8">
                            <div className="who-content">
                                <p>We suffered... a great loss... and we struggled for a long time to understand the
                                reason for it... the reason we were chosen, if chosen we were, to go on living with
                                this misfortune... We came to this place... It seemed to suit us…</p>
                                <p>Then the phone rang... We answered... A voice said, "Qohen Leth," and suddenly
                                we felt a flash of light... We felt... a current of pure energy connecting us to
                                something... something greater…</p>
                                <p>We suddenly knew clearly that we only had to answer, say "Yes," and the voice
                                would reveal the purpose behind our loss… would give us a reason to go on...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Resources;