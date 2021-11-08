import React from 'react';
import './wtf.scss';
import wtfBanner from '../../assets/images/home/wtf-banner.jpg';
import Accordion from "../../components/accordion/Accordion";

const accordionData = [
    {
        title: '1. What is Zero Theorem?',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table.</p>',
        collapsed: true
    },
    {
        title: '2. Properties of Bitcoin',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table.</p>',
        collapsed: false
    },
    {
        title: '3. Alternative Crypto Currencies',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table.</p>',
        collapsed: true
    },
    {
        title: '4. Mathematical Formulation',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table.</p>',
        collapsed: true
    },
    {
        title: '5. Modeling Challenges',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table.</p>',
        collapsed: true
    },
];

const Wtf = () => {

    return(
        <section className="section hero inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-title">
                            <p className="subtitle">WTF...IS ZT?</p>
                            <h1 className="title-1 title-border">The ZT Philosophy</h1>
                            <p className="hero-title-description">“Modern day economic theory needs revision…..”</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="philosophy">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="philosophy-preview">
                                <img src={wtfBanner} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="philosophy-content">
                                <Accordion data={accordionData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Wtf;