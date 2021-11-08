import React from "react";
import "./mission.scss";
import icon1 from "../../../assets/images/icons/Zero-BIAS.svg";
import icon2 from "../../../assets/images/icons/Zero-Cost.svg";
import icon3 from "../../../assets/images/icons/Zero-Theorem.svg";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="mission">
      <div className="abstract-circle __1" />
      <div className="abstract-circle __2" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-title">
              <p className="subtitle">
                0100100001000101010011000100110001001111
              </p>
              <h3 className="title-1 title-border">Our mission</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-4">
          We believe that Bitcoin volatility arises from a high degree of
          pricing/valuation uncertainty experienced by active market
          participants. This propagates inefficiency where prices often become
          dislocated from their fair equilibrium over a prolonged period. Our
          Mission is to address this inefficiency through the development of
          theoretical models and empirical proofs.
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="mission-box" data-num="01">
              <div className="mission-box-icon">
                <img src={icon1} alt="Zero BIAS" />
              </div>
              <div className="mission-box-title">
                <h3 className="title-3">ZERO INEFFICIENCY</h3>
              </div>
              <div className="mission-box-description">
                <p>
                  Fair value pricing models are established using a range of
                  econometric and machine learning methods.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mission-box" data-num="02">
              <div className="mission-box-icon">
                <img src={icon2} alt="Zero Cost" />
              </div>
              <div className="mission-box-title">
                <h3 className="title-3">ZERO INTERVENTION</h3>
              </div>
              <div className="mission-box-description">
                <p>
                  Using a systematic and automated approach trade execution is
                  deployed without human intervention.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mission-box" data-num="03">
              <div className="mission-box-icon">
                <img src={icon3} alt="Zero Theorem" />
              </div>
              <div className="mission-box-title">
                <h3 className="title-3">ZERO THEOREM</h3>
              </div>
              <div className="mission-box-description">
                <p>
                  The performance of trades are used via a reinforcement learner
                  to perform empirical proofs. Over many cycles of practical
                  validation the system formulates its own coefficient estimates
                  of the governing equations.
                </p>
              </div>
            </div>
          </div>
          {/*<Link to="/quant-lab" className="btn mx-auto mt-3">*/}
          {/*    <span className="btn-title">ABOUT</span>*/}
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Mission;
