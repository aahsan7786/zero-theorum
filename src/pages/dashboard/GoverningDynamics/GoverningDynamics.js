import React, {Fragment, lazy, Suspense, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Info from "../../../components/InfoSction/Info";
import dynamicsIconHover from "./../../../assets/images/dashboardIcons/governingdynamic/SVG/Governing-hover.svg";
import {GOVERNING_DYNAMICS_INFO} from "../../../constants/Constants";
import {ReactSVG} from "react-svg";
import MathJax from "react-mathjax-preview";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import formula1 from "Images/formula1.png";
import formula2 from "Images/formula2.png";
import formula3 from "Images/formula3.png";
import formula4 from "Images/formula4.png";
import formula5 from "Images/formula5.png";
import formula6 from "Images/formula6.png";
import formula7 from "Images/formula7.png";
import {useSelector} from "react-redux";
import DashboardBackground from "../DashboardBackground";
import clsx from "clsx";
import DashboardBreadcrumb from "../DashboardBreadcrumb";

const GoverningEquationsChart = lazy(() =>
  import("Charts/governing-equations/GoverningEquations")
);
const GoverningEquationsGreeks = lazy(() =>
  import("Charts/governing-equations-greeks/GoverningEquationsGreeks")
);
const useStyles = makeStyles({
  grid_container: {
    position: "absolute",
    left: "5%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0.7em",
    width: "90%",
    height: "100vh",
  },
  griditem: {
    border: "1px solid grey",
    paddingTop: "10px",

    "&:nth-child(1)": {
      height: "250px",
    },
    "&:nth-child(3)": {
      height: "400px",
    },
    "&:nth-child(5)": {
      height: "400px",
    },
    "&:nth-child(7)": {
      height: "400px",
    },
  },
  chartContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: "37px 0 10px",
  },
  derivedEqContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
  },
  formulaContainer: {
    fontSize: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  paddingTop: {
    paddingTop: "10px",
  },
});

const GoverningDynamics = (props) => {
  const classes = useStyles(props);
  const hours = useSelector((item) => item.hoursReducer.hours);

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb
        currentPage={"Governing Dynamics"}></DashboardBreadcrumb>
      <div className={classes.grid_container}>
        <div className={classes.griditem}>
          <Info
            icon={dynamicsIconHover}
            heading={GOVERNING_DYNAMICS_INFO.heading}
            info={GOVERNING_DYNAMICS_INFO.info}></Info>
        </div>
        <div className={classes.griditem}>
          <div className={classes.derivedEqContainer}>
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div className="yellow">
                  <b>ZERO THEOREM REDUCED FORM EQUATION</b>
                </div>
                {/*<img src={formula} alt=""/>*/}
                <MathJax
                  style={{fontSize: 16}}
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
        <div className={classes.griditem}>
          <div className={classes.chartContainer} style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>{`${hours} Hour Gamma - Aggregate Substitution Rate Exposure`}</b>
                </div>
                <div className={classes.formulaContainer}>
                  <img
                    src={formula1}
                    alt=""
                    width={screen.width > 540 ? "60%" : "40%"}
                  />
                  <div className={"text-center"} style={{textAlign: "center"}}>
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
                  title=""
                  info="Change of BTC Price with respect to Change in Substitution Rates"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem}>
          <div className={classes.chartContainer} style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>
                    {`${hours} Hour Beta - Specific k Asset Price Exposure`}
                  </b>
                </div>

                <div className={classes.formulaContainer}>
                  <img
                    src={formula2}
                    alt=""
                    width={screen.width > 540 ? "60%" : "50%"}
                  />
                  <div className={"text-center"}>
                    <p>
                      𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                      &nbsp;{">"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓
                      𝑃
                      <sub>𝑘</sub>
                    </p>
                    <br />{" "}
                    <p>
                      𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                      &nbsp;{"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓
                      𝑃<sub>𝑘</sub>
                    </p>
                  </div>
                </div>
                <GoverningEquationsGreeks
                  greek="beta"
                  title=""
                  info="Change of BTC Price with respect to Change in Specific k Asset Price"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem}>
          <div className={classes.chartContainer} style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>
                    {`${hours} Hour Delta - Specific k Asset Trade Volume Exposure`}
                  </b>
                </div>
                <div className={classes.formulaContainer}>
                  <img
                    src={formula3}
                    alt=""
                    width={screen.width > 540 ? "60%" : "50%"}
                  />
                  <div className={"text-center"}>
                    <p>
                      𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                      &nbsp; {">"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛
                      𝑜𝑓 𝑅
                      <sub>𝑘</sub>
                    </p>
                    <br />{" "}
                    <p>
                      𝑤ℎ𝑒𝑛 1 − 𝑃<sup>′</sup>
                      &nbsp; {"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛
                      𝑜𝑓 𝑅<sub>𝑘</sub>
                    </p>
                  </div>
                </div>
                <GoverningEquationsGreeks
                  greek="delta"
                  title=""
                  info="Change of BTC Price with respect to Change in Specific k Asset Trade Volume"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem}>
          <div className={classes.chartContainer} style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>{`${hours} Hour Phi - Transactional Velocity Exposure`}</b>
                </div>
                <div className={classes.formulaContainer}>
                  <img
                    src={formula4}
                    alt=""
                    width={screen.width > 540 ? "80%" : "50%"}
                  />
                </div>
                <GoverningEquationsChart
                  eq={4}
                  title=""
                  info="Change of BTC Price with respect to Change in Transactional Velocity"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem}>
          <div className={classes.chartContainer} style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Rho - Hash Rate Exposure`}</b>
                </div>
                <div className={classes.formulaContainer}>
                  <img
                    src={formula6}
                    alt=""
                    width={screen.width > 540 ? "60%" : "50%"}
                  />
                  <div className={"text-center"}>
                    <p>
                      𝑤ℎ𝑒𝑛 ℎ<sup>′</sup>
                      &nbsp;{">"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑖𝑛𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓
                      ℎ
                    </p>
                    <br />
                    <p>
                      𝑤ℎ𝑒𝑛 ℎ<sup>′</sup>
                      &nbsp;{"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓
                      ℎ
                    </p>
                  </div>
                </div>
                <GoverningEquationsChart
                  eq={6}
                  title=""
                  info="Change of BTC Price with respect to Change in Hash Rate"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
        <div className={classes.griditem}>
          <div className={classes.chartContainer} style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  {`${hours} Hour Mu - Difficulty Rate Exposure`}
                </div>
                <div className={classes.formulaContainer}>
                  <img
                    src={formula7}
                    alt=""
                    width={screen.width > 540 ? "60%" : "50%"}
                  />
                  <div className={"text-center"}>
                    <p>
                      𝑤ℎ𝑒𝑛 𝑑<sup>′</sup>
                      &nbsp;{">"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓
                      ℎ
                    </p>
                    <br />
                    <p>
                      𝑤ℎ𝑒𝑛 𝑑<sup>′</sup>
                      &nbsp;{"<"} 0, 𝜋<sub>𝐵𝑇𝐶</sub> 𝑖𝑠 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑖𝑛𝑔 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛 𝑜𝑓
                      ℎ
                    </p>
                  </div>
                </div>
                <GoverningEquationsChart
                  eq={7}
                  title=""
                  info="Change of BTC Price with respect to Change in Difficulty Rate"
                />
              </Suspense>
            </ErrorBoundry>
          </div>
        </div>
      </div>
    </>
  );
};
export default GoverningDynamics;
