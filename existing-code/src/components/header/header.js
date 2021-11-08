import React, { useState, useEffect } from "react";
import "./header.scss";
import { NavLink, useHistory } from "react-router-dom";
import bitcoin from "Images/icons/bitcoin.svg";
import user from "Images/icons/user.svg";
import { ReactSVG } from "react-svg";
import Modal from "react-modal";
import PopupForm from "../../pages/login/PopupForm";
import { useDispatch } from "react-redux";
import { hoursNumber } from "../../store/header-hours/action";
import Auth from "@aws-amplify/auth";

const Header = () => {
  const [active, setActive] = useState(24);
  const [userLogin, setUserLogin] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  // const history = useHistory();

  function chooseHours(active) {
    if (active !== 24 && !userLogin) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
    if (userLogin || active === 24) {
      setActive(active);
      dispatch(hoursNumber(active));
      // history.push("/");
    }
  }

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  const signOut = async () => {
    await Auth.signOut();
    setUserLogin(false);
  };

  const checkUser = async () => {
    let user = await Auth.currentAuthenticatedUser().catch(() =>
      console.log("Not signed in")
    );
    if (user !== undefined) {
      setUserLogin(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  useEffect(() => {
    dispatch(hoursNumber(24));
  }, []);

  return (
    <header className="col-lg-11 header">
      <div className="container">
        <div className="row">
          <div
            className={`${screen.width > 767 ? "" : "flex-column"}
             d-flex justify-content-between align-items-center header-fixed`}
          >
            <div
              className={`${
                screen.width > 600 ? "" : "justify-content-between"
              } d-flex header-hours`}
            >
              <div
                onClick={() => console.log("test")}
                className="crypto d-flex justify-content-center"
              >
                <ReactSVG
                  renumerateIRIElements={false}
                  src={bitcoin}
                  wrapper="div"
                  style={{ width: "1.4rem", marginRight: "0.5rem" }}
                />
                BTC
              </div>

              <button
                className={` ${active === 24 ? "active" : ""} timeButton`}
                onClick={() => chooseHours(24)}
              >
                24 Hour
              </button>

              {/* <button
                className={` ${active === 12 ? "active" : ""} timeButton`}
                onClick={() => chooseHours(12)}
              >
                12 Hour
              </button> */}

              <button
                className={` ${active === 6 ? "active" : ""} timeButton`}
                onClick={() => chooseHours(6)}
              >
                6 Hour
              </button>

              {/* <button
                className={` ${active === 3 ? "active" : ""} timeButton`}
                onClick={() => chooseHours(3)}
              >
                3 Hour
              </button> */}

              <button
                className={` ${active === 1 ? "active" : ""} timeButton`}
                onClick={() => chooseHours(1)}
              >
                1 Hour
              </button>
            </div>

            <div
              className={`${
                screen.width > 767 ? "" : "mt-4"
              } d-flex justify-content-center align-items-center`}
            >
              <NavLink to="/faq">
                <div className="d-flex justify-content-center align-items-center header-faq">
                  <div className="h4">
                    <b>FAQ</b>
                  </div>
                </div>
              </NavLink>
              {userLogin ? (
                <button onClick={signOut} className="loginButton">
                  LOGOUT
                </button>
              ) : (
                <button onClick={openModal} className="loginButton">
                  LOGIN
                </button>
              )}
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
        </div>
      </div>
    </header>
  );
};

export default Header;
