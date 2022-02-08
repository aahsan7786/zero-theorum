import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";
import {connect} from "react-redux";
import {loadDashboardPageSuccessForecast} from "Store/forecast/actions";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import {useSelector} from "react-redux";
import MathJax from "react-mathjax-preview";

const MetricBox = lazy(() => import("Charts/metric-box/MetricBox"));
const TrendPlot = lazy(() => import("Charts/trendPlot/TrendPlot"));
const FeatureSelectionFinancial2 = lazy(() =>
  import(
    "../../../components/charts/FeatureSelectionFinancial2/FeatureSelectionFinancial2"
  )
);
const FeatureSelectionFinancial3 = lazy(() =>
  import(
    "../../../components/charts/FeatureSelectionFinancial3/FeatureSelectionFinancial3"
  )
);
const RollingMads = lazy(() =>
  import("../../../components/charts/rollingMads/RollingMads")
);
const MadsDist = lazy(() =>
  import("../../../components/charts/madsDist/MadsDist")
);
const ForecastTop = lazy(() =>
  import("../../../components/charts/forecastTop/ForecastTop")
);
const Surface = lazy(() =>
  import("../../../components/charts/surface/Surface")
);

const Forecast = (props) => {
  const [show, setShow] = useState(false);

  const hours = useSelector((item) => item.hoursReducer.hours);

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          {/*<div className="col-xl-12">*/}
          {/*  <div className="__resize">*/}
          {/*    <ErrorBoundry>*/}
          {/*      <Suspense fallback={<div />}>*/}
          {/*        <ForecastTop />*/}
          {/*      </Suspense>*/}
          {/*    </ErrorBoundry>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="col-xl-12">
            <div className="dashboard-box __lg">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <TrendPlot />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="dashboard-box __lg">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <RollingMads
                    info={
                      "Average Target Accuracy is\n" +
                      "determined by measuring if\n" +
                      "the real price reached the\n" +
                      "expected forecasted price"
                    }
                    title={`${hours} Hour Average Target Accuracy`}
                  />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          {/*<div className="col-xl-5">*/}
          {/*    <div className="dashboard-box">*/}
          {/*        <ErrorBoundry>*/}
          {/*            <Suspense fallback={<LoadingIndicator />}>*/}
          {/*                <ResidualPlot />*/}
          {/*            </Suspense>*/}
          {/*        </ErrorBoundry>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className="col-xl-6">
            <div className="dashboard-box __lg">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <MadsDist
                    info={
                      "Measuring the average\n" +
                      "target accuracy with\n" +
                      "alternative time horizons:\n" +
                      "7days, 10 days, 30 days, 45\n" +
                      "Days, 90 days and 180 days."
                    }
                    title={`${hours} Hour Average Target Accuracy per Time Horizon`}
                    apiRoute="getTasDist"
                    type="tas"
                  />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="dashboard-box __lg">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <RollingMads
                    info={
                      "Average Directional Accuracy is\n" +
                      "determined by measuring if\n" +
                      "the real price persisted in the\n" +
                      "expected forecasted directional\n" +
                      "for duration of forecast"
                    }
                    title={`${hours} Hour Average Directional Accuracy`}
                  />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="dashboard-box __lg">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <MadsDist
                    info={
                      "Measuring the Directional\n" +
                      "Accuracy with alternative\n" +
                      "time horizons: 7days, 10\n" +
                      "days, 30 days, 45 Days, 90\n" +
                      "days and 180 days."
                    }
                    title={`${hours} Hour Average Directional Accuracy per Time Horizon`}
                    apiRoute="getMadsDist"
                    type="mads"
                  />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          {/*<div className="col-xl-5">*/}
          {/*    <div className="dashboard-box __mt">*/}
          {/*        <ErrorBoundry>*/}
          {/*            <Suspense fallback={<LoadingIndicator />}>*/}
          {/*                <ResidualHistogram />*/}
          {/*            </Suspense>*/}
          {/*        </ErrorBoundry>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="col-xl-6">*/}
          {/*    <div className="dashboard-box __lg">*/}
          {/*        <ErrorBoundry>*/}
          {/*            <Suspense fallback={<div/>}>*/}
          {/*                <FeatureSelectionFinancial2/>*/}
          {/*            </Suspense>*/}
          {/*        </ErrorBoundry>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="col-xl-6">*/}
          {/*    <div className="dashboard-box __lg">*/}
          {/*        <ErrorBoundry>*/}
          {/*            <Suspense fallback={<div/>}>*/}
          {/*                <FeatureSelectionFinancial3/>*/}
          {/*            </Suspense>*/}
          {/*        </ErrorBoundry>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className="col-xl-6">
            <div className="dashboard-box __lg">
              <ErrorBoundry>
                <Suspense fallback={<LoadingIndicator />}>
                  <Surface
                    type={"Calls"}
                    info={
                      "Implied volatility surface\n" +
                      "calculated from Deribit BTC call\n" +
                      "options"
                    }
                  />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="dashboard-box __lg">
              <ErrorBoundry>
                <Suspense fallback={<LoadingIndicator />}>
                  <Surface
                    type={"Puts"}
                    info={
                      "Implied volatility surface\n" +
                      "calculated from Deribit BTC put\n" +
                      "options"
                    }
                  />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="dashboard-box __stat">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <MetricBox />
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  loadDashboardPageSuccessForecast,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
