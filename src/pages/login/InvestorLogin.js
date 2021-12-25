import React from "react";
import Login from "../../components/login/Login";
import backgroundImg from "./../../assets/images/landinggif.gif";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  main: {
    // background: "red",
    width: "100%",
    height: "100%",
    background: `url(${backgroundImg}) no-repeat center`,
  },
  loginConatiner: {
    width: "50%",
    height: "600px",
    margin: "auto",
    paddingTop: "5%",
  },
  "@media only screen and (max-width: 480px)": {
    loginConatiner: {width: "90%", paddingTop: "30%"},
  },
});
const InvestorLogin = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.main}>
      <div className={classes.loginConatiner}>
        <Login></Login>
      </div>
    </div>
  );
};
export default InvestorLogin;
