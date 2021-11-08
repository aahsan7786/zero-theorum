import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect, useLocation } from 'react-router-dom';
import './research.scss';
import ResearchNav from "./research-nav/ResearchNav";
// import BaseModels from "./base-models/BaseModels";
import Forecast from "./forecast/Forecast";
import ResearchHeader from "./research-header/ResearchHeader";
import VolatilityFactors from "./volatility-factors/VolatilityFactors";
import MacroFactors from "./macro-factors/MacroFactors";
import MicroFactors from "./micro-factors/MicroFactors";
import LiteratureReview from "../literature-review/LiteratureReview";
// import StylizedAttributes from "./stylized-attributes/StylizedAttributes";
// import FeatureExploration from "./feature-exploration/FeatureExploration";
// import MarketMetrics from "./market-metrics/MarketMetrics";
// import GlobalCorrelations from "./global-correlations/GlobalCorrelations";
// import Data from "./data/Data";

const Researchv14Old = ({ navData }) => {
    const [show, setShow] = useState(true);


    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;

        if(currentPath === '/research/resources'){
            setShow(false);
        } else {
            setShow(true);
        }
    }, [location]);

    const { path, url } = useRouteMatch();

    return(
        <section className="section research-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3">
                        <div className="hero-nav">
                            <ResearchNav url={url} />
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-9">
                        {show ? <ResearchHeader /> : <div/> }
                        <div className="research-body">
                            <Switch>
                                <Route exact path={`${path}`}>
                                    <Redirect to={`${path}/${navData[0].pathName}`} />
                                </Route>
                                <Route path={`${path}/${navData[0].pathName}`}>
                                    <Forecast />
                                </Route>
                                <Route path={`${path}/${navData[1].pathName}`}>
                                    <VolatilityFactors />
                                </Route>
                                <Route path={`${path}/${navData[2].pathName}`}>
                                    <MacroFactors />
                                </Route>
                                <Route path={`${path}/${navData[3].pathName}`}>
                                    <MicroFactors />
                                </Route>
                                <Route path={`${path}/${navData[4].pathName}`}>
                                    <LiteratureReview />
                                </Route>
                                {/*<Route path={`${path}/${navData[5].pathName}`}>*/}
                                {/*    <GlobalCorrelations />*/}
                                {/*</Route>*/}
                                {/*<Route path={`${path}/${navData[6].pathName}`}>*/}
                                {/*    <Data />*/}
                                {/*</Route>*/}
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

const mapStateToProps = ({ researchReducer }) => {
  return researchReducer;
};

export default connect(mapStateToProps)(Researchv14Old);
