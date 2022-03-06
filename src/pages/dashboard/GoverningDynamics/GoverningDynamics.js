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
import formula1 from "Images/equations/01.svg";
import formula2 from "Images/equations/02.svg";
import formula3 from "Images/equations/03.svg";
import formula4 from "Images/equations/04.svg";
import formula6 from "Images/equations/05.svg";
import formula7 from "Images/equations/06.svg";
import {useSelector} from "react-redux";
import DashboardBackground from "../DashboardBackground";
import "./GoverningDynamixs.scss";
import clsx from "clsx";
import DashboardBreadcrumb from "../DashboardBreadcrumb";

const GoverningEquationsChart = lazy(() =>
  import("Charts/governing-equations/GoverningEquations")
);
const GoverningEquationsGreeks = lazy(() =>
  import("Charts/governing-equations-greeks/GoverningEquationsGreeks")
);
const useStyles = makeStyles({});

const GoverningDynamics = (props) => {
  const classes = useStyles(props);
  const hours = useSelector((item) => item.hoursReducer.hours);

  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb
        currentPage={"Governing Dynamics"}></DashboardBreadcrumb>
      <div className="container_grid" id="governingDynamics">
        <div className="grid_child">
          <Info
            icon={dynamicsIconHover}
            heading={GOVERNING_DYNAMICS_INFO.heading}
            info={GOVERNING_DYNAMICS_INFO.info}></Info>
        </div>
        <div className="grid_child">
          <div className="derivedEqContainer">
            <ErrorBoundry>
              <Suspense fallback={<div />}>
                <div className="yellow_gd">
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
        <div className="grid_child child3 paddingTop_GD">
          <div className="chartContainer_GD" style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow_gd"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>{`${hours} Hour Gamma - Aggregate Substitution Rate Exposure`}</b>
                </div>
                <div className="formulaContainer">
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
        <div className="grid_child paddingTop_GD">
          <div className="chartContainer_GD" style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow_gd"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>
                    {`${hours} Hour Beta - Specific k Asset Price Exposure`}
                  </b>
                </div>

                <div className="formulaContainer">
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
        <div className="grid_child paddingTop_GD">
          <div className="chartContainer_GD" style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow_gd"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>
                    {`${hours} Hour Delta - Specific k Asset Trade Volume Exposure`}
                  </b>
                </div>
                <div className="formulaContainer">
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
        <div className="grid_child paddingTop_GD">
          <div className="chartContainer_GD" style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow_gd"
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}>
                  <b>{`${hours} Hour Phi - Transactional Velocity Exposure`}</b>
                </div>
                <div className="formulaContainer">
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
        <div className="grid_child paddingTop_GD">
          <div className="chartContainer_GD" style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow_gd"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  <b>{`${hours} Hour Rho - Hash Rate Exposure`}</b>
                </div>
                <div className="formulaContainer">
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
        <div className="grid_child paddingTop_GD">
          <div className="chartContainer_GD" style={{display: "flex"}}>
            <ErrorBoundry>
              <Suspense fallback={<LoadingIndicator />}>
                <div
                  className="yellow_gd"
                  style={{position: "absolute", marginLeft: "10px"}}>
                  {`${hours} Hour Mu - Difficulty Rate Exposure`}
                </div>
                <div className="formulaContainer">
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
