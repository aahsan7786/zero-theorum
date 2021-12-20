import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import {LANDING_CONSTANTS} from "../../constants/Constants";
import logo from "./../../assets/images/logo_1.png";
import backgroundImg from "./../../assets/images/landing_2.png";
import backgroundFooterImg from "./../../assets/images/landing_footer.png";
import "./landing.scss";

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
    backgroundSize: "101% 101%",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    position: "sticky",
    top: "0",
  },
  logo: {
    marginTop: "100px",
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
  loginBtn: {
    alignSelf: "flex-end",
    marginRight: "50px",
    background:
      "linear-gradient(90deg, rgba(229,111,4,1) 8%, rgba(250,172,7,1) 58%)",
    width: "110px",
    textAlign: "center",
    padding: "10px 0px",
    fontSize: "10px",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "40px",
    "&:hover": {
      background:
        "linear-gradient(to left, #ececec 50%, rgba(229,111,4,1) 50%) right",
      backgroundSize: "200%",
      transition: ".3s ease-out",
      color: "#faac07",
    },
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

  "@media only screen and (max-width: 480px)": {
    main: {
      position: "relative",
      top: "unset",
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
      margin: "30px",
    },
    about: {
      marginLeft: "0",
    },
    contact: {
      width: "calc(100% - 60px)",
      marginRight: "0",
      marginTop: "20px",
    },
    heading: {
      marginBottom: "20px",
    },
    rightsReserved: {
      marginTop: "20px",
    },
  },
});

const Landing2 = (props) => {
  const classes = useStyles(props);
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
        </div>
      </>
    );
  };
  return (
    <>
      <div className={clsx(classes.main, "no-scrollbar", "noselect")}>
        {/* <div className={classes.logo}>
          <img src={logo} width="150px"></img>
        </div> */}
        <div className={classes.loginBtn}>Investor login</div>
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
