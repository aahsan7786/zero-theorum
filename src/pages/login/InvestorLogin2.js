import React from "react";
import Login from "../../components/login/Login";
import backgroundImg from "./../../assets/images/landing_2.png";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";

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
    paddingTop: "5%",
  },
  "@media only screen and (max-width: 480px)": {
    loginConatiner: {width: "90%", paddingTop: "30%", margin: "auto"},
  },
});
const InvestorLogin2 = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.main}>
      <div className={classes.loginConatiner}>
        <Login></Login>
      </div>
    </div>
  );
};
export default InvestorLogin2;
