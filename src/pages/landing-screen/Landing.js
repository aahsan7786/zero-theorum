import React from "react";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import {LANDING_CONSTANTS} from "../../constants/Constants";
import logo from "./../../assets/images/logo_1.png";
import backgroundImg from "./../../assets/images/starry_bg.webp";
// import backgroundImg from "./../../assets/images/landinggif.gif";
import backgroundFooterImg from "./../../assets/images/landing_footer.webp";
import "./landing.scss";
import TransitionButton from "../../components/common/transitionButton";
const useStyles = makeStyles({
  main: {
    // background: "red",
    width: "100%",
    height: "100%",
    background: `url(${backgroundImg}) repeat center`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundSize: "100% 100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    position: "sticky",
    top: "0",
  },
  logo: {
    marginTop: "100px",
  },
  head1: {
    color: "#E5EBFF",
    fontWeight: "1000",
    fontSize: "12px",
    marginTop: "40px",

    textAlign: "center",
    width: "80%",
  },
  head2: {
    fontSize: "34px",
    marginTop: "25px",

    textAlign: "center",
    width: "80%",
  },
  head2_2: {
    color: "#FAAC09",
  },
  loginBtn: {
    marginTop: "40px",
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
  submitBtn: {
    margin: "auto",
  },
  "@media only screen and (max-width: 480px)": {
    main: {
      position: "relative",
      top: "unset",
      backgroundSize: "200% 100%",
      backgroundPositionX: "-30px",
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
      display: "block",
      // margin: "30px",
      backgroundSize: "cover",
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
  },
});

const Landing = (props) => {
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
  return (
    <>
      <div className={clsx(classes.main, "no-scrollbar", "noselect")}>
        <div className={classes.logo}>
          <img src={logo} width="150px"></img>
        </div>
        <div className={classes.head1}>{LANDING_CONSTANTS.HEAD1} </div>
        <div className={classes.head2}>
          <span>{LANDING_CONSTANTS.HEAD2_1}</span>
          <span className={classes.head2_2}>{LANDING_CONSTANTS.HEAD2_2}</span>
        </div>
        <TransitionButton
          text="Investor login"
          className={classes.loginBtn}
          onClick={() => {
            history.push("/investorlogin");
          }}></TransitionButton>
      </div>
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

export default Landing;
