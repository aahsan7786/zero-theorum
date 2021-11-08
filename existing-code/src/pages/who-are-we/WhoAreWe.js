import React, {useState} from 'react';
import './whoAreWe.scss';
import doctor from '../../assets/images/whoAreWe/doctor.png';
import whoAreWePhoto from '../../assets/images/whoAreWe/1.png';
import whoAreWePhoto2 from '../../assets/images/whoAreWe/2.png';
import whoAreWePhoto3 from '../../assets/images/whoAreWe/3.png';
import whoAreWePhoto4 from '../../assets/images/whoAreWe/4.png';
import whoAreWePhoto5 from '../../assets/images/whoAreWe/5.png';
import whoAreWePhoto6 from '../../assets/images/whoAreWe/6.png';
import link from 'Images/icons/mail.svg';
import arrowLeft from 'Images/icons/arrow-leftWho.svg';
import arrowRight from 'Images/icons/arrow-rightWho.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ReactSVG} from "react-svg";
import SlideWho from "Components/slideWho/SlideWho";

const WhoAreWe = () => {
    const [more ,setMore] = useState(false);

    const ButtonGroup = ({next, previous, goToSlide, ...rest}) => {
        const {carouselState: {currentSlide, totalItems}} = rest;
        return (
            <div className="carousel-button-group">
                <ReactSVG
                    renumerateIRIElements={false}
                    src={arrowLeft}
                    wrapper="div"
                    className={["arrow-block", currentSlide === 0 ? 'disable' : ''].join(" ")}
                    onClick={() => previous()}
                />
                <ReactSVG
                    renumerateIRIElements={false}
                    src={arrowRight}
                    wrapper="div"
                    // className={["arrow-block", "disable"].join(" ")}
                    className={["arrow-block", (totalItems - 3) === currentSlide ? 'disable' : ''].join(" ")}
                    onClick={() => next()}
                />
            </div>
        );
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };


    return (
        <section className="section hero inner-page who-are-we">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-start mb-3 title">
                        <b>Mission</b>
                    </div>
                    <div className="col-12 d-flex justify-content-start mb-5 sub-title">
                        <b>To Provide A New Economic Framework <br/> To Value Bitcoin & Digital Currencies</b>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3 h1">
                        <b>Who are we</b>
                    </div>
                    <div className="col-lg-4 main-img">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-lg-6 col-xs-12 d-flex flex-column justify-content-center">
                        <div className="name">
                            Dr. Kristian Haehndel
                        </div>
                        <div className="my-3 position d-flex justify-content-between">
                            Zero Theorem Creator
                            <div>
                                <a href="mailto:kristian.haehndel@zerotheorem.com">
                                    <img src={link} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="offset-1">
                            <div className={!more && "twoLine"}>
                                Dr. Kristian Haehndel has a PhD in Mechanical Engineering and a
                                Masters in Quantitative Finance. Dr. Haehndel academic specialisation is
                                in numerical simulations for aero-thermal vehicle calculations where he
                                worked as an engineer for the BMW Group. Dr. Haehndel has been an
                                early adopter of Bitcoin and active member of blockchain community
                                since 2012. For the last years Dr. Haehndel has devoted himself to
                                finding a solution to the market pricing uncertainty by developing an
                                economic framework to value Bitcoin and digital currencies.
                            </div>
                            <div className="lead-more" onClick={() => setMore(!more)}>{more ? 'Make it smaller' : 'Lead more'}</div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-5 h2">
                        <b>COLLABORATERS</b>
                    </div>
                    <div className="col-12 d-flex justify-content-end my-5 py-2">
                        {/*<div className="arrow-block">*/}
                        {/*    <img src={arrowLeft} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="arrow-block">*/}
                        {/*    <img src={arrowRight} alt=""/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="slide col-lg-4">
                                <SlideWho image={whoAreWePhoto} name={'Dr. Vukan Vujic'} job={'Econometrics'}
                                          description={'Vukan Vujic holds a Ph.D. in Economics. He began his career as a quantitative\n' +
                                          '                                        analyst,\n' +
                                          '                                        spending few years working for a large international bank and a pension fund.\n' +
                                          '                                        After that he\n' +
                                          '                                        transitioned to data science, specializing in causal inference and\n' +
                                          '                                        experimentation.\n' +
                                          '                                        Passionate about finance and new technologies, he spent a significant amount of\n' +
                                          '                                        time\n' +
                                          '                                        replicating and developing Bitcoin pricing algorithms, some of which have been\n' +
                                          '                                        profitably\n' +
                                          '                                        implemented in a live trading environment.'}/>
                            </div>
                            <div className="slide col-lg-4">
                                <SlideWho image={whoAreWePhoto2} name={'Mr. Ritabrata Bhattacharyya'} job={'Automation/Simulation'}
                                          description={'Rito is a professional trader and a pioneering technologist. To date, algos for\n' +
                                          '                                        several of his strategies have been profitably implemented at several hedge fund\n' +
                                          '                                        managers, family offices and investment advisories around the world. Rito earned\n' +
                                          '                                        a Master’s degree in Engineering and Computational Biology from the Indian\n' +
                                          '                                        Institute of Technology (IIT) Bombay, India. He has co-founded and helped scale\n' +
                                          '                                        multiple startups in the domain of Artificial Intelligence & Machine Learning,\n' +
                                          '                                        market prediction datasets and usage of the emerging blockchain and\n' +
                                          '                                        cryptocurrency technologies in finance. He is a long-standing member of Mensa,\n' +
                                          '                                        holds multiple software patents and journal publications in diverse fields and\n' +
                                          '                                        is an active faculty member and student mentor for the MS in Financial\n' +
                                          '                                        Engineering program at WorldQuant University.'}/>
                            </div>
                            <div className="slide col-lg-4">
                                <SlideWho image={whoAreWePhoto3} name={'Dr. Anthony Jefferies'} job={'Hypothesis Testing'}
                                          description={'Dr. Anthony Jefferies has a PhD in Mechanical Engineering and has worked in the\n' +
                                          '                                        German automotive industry. He is interested in Bitcoin and blockchain\n' +
                                          '                                        technology and has participated in a number of projects in that sphere. He\n' +
                                          '                                        appreciates both their technological attributes and their potential to reshape\n' +
                                          '                                        economic relations.'}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="slide col-lg-4">
                                <SlideWho image={whoAreWePhoto5} name={'Dr. Abdul Jabbar'} job={'Model Optimisation'}
                                          description={'Abdul Jabbar completed his Ph. D. in Computer Science with a major in Deep\n' +
                                          '                                        Learning from The University of Newcastle, Australia in 2020. His Ph.D. involved\n' +
                                          '                                        work in Deep Learning -- resulting in comprehensive research and development\n' +
                                          '                                        experience in Deep Neural Networks including but not limited to Convolutional\n' +
                                          '                                        Neural Networks, Deep Belief Networks, Deep Q Learning, Recurrent Networks, and\n' +
                                          '                                        Generative Adversarial Networks. Part of his work during Ph. D. was also related\n' +
                                          '                                        to meaningful data generation through manual and synthetic means including 3D\n' +
                                          '                                        graphics tools and Generative Adversarial Networks.\n' +
                                          '                                        His Focused research areas include image classification, object detection,\n' +
                                          '                                        action recognition, and synthetic data generation. Other areas he worked on\n' +
                                          '                                        include natural language processing, facial landmarks and emotion recognition,\n' +
                                          '                                        transfer learning, predictive analytics, and reinforcement learning.\n' +
                                          '                                        During and after his doctoral studies, Abdul provided, and continues to provide\n' +
                                          '                                        his services as ML Researcher, Sr. ML Engineer, and Sr. NLP Engineer to multiple\n' +
                                          '                                        companies around the world. Few of the notable clients he has worked with\n' +
                                          '                                        include Allen Institute for AI (USA), Unbox Research (USA), and L2F\n' +
                                          '                                        (Switzerland).\n' +
                                          '                                        Prior to his Ph. D., Abdul has 2 years industry experience working as a Software\n' +
                                          '                                        Engineering in an Agile environment following SCRUM framework.'}/>
                            </div>
                            <div className="slide col-lg-4">
                                <SlideWho image={whoAreWePhoto4} name={'Dr. Syed Jalil'} job={'Model Development'}
                                          description={'Syed is currently awaiting thesis examination of his Ph.D. under\n' +
                                          '                                        Interdisciplinary Machine Learning Research Group (IMLRG) at The University of\n' +
                                          '                                        Newcastle, Australia. During his Ph.D., he has proposed advanced deep\n' +
                                          '                                        reinforcement learning solutions for large-scale complex network problems such\n' +
                                          '                                        as spectrum occupancy prediction, multi-agent dynamic spectrum access, and QoS\n' +
                                          '                                        routing. He has extensively worked on mathematical problem formulation, reward\n' +
                                          '                                        function design, implementation, and training of deep reinforcement learning\n' +
                                          '                                        solutions. He has in-depth knowledge of advanced deep reinforcement learning\n' +
                                          '                                        algorithms such as model-free, model-based, and data-driven. Besides that, he\n' +
                                          '                                        also has applied knowledge of deep learning methods some of which are\n' +
                                          '                                        convolutional neural networks and recurrent neural networks. His Ph.D. work is\n' +
                                          '                                        published in top-ranked venues. He is currently involved with various companies\n' +
                                          '                                        around the world where he is assisting in the design of state-of-the-art deep\n' +
                                          '                                        reinforcement learning solutions for highly complex problems.'}/>
                            </div>
                            <div className="slide col-lg-4">
                                <SlideWho image={whoAreWePhoto6} name={'Mr. Jose Gonzales'} job={'Database/Deployment'}
                                          description={''}/>
                            </div>
                        </div>
                        {/*<div className='my-own-custom-container'>*/}
                        {/*    <Carousel*/}
                        {/*        responsive={responsive}*/}
                        {/*        // customRightArrow={<CustomRightArrow />}*/}
                        {/*        arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup/>}*/}
                        {/*    >*/}
                        {/*        */}
                        {/*    */}
                        {/*    </Carousel>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    )

};

export default WhoAreWe;
