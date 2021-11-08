import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import './quant-lab.scss';
import QuantNav from "./quant-nav/QuantNav";
import BaseModels from "./base-models/BaseModels";
import Forecast from "./forecast/Forecast";
import QuantHeader from "./quant-header/QuantHeader";
import StylizedAttributes from "./stylized-attributes/StylizedAttributes";
import FeatureExploration from "./feature-exploration/FeatureExploration";
import MarketMetrics from "./market-metrics/MarketMetrics";
import GlobalCorrelations from "./global-correlations/GlobalCorrelations";
import Data from "./data/Data";

const QuantLab = ({ navData }) => {

    const { path, url } = useRouteMatch();

    return(
        <section className="section quant-lab-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3">
                        <div className="hero-nav">
                            <QuantNav url={url} />
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-9">
                        <QuantHeader />
                        <div className="quant-body">
                            <Switch>
                                <Route exact path={`${path}`}>
                                    <Redirect to={`${path}/${navData[0].pathName}`} />
                                </Route>
                                <Route path={`${path}/${navData[0].pathName}`}>
                                    <Forecast />
                                </Route>
                                <Route path={`${path}/${navData[1].pathName}`}>
                                    <BaseModels />
                                </Route>
                                <Route path={`${path}/${navData[2].pathName}`}>
                                    <StylizedAttributes />
                                </Route>
                                <Route path={`${path}/${navData[3].pathName}`}>
                                    <FeatureExploration />
                                </Route>
                                <Route path={`${path}/${navData[4].pathName}`}>
                                    <MarketMetrics />
                                </Route>
                                <Route path={`${path}/${navData[5].pathName}`}>
                                    <GlobalCorrelations />
                                </Route>
                                <Route path={`${path}/${navData[6].pathName}`}>
                                    <Data />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

const mapStateToProps = ({ quantNavReducer }) => {
  return quantNavReducer;
};

export default connect(mapStateToProps)(QuantLab);