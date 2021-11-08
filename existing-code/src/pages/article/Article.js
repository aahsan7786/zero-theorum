import React from 'react';
import './article.scss';
import explore from '../../assets/images/homeImage.jpg';

const Article = () => {

    return (
        <section className="section hero inner-page">
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

export default Article;
