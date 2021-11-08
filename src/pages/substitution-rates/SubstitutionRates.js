import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./substitutionRates.scss";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import ad from "Images/ad1.png";
import marketActive from "Images/icons/market-metrics-active.svg";
import { useSelector } from "react-redux";

const SubstitutionRate = lazy(() =>
  import("../../components/charts/substitutionRate/SubstitutionRate")
);
const SubstitutionRateCorr = lazy(() =>
  import("../../components/charts/substitutionRateCorr/SubstitutionRateCorr")
);

const SubstitutionRates = (props) => {
  const hours = useSelector((item) => item.hoursReducer.hours);

  return (
    <section className="section hero substitutionRates-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="substitutionRates-body">
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
                          SUBSTITUTION RATES
                        </div>
                        <div>
                          Substitution Rates page explores Bitcoin’s absorption
                          of purchasing power from a range of traditional market
                          instruments in order to have a zero sum change of
                          aggregate value in the short term as defined by Zero
                          Theorem.
                        </div>
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_SP"}
                          title={`${hours} Hour SNP 500 vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between\n" +
                            "SNP500 Index Price and BTC Price. Here\n" +
                            "All Prices are in USD denomination. "
                          }
                          titleY={"SNP 500"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_SP"}
                          title={` ${hours} Hour SNP 500 Substitution Rate `}
                          info={
                            "Exchange rate of SNP 500 Index on a\n" +
                            "BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit SNP 500 Index. "
                          }
                          titleY={"SNP 500 / BTC"}
                          legend={"𝑆𝑁𝑃 500\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"DXY"}
                          title={`${hours} Hour DXY vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between DXY\n" +
                            "Index Price and BTC Price. Here All Prices\n" +
                            "are in USD denomination."
                          }
                          titleY={"DXY"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"DXY"}
                          title={`${hours} Hour DXY Substitution Rate`}
                          info={
                            "Exchange rate of DXY Index on a BTC\n" +
                            "unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit DXY Index."
                          }
                          titleY={"DXY / BTC"}
                          legend={"𝐷𝑋𝑌\n /𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_MGC"}
                          title={`${hours} Hour Gold vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between Gold\n" +
                            "Futures Index Price and BTC Price. Here All\n" +
                            "Prices are in USD denomination. "
                          }
                          titleY={"Gold"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_MGC"}
                          title={`${hours} Hour Gold Substitution Rate`}
                          info={
                            "Exchange rate of Gold Futures Index\n" +
                            "on a BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit Gold Futures Index."
                          }
                          titleY={"Gold / BTC"}
                          legend={"𝐺𝑜𝑙𝑑\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_YM"}
                          title={`${hours} Hour Dow Jones vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between Dow\n" +
                            "Jones Industrial Index Price and BTC Price.\n" +
                            "Here All Prices are in USD denomination."
                          }
                          titleY={"Dow Jones"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_YM"}
                          title={`${hours} Hour Dow Jones Substitution Rate`}
                          info={
                            "Exchange rate of Dow Jones\n" +
                            "Industrial Index on a BTC unit\n" +
                            "denomination. The Substitutional\n" +
                            "Rate represents the purchasing\n" +
                            "power of BTC to acquire 1 Unit Dow\n" +
                            "Jones Industrial Index."
                          }
                          titleY={"Dow Jones / BTC"}
                          legend={"𝐷𝑂𝑊\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_BZ"}
                          title={`${hours} Hour Crude Oil vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between Crude\n" +
                            "Oil Index Price and BTC Price. Here All\n" +
                            "Prices are in USD denomination."
                          }
                          titleY={"Crude Oil"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_BZ"}
                          title={`${hours} Hour Crude Oil Substitution Rate `}
                          info={
                            "Exchange rate of Crude Oil Index on\n" +
                            "a BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit Crude Oil Index."
                          }
                          titleY={"Crude Oil / BTC"}
                          legend={"𝑂𝐼𝐿\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"GDAXI"}
                          title={`${hours} Hour GDAX vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between GDAX\n" +
                            "Index Price and BTC Price. Here All Prices\n" +
                            "are in USD denomination."
                          }
                          titleY={"GDAX"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"GDAXI"}
                          title={`${hours} Hour GDAX Substitution Rate`}
                          info={
                            "Exchange rate of GDAX Index on a\n" +
                            "BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit GDAX Index."
                          }
                          titleY={"GDAX / BTC"}
                          legend={"𝐺𝐷𝐴𝑋\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"FTSE"}
                          title={`${hours} Hour FTSE vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between FTSE\n" +
                            "Index Price and BTC Price. Here All Prices\n" +
                            "are in USD denomination."
                          }
                          titleY={"FTSE"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"FTSE"}
                          title={`${hours} Hour FTSE Substitution Rate `}
                          info={
                            "Exchange rate of FTSE Index on a\n" +
                            "BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit FTSE Index."
                          }
                          titleY={"FTSE / BTC"}
                          legend={"𝐹𝑇𝑆𝐸\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_NIY"}
                          title={`${hours} Hour NIKKEI vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between NIKKEI\n" +
                            "Index Price and BTC Price. Here All Prices\n" +
                            "are in USD denomination."
                          }
                          titleY={"NIKKEI"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_NIY"}
                          title={`${hours} Hour NIKKEI Substitution Rate`}
                          info={
                            "Exchange rate of NIKKEI Index on a\n" +
                            "BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit NIKKEI Index."
                          }
                          titleY={"NIKKEI / BTC"}
                          legend={"𝑁𝐼𝐾𝐾𝐸𝐼\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_NG"}
                          title={`${hours} Hour Natural Gas vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between\n" +
                            "Natural Gas Index Price and BTC Price.\n" +
                            "Here All Prices are in USD denomination."
                          }
                          titleY={"Natural Gas"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_NG"}
                          title={`${hours} Hour Natural Gas Substitution Rate`}
                          info={
                            "Exchange rate of Natural Gas Index\n" +
                            "on a BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit Natural Gas Index."
                          }
                          titleY={"Natural Gas / BTC"}
                          legend={"𝐺𝐴𝑆\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_PL"}
                          title={`${hours} Hour Platinum vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between\n" +
                            "Platinum Index Price and BTC Price. Here\n" +
                            "All Prices are in USD denomination."
                          }
                          titleY={"Platinum"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_PL"}
                          title={`${hours} Hour Platinum Substitution Rate`}
                          info={
                            "Exchange rate of Platinum Index on\n" +
                            "a BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit Platinum Index."
                          }
                          titleY={"Platinum / BTC"}
                          legend={"𝑃𝐿𝐴𝑇𝐼𝑁𝑈𝑀\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg ">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRate
                          type={"_SI"}
                          title={`${hours} Hour Silver vs BTC Correlation Scatter`}
                          info={
                            "Exploring the relationship between Silver\n" +
                            "Index Price and BTC Price. Here All Prices\n" +
                            "are in USD denomination"
                          }
                          titleY={"Silver"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="dashboard-box __lg ">
                    <ErrorBoundry>
                      <Suspense fallback={<div />}>
                        <SubstitutionRateCorr
                          type={"_SI"}
                          title={`${hours} Hour Silver Substitution Rate`}
                          info={
                            "Exchange rate of Silver Index on a\n" +
                            "BTC unit denomination. The\n" +
                            "Substitutional Rate represents the\n" +
                            "purchasing power of BTC to acquire\n" +
                            "1 Unit Silver Index."
                          }
                          titleY={"Silver / BTC"}
                          legend={"𝑆𝐼𝐿𝑉𝐸𝑅\n/ 𝐵𝑇C"}
                        />
                      </Suspense>
                    </ErrorBoundry>
                  </div>
                </div>
                <div style={{ height: "2rem", width: "100%" }} />
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SubstitutionRates);
