import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import TransitionButton from "../common/transitionButton";
import userIcon from "./../../assets/images/login/user.png";
import passIcon from "./../../assets/images/login/password.png";
import eyeIcon from "./../../assets/images/login/eye.png";

const useStyles = makeStyles({
  container: {
    height: "inherit",
    // boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    boxShadow: "inset 0px 2px 10px 2px #372f20",
    borderRadius: "5px",
    backgroundColor: "rgba(255, 255, 255, .15)",

    // backdropFilter: "blur(5px)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    background: "transparent",
    border: 0,
    borderBottom: "1px solid #9b9b9d",
    width: "100%",
    paddingBottom: "10px",
    paddingLeft: "25px",
    color: "#9b9b9d",
    fontSize: "13px",
    "&::placeholder": {
      color: "#9b9b9d",
      textAlign: "left",
    },
  },
  heading: {
    color: "#e9b25f",
    fontSize: "25px",
    fontWeight: "900",

    marginTop: "30px",
    marginBottom: "30px",
  },
  width: {
    width: "70%",
  },
  checkbox: {
    width: "10px",
    height: "10px",
    background: "transparent",
    border: "1px solid red",
  },
  forgotContainer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "10px",
    marginTop: "10px",
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
  },
  loginBtn: {
    width: "80px",
  },
  icon: {
    width: "12px",
    marginTop: "5px",
    marginLeft: "3px",
    position: "absolute",
  },
  eyeIcon: {
    marginLeft: "-20px",
    width: "10px",
    marginTop: "12px",
    position: "absolute",
    cursor: "pointer",
  },
});
const Login = (props) => {
  const classes = useStyles(props);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Login</div>
      <div className={classes.width}>
        <img src={userIcon} className={classes.icon}></img>
        <input
          className={clsx(classes.input)}
          type="text"
          placeholder="Username or mail"></input>
      </div>
      <div className={classes.width}>
        <img src={passIcon} className={classes.icon}></img>
        <input
          className={clsx(classes.input)}
          type={showPassword ? "text" : "password"}
          placeholder="Password"></input>
        <img
          src={eyeIcon}
          className={classes.eyeIcon}
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
          onMouseLeave={() => setShowPassword(false)}></img>

        <div className={clsx(classes.forgotContainer)}>
          <div className={classes.rememberMe}>
            <input type="checkbox" className={classes.checkbox}></input>
            Remember Me
          </div>
          <div>Forgot Password</div>
        </div>
      </div>

      <div>
        <TransitionButton
          text="Login"
          className={classes.loginBtn}></TransitionButton>
      </div>
      <div
        className={classes.width}
        style={{textAlign: "center", fontSize: "10px"}}>
        Are you interested in knowing what Zero Theorem holds for you?{" "}
        <href style={{textDecoration: "underline", cursor: "pointer"}}>
          Contact us
        </href>{" "}
        to get your Zero Theorem invitation
      </div>
    </div>
  );
};
export default Login;
