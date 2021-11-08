import React, { Suspense, useEffect, useState } from "react";
import "./subscription.scss";
import { connect } from "react-redux";
import { openModalData, openModal } from "Store/modal/actions";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import contactActive from "../../assets/images/icons/contact-active.svg";
import early from "../../assets/images/early.png";
import Modal from "react-modal";
import PopupFormSignUp from "../signup/SignUp";

const Subscription = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="section hero inner-page subscribe-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <div className="d-flex mb-4 align-items-center yellow">
                    <img
                      src={contactActive}
                      alt=""
                      className="link-thumb-default"
                    />
                    SUBSCRIPTION
                  </div>
                  <div>
                    We believe that everybody should have access to pricing
                    theory based on scientific methods with comprehensive
                    testing and pros and cons transparently presented. This not
                    only improves market quality but also pricing certainty. We
                    believe everybody should be able to evaluate their specific
                    use cases independently and have the means to do so without
                    any agenda or bias. We believe that quantitative methods
                    should not be limited to the most sophisticated investment
                    firms, rather be economically accessible for ANYONE.
                  </div>
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          <div className="col-lg-4 pack">
            <div className="yellow h3 text-center">
              <b>QUANTLAB</b>
            </div>
            <div className="text-center grey mb-3">
              <i>For Quantitative Researchers</i>
            </div>

            <div className="h3 text-center">
              <b>*$FREE*</b>
            </div>

            <b>
              <br />• &nbsp;Access to ZT-Learners per Time Horizon
              <br />• &nbsp;Access to Multiple Time Horizons
              <br />• &nbsp;Unlimited Backtesting
              <br />
              <br />• &nbsp;Access to documentation
              <br />• &nbsp;Access to Research Articles
              <br />
              <br />
            </b>
            <div className="pack-button">
              SIGN UP
            </div>
          </div>

          <div className="col-lg-4 pack">
            <div className="yellow h3 text-center">
              <b>CUSTOM API</b>
            </div>
            <div className="text-center grey mb-3">
              <i>For Business/Institutions</i>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <img src={early} alt="" width={100} />
              <div className="ml-2">
                <b>$449.95</b>
                <div className="grey">per month</div>
              </div>
            </div>
            <div className="h3 text-center"></div>

            <b>
              <br />• &nbsp;Dedicated API for Quantlab
              <br />
              <br />• &nbsp;Advanced Backtesting
              <div className="ml-4">
                • &nbsp;Alternative Execution Strategies
                <br />• &nbsp;Multi-Strategy Portfolio Optimisation
              </div>
              <br />
              <br />
            </b>
            <div  className="pack-button">
              WAITING LIST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  openModalData,
  openModal,
};

export default connect(null, mapDispatchToProps)(Subscription);
