import React, {Suspense, useEffect} from "react";
import "./research.scss";
import Accordion from "Components/accordion/Accordion";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import resourcesImage from "../../assets/images/icons/documents-active.svg";

import {connect} from "react-redux";
import {setResourcesOpen, defaultResources} from "Store/resources/actions";

const Research = (props) => {

    useEffect(() => {
        props.defaultResources();
    }, [])

    return (
        <section className="section hero inner-page Research">
            <div className="abstract __7"/>
            <div className="abstract-circle __3"/>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div
                            className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
                            <ErrorBoundry>
                                <Suspense fallback={<div/>}>
                                    <div className="d-flex mb-4 align-items-center yellow">
                                        <img
                                            src={resourcesImage}
                                            alt=""
                                            className="link-thumb-default mr-3"
                                        />
                                        RESOURCES
                                    </div>
                                    <div className="text-center">
                                        Resources page covers all the accumulated knowledge used to
                                        develop Zero Theorem. Here users may explore our literature
                                        review, economic derivations, deep reinforcement learning
                                        algorithms and user guides. Additional Zero Theorem presents
                                        a frequent technical report comparing the accuracies of
                                        several DRL zero theorem variations and their performance
                                        over the last reporting period.
                                    </div>
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                    <div className="col-lg-9 offset-lg-1">
                        <Accordion data={props.data}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = ({resourcesReducer}) => {
    return resourcesReducer;
};

const mapDispatchToProps = {
    defaultResources
};

export default connect(mapStateToProps, mapDispatchToProps)(Research);
