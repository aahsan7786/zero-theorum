import React, { Fragment, lazy, Suspense, useState } from "react";
import { connect } from "react-redux";
import "./governingEquations.scss";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import { loadDashboardPageSuccessResearch } from "Store/research/actions";
import ad from "Images/ad1.png";
import formula1 from "Images/formula1.png";
import formula2 from "Images/formula2.png";
import formula3 from "Images/formula3.png";
import formula4 from "Images/formula4.png";
import formula5 from "Images/formula5.png";
import formula6 from "Images/formula6.png";
import formula7 from "Images/formula7.png";
import formula8 from "Images/formula8.png";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import { ReactSVG } from "react-svg";
import information from "Images/icons/information.svg";
import marketActive from "Images/icons/market-metrics-active.svg";
import forecast from "Images/icons/forecast.svg";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import MathJax from "react-mathjax-preview";
import { useSelector } from "react-redux";

const CostOfProduction = lazy(() =>
  import("Charts/cost-of-production/CostOfProduction")
);
const Snp500 = lazy(() => import("Charts/snp500/Snp500"));
const GoverningEquationsChart = lazy(() =>
  import("Charts/governing-equations/GoverningEquations")
);
const GoverningEquationsGreeks = lazy(() =>
  import("Charts/governing-equations-greeks/GoverningEquationsGreeks")
);

const GoverningEquations = (props) => {
  const [show, setShow] = useState(false);
  const hours = useSelector((item) => item.hoursReducer.hours);

  return (
    <section className="section hero governingEquations-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="governingEquations-body">
              <Fragment>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
                          <ErrorBoundry>
                            <Suspense fallback={<div />}>
                              <div className="d-flex mb-4 align-items-center yellow">
                                <img
                                  src={marketActive}
                                  alt=""
                                  className="link-thumb-default"
                                />
                                GOVERNING DYNAMICS
                              </div>
                              <div>
                                Similar to the famous “Greeks” derived from the
                                Black-Scholes Merton Options Pricing theory,
                                Governing Dynamics page explores the
                                sensitivities of Bitcoin Price Changes (𝜋𝐵𝑇𝐶)
                                relative to changes in the underlying variables.
                                Each of Zero Theorem’s partial derivatives is
                                are assigned Greek symbol where the output of
                                the derivative is plotted over time.
                              </div>
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="dashboard-box __small d-flex flex-column align-items-center justify-content-center">
                          <ErrorBoundry>
                            <Suspense fallback={<div />}>
                              <InfoModalGraph
                                show={show}
                                onPress={() => setShow(!show)}
                                text={
                                  <div>
                                    Where, 𝑃<sub>𝐵𝑇𝐶</sub> is the Price of BTC,
                                    α is substitution rate, 𝑃<sub>𝑘</sub> is
                                    Price of 𝑘 asset, 𝑅<sub>𝑘</sub> is Volume
                                    traded of 𝑘 asset, 𝑇<sub>𝑗</sub>
                                    <sup>′</sup>&nbsp; is Velocity of Bitcoin
                                    Transactions, 𝑏 is the block reward, ℎ is
                                    the hash rate and 𝑑 is the difficulty. All
                                    pricing in USD denomination
                                  </div>
                                }
                              />
                              <ReactSVG
                                // className={["", scroll ? "scroll" : "", scrollTwo ? "scrollTwo" : ""].join(" ")}
                                renumerateIRIElements={false}
                                src={information}
                                wrapper="div"
                                onClick={() => {
                                  setShow(!show);
                                }}
                                style={{
                                  zIndex: 2,
                                  top: "1rem",
                                  width: "1.4rem",
                                  fill: "#ccc",
                                  position: "absolute",
                                  right: "2rem",
                                }}
                              />
                              <div className="yellow">
                                <b>ZERO THEOREM REDUCED FORM EQUATION</b>
                              </div>
                              {/*<img src={formula} alt=""/>*/}
                              <MathJax
                                style={{ fontSize: 18 }}
                                className="mathJaxGeneral"
                                math={
                                  "\\[\n" +
                                  "\\begin{split}\n" +
                                  "\\Pi_{\\rm BTC} & = \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n  \\alpha_k \\cdot  P_k \\cdot  R_k \\right) + \\ln \\left(\\frac{1}{m} \\sum_{j = 1}^m T_j'\\right) - \\ln b - \\ln h + \\ln d \\right].\n" +
                                  "\\end{split}\n" +
                                  "\\]"
                                }
                              />
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div
                          className={[
                            "dashboard-box d-flex",
                            screen.width > 540 ? "__lg" : "__xxl flex-column",
                          ].join(" ")}
                        >
                          <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                              <div
                                className={[
                                  "col-lg-4 d-flex align-items-center flex-column justify-content-center",
                                ].join(" ")}
                              >
                                <img
                                  src={formula1}
                                  alt=""
                                  width={screen.width > 540 ? "60%" : "40%"}
                                />
                                <div
                                  className={[
                                    screen.width > 540 ? "" : "text-center",
                                    "w-75 my-5",
                                  ].join(" ")}
                                >
                                  <p>
                                    𝑤ℎ𝑒𝑛 𝛼 𝑖𝑠 𝑎𝑛 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑡, 𝜋
                                    <sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝛼
                                  </p>
                                  <br />
                                  <p>
                                    𝑤ℎ𝑒𝑛 𝛼 𝑖𝑠 𝑎𝑛 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑡, 𝜋
                                    <sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝛼
                                  </p>
                                </div>
                              </div>
                              <GoverningEquationsChart
                                eq={1}
                                title={`${hours} Hour Gamma - Aggregate Substitution Rate Exposure`}
                                info="Change of BTC Price with respect to Change in Substitution Rates"
                              />
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div
                          style={{
                            paddingTop: screen.width > 540 ? "" : "8rem",
                          }}
                          className={[
                            "dashboard-box d-flex",
                            screen.width > 540 ? "__lg" : "__xxx flex-column",
                          ].join(" ")}
                        >
                          <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                              <div
                                className={[
                                  "col-lg-4 d-flex align-items-center flex-column justify-content-center",
                                ].join(" ")}
                              >
                                <img
                                  src={formula2}
                                  alt=""
                                  width={screen.width > 540 ? "60%" : "50%"}
                                />
                                <div
                                  className={[
                                    screen.width > 540 ? "" : "text-center",
                                    "w-75 my-5",
                                  ].join(" ")}
                                >
                                  <p>
                                    𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                                    &nbsp;> 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔
                                    𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑃<sub>𝑘</sub>
                                  </p>
                                  <br />{" "}
                                  <p>
                                    𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                                    &nbsp;{"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎
                                    𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑃<sub>𝑘</sub>
                                  </p>
                                </div>
                              </div>
                              <GoverningEquationsGreeks
                                greek="beta"
                                title={`${hours} Hour Beta - Specific k Asset Price Exposure`}
                                info="Change of BTC Price with respect to Change in Specific k Asset Price"
                              />
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div
                          style={{
                            paddingTop: screen.width > 540 ? "" : "8rem",
                          }}
                          className={[
                            "dashboard-box d-flex",
                            screen.width > 540 ? "__lg" : "__xxx flex-column",
                          ].join(" ")}
                        >
                          <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                              <div
                                className={[
                                  "col-lg-4 d-flex align-items-center flex-column justify-content-center",
                                ].join(" ")}
                              >
                                <img
                                  src={formula3}
                                  alt=""
                                  width={screen.width > 540 ? "60%" : "50%"}
                                />
                                <div
                                  className={[
                                    screen.width > 540 ? "" : "text-center",
                                    "w-75 my-5",
                                  ].join(" ")}
                                >
                                  <p>
                                    𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                                    &nbsp; > 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔
                                    𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑅<sub>𝑘</sub>
                                  </p>
                                  <br />{" "}
                                  <p>
                                    𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                                    &nbsp; {"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎
                                    𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑅<sub>𝑘</sub>
                                  </p>
                                </div>
                              </div>
                              <GoverningEquationsGreeks
                                greek="delta"
                                title={`${hours} Hour Delta - Specific k Asset Trade Volume Exposure`}
                                info="Change of BTC Price with
respect to Change in Specific
k Asset Trade Volume"
                              />
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div
                          className={[
                            "dashboard-box d-flex",
                            screen.width > 540 ? "__lg" : "__xxl flex-column",
                          ].join(" ")}
                        >
                          <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                              <div
                                className={[
                                  "col-lg-4 d-flex align-items-center flex-column justify-content-center",
                                ].join(" ")}
                              >
                                <img
                                  src={formula4}
                                  alt=""
                                  width={screen.width > 540 ? "60%" : "50%"}
                                />
                              </div>
                              <GoverningEquationsChart
                                eq={4}
                                title={`${hours} Hour Phi - Transactional Velocity Exposure`}
                                info="Change of BTC Price with respect to Change in Transactional Velocity"
                              />
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div
                          className={[
                            "dashboard-box d-flex",
                            screen.width > 540 ? "__lg" : "__xxl flex-column",
                          ].join(" ")}
                        >
                          <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                              <div
                                className={[
                                  "col-lg-4 d-flex align-items-center flex-column justify-content-center",
                                ].join(" ")}
                              >
                                <img
                                  src={formula5}
                                  alt=""
                                  width={screen.width > 540 ? "60%" : "50%"}
                                />
                                <div
                                  className={[
                                    screen.width > 540 ? "" : "text-center",
                                    "w-75 my-5",
                                  ].join(" ")}
                                >
                                  <p>
                                    𝑤ℎ𝑒𝑛 𝑏<sup>′</sup>
                                    &nbsp; > 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔
                                    𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑏
                                  </p>
                                  <br />
                                  <p>
                                    𝑤ℎ𝑒𝑛 𝑏<sup>′</sup>
                                    &nbsp; {"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎
                                    𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 𝑏
                                  </p>
                                </div>
                              </div>
                              <GoverningEquationsChart
                                eq={5}
                                title={`${hours} Hour Theta - Block Reward Exposure`}
                                info="Change of BTC Price
with respect to Change
in Block Reward"
                              />
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div
                          className={[
                            "dashboard-box d-flex",
                            screen.width > 540 ? "__lg" : "__xxl flex-column",
                          ].join(" ")}
                        >
                          <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                              <div
                                className={[
                                  "col-lg-4 d-flex align-items-center flex-column justify-content-center",
                                ].join(" ")}
                              >
                                <img
                                  src={formula6}
                                  alt=""
                                  width={screen.width > 540 ? "60%" : "50%"}
                                />
                                <div
                                  className={[
                                    screen.width > 540 ? "" : "text-center",
                                    "w-75 my-5",
                                  ].join(" ")}
                                >
                                  <p>
                                    𝑤ℎ𝑒𝑛 ℎ<sup>′</sup>
                                    &nbsp;> 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔
                                    𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 ℎ
                                  </p>
                                  <br />
                                  <p>
                                    𝑤ℎ𝑒𝑛 ℎ<sup>′</sup>
                                    &nbsp;{"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎
                                    𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 ℎ
                                  </p>
                                </div>
                              </div>
                              <GoverningEquationsChart
                                eq={6}
                                title={`${hours} Hour Rho - Hash Rate Exposure`}
                                info="Change of BTC Price
with respect to Change
in Hash Rate"
                              />
                            </Suspense>
                          </ErrorBoundry>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div
                          className={[
                            "dashboard-box d-flex",
                            screen.width > 540 ? "__lg" : "__xxl flex-column",
                          ].join(" ")}
                        >
                          <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                              <div
                                className={[
                                  "col-lg-4 d-flex align-items-center flex-column justify-content-center",
                                ].join(" ")}
                              >
                                <img
                                  src={formula7}
                                  alt=""
                                  width={screen.width > 540 ? "60%" : "50%"}
                                />
                                <div
                                  className={[
                                    screen.width > 540 ? "" : "text-center",
                                    "w-75 my-5",
                                  ].join(" ")}
                                >
                                  <p>
                                    𝑤ℎ𝑒𝑛 𝑑<sup>′</sup>
                                    &nbsp;> 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔
                                    𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 ℎ
                                  </p>
                                  <br />
                                  <p>
                                    𝑤ℎ𝑒𝑛 𝑑<sup>′</sup>
                                    &nbsp;{"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎
                                    𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓 ℎ
                                  </p>
                                </div>
                              </div>
                              <GoverningEquationsChart
                                eq={7}
                                title={`${hours} Hour Mu - Difficulty Rate Exposure`}
                                info="Change of BTC Price
with respect to Change
in Difficulty Rate"
                              />
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
              </Fragment>
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
  loadDashboardPageSuccessResearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoverningEquations);
