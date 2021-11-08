import React, {lazy, Suspense, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './macroFactors.scss';
import HeaderGraphPage from "Components/headerGraphPage/HeaderGraphPage";
import thumb from "Images/icons/forecast-2.svg";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import Loader from "Components/loader/loader";
import ad from "Images/ad1.png";

const AverageCost = lazy(() => import("../../components/charts/average-cost/AverageCost"));
const RollingCorrelations = lazy(() => import("../../components/charts/rollingCorrelations/RollingCorrelations"));
const Snp500 = lazy(() => import("../../components/charts/snp500/Snp500"));
const CostOfProduction = lazy(() => import("../../components/charts/cost-of-production/CostOfProduction"));
const ScatteredPlots = lazy(() => import("../../components/charts/scatteredPlots/ScatteredPlots"));

const MacroFactors = (props) => {

    return (
        <section className="section hero macroFactors-page">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img src={ad} alt="ad" className="imageAdFixed"/>
                            <img src={ad} alt="ad" className="imageAdFixedHidden"/>
                            <div className="macroFactors-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="dashboard-box __lg">
                                                    <ErrorBoundry>
                                                        <Suspense fallback={<div/>}>
                                                            <CostOfProduction type='min'/>
                                                        </Suspense>
                                                    </ErrorBoundry>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="dashboard-box __lg">
                                                    <ErrorBoundry>
                                                        <Suspense fallback={<div/>}>
                                                            <CostOfProduction type='guess'/>
                                                        </Suspense>
                                                    </ErrorBoundry>
                                                </div>
                                            </div>
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'EUREX_FDAX1_FW'}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_EUREX_FDAX1_FW'}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'CME_YM1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_CME_YM1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'CME_NK1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_CME_NK1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'LIFFE_Z1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_LIFFE_Z1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}

                                        {/*</div>*/}
                                    </div>
                                    <div className="col-12">
                                        {/*<div className="row">*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'CME_GC1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_CME_GC1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'CME_SI1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_CME_SI1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'CME_PL1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_CME_PL1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'ICE_T1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_ICE_T1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'ICE_M1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_ICE_M1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <ScatteredPlots type={'CME_SP1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-xl-6">*/}
                                        {/*        <div className="dashboard-box __lg">*/}
                                        {/*            <ErrorBoundry>*/}
                                        {/*                <Suspense fallback={<div/>}>*/}
                                        {/*                    <RollingCorrelations type={'corr_CME_SP1_FW'} disable={true}/>*/}
                                        {/*                </Suspense>*/}
                                        {/*            </ErrorBoundry>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
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

const mapStateToProps = (state) => {
    return state;
};


const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MacroFactors);
