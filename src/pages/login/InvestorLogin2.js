import React from "react";
import Login from "../../components/login/Login";
// import backgroundImg from "./../../assets/images/landing_2.png";
import backgroundImg from "./../../assets/images/starry_bg.webp";
import sunImg from "./../../assets/images/sun_gif.gif";
import logo from "./../../assets/images/logoVector.png";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import {useHistory} from "react-router";

const useStyles = makeStyles({
  main: {
    // background: "red",
    width: "100%",
    height: "100%",
    background: `url(${backgroundImg}) no-repeat center`,
    backgroundSize: "cover",
  },

  loginConatiner: {
    width: "50%",
    height: "600px",
    marginLeft: "40%",
    // paddingTop: "5%",
    position: "absolute",
  },
  sun_image: {
    background: `url(${sunImg}) left  `,
    backgroundRepeat: "no-repeat",
    marginTop: "auto",
    borderRadius: "50%",
    height: "490px",
    width: "490px",
    top: "20%",
    // left: "5%",
    position: "absolute",
  },
  logoo: {
    margin: "20px",
    width: "95vw",
    marginLeft: "50px !important",
    cursor: "pointer",
  },
  "@media only screen and (max-width: 480px)": {
    loginConatiner: {width: "90%", paddingTop: "10vh", margin: "auto 5%"},
    sun_image: {
      background: `url(${sunImg}) center  `,
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
      position: "absolute",
      backgroundSize: "100% !important",
      borderRadius: "0",
      top: "auto",
      left: "auto",
    },
    logoo: {
      marginTop: "5%",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
const InvestorLogin2 = (props) => {
  const classes = useStyles(props);
  const history = useHistory();
  return (
    <>
      <div
        className={classes.logoo}
        onClick={() => {
          history.push("/");
        }}>
        <img src={logo} width="150px"></img>
      </div>
      <div className={classes.sun_image} />
      <div className={classes.main}>
        <div className={classes.loginConatiner}>
          <Login></Login>
        </div>
      </div>
    </>
  );
};
export default InvestorLogin2;
