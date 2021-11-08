import React, { lazy, Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./back-test.scss";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import { openModal } from "Store/modal/actions";
import ad from "Images/ad1.png";
import feature from "Images/icons/feature-exploration.svg";
import volatilityActive from "Images/icons/volatility-active.svg";

const MarketCorrelation = lazy(() =>
  import("../../components/charts/market-correlation/MarketCorrelation")
);
const MonthlyReturn = lazy(() =>
  import("../../components/charts/monthlyReturn/MonthlyReturn")
);
const PerformanceBenchmark = lazy(() =>
  import("../../components/charts/performanceBenchmark/PerformanceBenchmark")
);
const DrawDown = lazy(() => import("Charts/drawDown/DrawDown"));
const Assumptions = lazy(() => import("Charts/assumptions/Assumptions"));
const Assumptions2 = lazy(() => import("Charts/assumptions2/Assumptions2"));
const ProbabilityPlot = lazy(() =>
  import("Charts/probabilityPlot/ProbabilityPlot")
);
const Snp500 = lazy(() => import("../../components/charts/snp500/Snp500"));
const ResidualHistogram = lazy(() =>
  import("../../components/charts/residualHistogram/ResudualHistogram")
);
const ResidualPlot = lazy(() =>
  import("../../components/charts/residualPlot/ResidualPlot")
);

const BackTest = (props) => {
  return (
    <section className="section hero back-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="back-body">
              <div className="row">
                {/* <div className="col-xl-12">
                  <div className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <div className="d-flex mb-4 align-items-center">
                          <img
                            src={volatility}
                            alt=""
                            className="link-thumb-default"
                          />
                          PROOF & BACKTEST
                        </div>
                        <div>
                          Proof page explores the residual error terms
                          (Forecasted Values vs Actual Values) experienced. Here
                          Empirical proof is presented of the economic
                          legitimacy of Zero Theorem Final Form Equation and its
                          corresponding back
                        </div>
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __sm">
                    <ErrorBoundry>
                      <Suspense fallback={<LoadingIndicator />}>
                        <ProbabilityPlot />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __sm">
                    <ErrorBoundry>
                      <Suspense fallback={<LoadingIndicator />}>
                        <Snp500 />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __sm">
                    <ErrorBoundry>
                      <Suspense fallback={<LoadingIndicator />}>
                        <ResidualHistogram />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __sm">
                    <ErrorBoundry>
                      <Suspense fallback={<LoadingIndicator />}>
                        <ResidualPlot />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div> */}

                <div className="col-xl-12">
                  <div className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <div className="d-flex mb-4 align-items-center yellow">
                          <img
                            src={volatilityActive}
                            alt=""
                            className="link-thumb-default"
                          />
                          BACKTEST
                        </div>
                        <div>
                          Backtest page explores a hypothetical scenario if
                          forward valuation forecasts were to be used as trading
                          signals in a proprietary quantitative system.
                        </div>
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-12">
                  <div className="dashboard-box __stat __assumptions">
                    <ErrorBoundry>
                      <Suspense fallback={<LoadingIndicator />}>
                        <Assumptions />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-12">
                  <div className="dashboard-box __stat __assumptions">
                    <ErrorBoundry>
                      <Suspense fallback={<LoadingIndicator />}>
                        <Assumptions2 />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-12">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <PerformanceBenchmark />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <DrawDown />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <MonthlyReturn />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <MarketCorrelation />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BackTest);
