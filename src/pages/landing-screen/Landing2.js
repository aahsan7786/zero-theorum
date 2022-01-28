import React from "react";
import {makeStyles} from "@material-ui/styles";
import {useHistory} from "react-router-dom";
import clsx from "clsx";
import {LANDING_CONSTANTS} from "../../constants/Constants";
import logo from "./../../assets/images/logoVector.png";
import backgroundImg from "./../../assets/images/starry_bg.webp";
import backgroundFooterImg from "./../../assets/images/landing_footer.webp";
import "./landing.scss";
import sunImg from "./../../assets/images/sun_gif.gif";
// import sunImg from "./../../assets/images/sun.gif";

import loginImg from "./../../assets/images/Investor-LoginBTN.png";
import TransitionButton from "../../components/common/transitionButton";
const useStyles = makeStyles({
  main: {
    // background: "red",
    width: "100%",
    height: "100%",
    // background: `url(${backgroundImg}) repeat center`,
    background: `url(${backgroundImg}) center  `,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    // backgroundPosition: "-250px -21rem",
    // backgroundSize: "cover",
    // backgroundSize: "101% 101%",
    // backgroundSize: "contain",
    backgroundSize: " 50%",
    backgroundRepeat: "repeat",
    // backgroundPosition: '0px 0px',
    backgroundAttachment: "fixed",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    position: "sticky",
    top: "0",
  },
  logo: {
    marginTop: "-20px",
    width: "97vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sun_image: {
    background: `url(${sunImg}) left  `,
    backgroundRepeat: "no-repeat",
    marginTop: "inherit",
    height: "550px",
    position: "absolute",
    zIndex: "-1",
    width: "100%",
    // margin:"0 0 0 40px"
  },
  headingContainer: {
    alignSelf: "end",
    marginRight: "10%",
    marginTop: "10%",
  },
  head1: {
    color: "black",
    fontSize: "15px",
    background: "#E9B25F",
    marginTop: "40px",
    textAlign: "center",
    fontWeight: "bold",
    height: "40px",
    lineHeight: "40px",
    padding: "0px 10px",
  },
  head2: {
    fontSize: "40px",
    marginTop: "25px",

    textAlign: "center",
    // width: "80%",
  },
  head2_2: {
    display: "block",
  },
  footer: {
    width: "100%",
    height: "calc(100% - 150px)",
    position: "relative",

    paddingTop: "30px",

    background: `url(${backgroundFooterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundSize: "100% 100%",

    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  heading: {
    color: "#FAAC09",
    fontWeight: "1000",
    marginBottom: "30px",
  },
  input: {
    background: "transparent",
    border: 0,
    borderBottom: "1px solid #9b9b9d",
    width: "100%",
    paddingBottom: "10px",
    color: "#9b9b9d",
    fontSize: "13px",
    "&::placeholder": {
      color: "#9b9b9d",
      textAlign: "left",
    },
  },
  textArea: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "25px",
    marginTop: "40px",
  },
  about: {
    marginLeft: "50px",
    width: "80%",
    color: "#e0e0e0",
    fontSize: "14px",
    lineHeight: "25px",
    textAlign: "justify",
  },
  contact: {marginRight: "50px"},
  rightsReserved: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    textAlign: "center",
    fontSize: "10px",

    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  sun: {},
  web: {
    display: "flex",
  },
  mobile: {
    display: "none",
  },
  loginImgBtn: {
    marginTop: "60px",
    textAlign: "center",
    paddingRight: "20px",
  },
  submitBtn: {
    margin: "auto",
  },
  "@media only screen and (max-width: 480px)": {
    web: {
      display: "none",
    },
    mobile: {
      display: "flex",
    },
    main: {
      position: "relative",
      top: "unset",
      // backgroundSize: "auto",
      backgroundSize: "40%",
      alignItems: "center",
    },
    head1: {
      fontSize: "9px",
      width: "60%",
    },
    head2: {
      fontSize: "17px",
      "&>span": {display: "block"},
    },
    footer: {
      backgroundPositionY: "bottom",
      height: "max-content",
      backgroundSize: "100vh !important",

      display: "block",
      margin: "0px",
      padding: "0px",
      // backgroundSize: "cover",
    },
    about: {
      marginLeft: "30px",
    },
    contact: {
      width: "calc(100% - 60px)",
      marginRight: "0",
      marginTop: "20px",
      marginLeft: "30px",
    },
    heading: {
      marginBottom: "20px",
    },
    rightsReserved: {
      marginTop: "20px",
    },
    sun: {
      background: `url(${sunImg})`,
      width: "50%",
      height: "225px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    logo: {
      // marginTop: "100px",
      width: "95vw",
      display: "flex",
      marginTop: "40px",
      justifyContent: "center",
      alignItems: "center",
    },
    headingContainer: {
      alignSelf: "center",
      marginRight: "0",
      marginTop: "0",
    },
    loginImgBtn: {
      marginTop: "30px",
      textAlign: "center",
    },
  },
});

const Landing2 = (props) => {
  const classes = useStyles(props);
  const history = useHistory();

  const getAbout = () => {
    return (
      <>
        <div className={classes.heading}>ABOUT</div>
        <div>{LANDING_CONSTANTS.ABOUT}</div>
      </>
    );
  };
  const getContact = () => {
    return (
      <>
        <div className={classes.heading}>CONTACT</div>
        <div className={classes.form}>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="First Name"></input>
          </div>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Last Name"></input>
          </div>

          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Email"></input>
          </div>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Information About"></input>
          </div>

          <div className={classes.textArea}>
            <textarea
              style={{height: "100px"}}
              className={classes.input}
              placeholder="Message"></textarea>
          </div>
          <div style={{gridColumnEnd: 3, gridColumnStart: 1}}>
            <TransitionButton
              text="Submit"
              className={classes.submitBtn}></TransitionButton>
          </div>
        </div>
      </>
    );
  };

  const getWebMainContent = () => {
    return (
      <div
        className={clsx(classes.main, "no-scrollbar", "noselect", classes.web)}>
        <div className={classes.loginImgBtn}>
          <div className={classes.logo}>
            <img src={logo} width="150px" style={{marginLeft: "20px"}}></img>

            {/* <img src={logo} width="150px"></img> */}
            <img
              style={{marginRight: "20px"}}
              src={loginImg}
              width="150px"
              onClick={() => {
                history.push("/investorlogin2");
              }}></img>
          </div>
          <div className={classes.sun_image} />
        </div>
        <div className={classes.headingContainer}>
          <div className={classes.head2}>
            <span>
              THE HOLY GRAIL OF <span style={{color: "#FAAC09"}}>BITCOIN</span>
            </span>
            <span className={classes.head2_2}>
              {LANDING_CONSTANTS.L2_HEAD2_2}
            </span>
          </div>
          <div className={classes.head1}>{LANDING_CONSTANTS.HEAD1} </div>
        </div>
      </div>
    );
  };

  const getMobileMainContent = () => {
    return (
      <div
        className={clsx(
          classes.main,
          "no-scrollbar",
          "noselect",
          classes.mobile
        )}>
        <div className={classes.logo}>
          <img src={logo} width="150px"></img>
        </div>
        <div className={classes.sun}></div>
        <div className={classes.headingContainer}>
          <div className={classes.head2}>
            <span>
              THE HOLY GRAIL OF <span style={{color: "#FAAC09"}}>BITCOIN</span>
            </span>
            <span className={classes.head2_2}>
              {LANDING_CONSTANTS.L2_HEAD2_2}
            </span>
          </div>
          <div className={classes.loginImgBtn}>
            <img src={loginImg} width="150px"></img>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {getWebMainContent()}
      {getMobileMainContent()}
      <div className={classes.footer}>
        <div className={classes.about}>{getAbout()}</div>
        <div className={classes.contact}>{getContact()}</div>
        <div className={classes.rightsReserved}>
          <div>2021 ZeroTheorem, All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Landing2;
