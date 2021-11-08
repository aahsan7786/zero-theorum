import React, { Suspense, useEffect, useState } from "react";
import "./data.scss";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import { openModalData, openModal } from "Store/modal/actions";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import FlipCountdown from "@rumess/react-flip-countdown";
import right_arrow from "Images/icons/right_arrow_icon.svg";
import dataImage from "Images/data/data.jpg";
import dataPage from "../../assets/images/icons/dataPage-active.svg";

import Modal from "react-modal";
import PopupForm from "../../components/auth/DataPopup";
import video from "../../assets/video/data.mp4";
import videoDataNFT from "../../assets/video/nft.mp4";
// import videoM from "../../assets/video/data.webm";
// import videoO from "../../assets/video/data.ogv";
import zero_formula_video from "../../assets/video/Zero_Theorem_Animation.mp4";

const Data = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [onLoad, setOnLoad] = useState(false);

  const submitPass = () => {
    if (pass !== "") {
      openModal();
    }
  };

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  return (
    <section className="section hero inner-page data-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
              <ErrorBoundry>
                <Suspense fallback={<div />}>
                  <div className="d-flex mb-3 align-items-center yellow">
                    <img
                      src={dataPage}
                      alt=""
                      className="link-thumb-default mr-3"
                    />
                    DATA NFT
                  </div>
                  <div className="text-center ml-3 mr-3">
                    Each NFT provides the end beneficiary a lifetime access seat
                    to our database via an IP locked API key. There is a limited
                    amount of seats available, which we will systematically
                    distribute based on user demand and the on going
                    infrastructure improvements to our database. Future releases
                    will be announced via our discord channel well in advance
                    for interested users to participate in the auction.
                    <br />
                    <br />
                    Each NFT contains a piece of Zero Theorem proof embedded in
                    an artistic portrayal of current social causes. Pieces of
                    the Zero Theorem proof can be collected to assemble the
                    entire mathematical derivation. The lifetime access seat
                    will allow users to benefit from the continuous improvements
                    and upgrades of our database.
                  </div>
                </Suspense>
              </ErrorBoundry>
            </div>
          </div>
          <div
            className={`${
              screen.width > 540 ? "" : "flex-column"
            } col-10 d-flex justify-content-between mb-5`}
          >
            {/* <div className="text-center col icon-1">
              <div className="h4 yellow">ICON</div>
              <div className="h4 yellow">STEP 1</div>
              <div className="grey-text mt-3">PURCHASE NFT</div>
            </div>
            <ReactSVG
              className="col arr-right-1"
              renumerateIRIElements={false}
              src={right_arrow}
              wrapper="div"
              style={{
                fill: "#4472C4",
                width: "4rem",
              }}
            />
            <div className="text-center col icon-2">
              <div className="h4 yellow">ICON</div>
              <div className="h4 yellow">STEP 2</div>
              <div className="grey-text mt-3">UNLOCK CLUES & PASSWORD</div>
            </div>
            <ReactSVG
              className="col arr-right-2"
              renumerateIRIElements={false}
              src={right_arrow}
              wrapper="div"
              style={{
                fill: "#4472C4",
                width: "4rem",
              }}
            />
            <div className="text-center col icon-3">
              <div className="h4 yellow">ICON</div>
              <div className="h4 yellow">STEP 3</div>
              <div className="grey-text mt-3">RETURN BACK TO DATA NTF PAGE</div>
            </div>
            <ReactSVG
              className="col arr-right-3"
              renumerateIRIElements={false}
              src={right_arrow}
              wrapper="div"
              style={{
                fill: "#4472C4",
                width: "4rem",
              }}
            />
            <div className="text-center col icon-4">
              <div className="h4 yellow">ICON</div>
              <div className="h4 yellow">STEP 4</div>
              <div className="grey-text mt-3">CLAIM API CREDENTIALS</div>
            </div> */}
            <video
            className={`${onLoad ? "is-visible" : ""} mb-3`}
            width="100%"
            height="100%"
            preload={"auto"}
            loop
            muted
            playsInline
            autoPlay
            onLoadedData={() => setOnLoad(true)}
          >
            <source src={videoDataNFT} type="video/mp4" />
          </video>
          </div>
          <div className="col-lg-12">
            <div className="dashboard-box __resize d-flex flex-column align-items-center justify-content-center block-title">
              <div className="h3">
                <b>LIFETIME API ACCESS SEAT CONTAINS:</b>
              </div>
              <div className="p-3 ml-3">
                <br />
                1. Live Feed of all metrics shown on platform
                <br />
                2. Alternative Zero Theorem DRL Models.
                <br />
                3. Backtesting and Optimisation infrastructure
                <br />
                4. Full historical download of all metrics shown on platform
                <br />
                5. All financial. Blockchain and Social metrics used in Zero
                Theorem DRL models
                <br />
                6. Constant access to the on-going improvements and upgrades to
                database
                <br />
                <br />
                <i>
                  Note: Access seat comes with consultation from the Zero
                  Theorem team on API use cases and implementation processes for
                  automated execution systems.
                </i>
              </div>
            </div>
          </div>
          <div className="col-12 row form-block d-flex">
            <div className="col-lg-5">
              <div className="mb-3">
                <p className="resource-text">
                  API SEAT STATUS:{" "}
                  <span className="resource-green-text">AVAILABLE</span>
                </p>
                <p className="resource-market">GO TO MARKET PLACE</p>
              </div>
            </div>
            <div className="col-lg-5 offset-2">
              <div className="mb-3 d-flex justify-content-end align-items-center">
                <p className="resource-white-text mr-3">
                  {" "}
                  <b>
                    AUCTION <br /> HELD IN
                  </b>
                </p>
                <FlipCountdown
                  size="small"
                  yearTitle="Year"
                  monthTitle="Months"
                  dayTitle="Days"
                  hourTitle="Hours"
                  minuteTitle="Minutes"
                  secondTitle="Seconds"
                  hideYear
                  hideMonth
                  hideSecond
                  titlePosition="bottom"
                  endAtZero
                  style={{ margin: 0 }}
                  endAt={"2025-07-9 00:00:00"} // Date/Time
                />
              </div>
            </div>
          </div>
          <video
            className={`${onLoad ? "is-visible" : ""} mb-3`}
            width="100%"
            height="100%"
            preload={"auto"}
            loop
            muted
            playsInline
            autoPlay
            onLoadedData={() => setOnLoad(true)}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="col-12 row form-block d-flex">
            <div className="col-lg-6 offset-3">
              <div className="d-flex">
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  className="password password-70"
                  placeholder="PASSWORD"
                />
                <div className="generate" onClick={submitPass}>
                  SUBMIT
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className="style-modal"
            overlayClassName="style-overlay"
          >
            <PopupForm close={closeModal} />
          </Modal>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  openModalData,
  openModal,
};

export default connect(null, mapDispatchToProps)(Data);
