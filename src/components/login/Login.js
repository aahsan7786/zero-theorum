import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import TransitionButton from "../common/transitionButton";
import userIcon from "./../../assets/images/login/user.png";
import passIcon from "./../../assets/images/login/password.png";
import eyeIcon from "./../../assets/images/login/eye.png";
import {connect} from "react-redux";
import {login} from "../../store/user/actions";
import WithApiService from "../hoc/WithApiService";
import {useHistory} from "react-router-dom";
import Auth from "@aws-amplify/auth";
import Snackbar from "@material-ui/core/Snackbar";
import "./login.scss";
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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    const {api} = props;
    await api.login(userName, password).then((data) => {
      if (userName === "admin" && password === "test") {
        props.login({
          userInfo: {username: "hassan afzal", email: "hassanafzal@neurog.com"},
        });
        history.push("/dashboard");
        console.log(data);
      } else {
        setError(true);
        // alert("User Name or password not correct");
      }
    });
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.heading}>Login</div>
        <div className={classes.width}>
          <img src={userIcon} className={classes.icon}></img>
          <input
            className={clsx(classes.input)}
            type="text"
            placeholder="Username or mail"
            onChange={(e) => {
              setUserName(e.target.value);
            }}></input>
        </div>
        <div className={classes.width}>
          <img src={passIcon} className={classes.icon}></img>
          <input
            className={clsx(classes.input)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
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
            className={classes.loginBtn}
            onClick={handleLogin}></TransitionButton>
        </div>
        <div
          className={classes.width}
          style={{textAlign: "center", fontSize: "10px"}}>
          Are you interested in knowing what Zero Theorem holds for you?{" "}
          <a
            style={{textDecoration: "underline", cursor: "pointer"}}
            href="/#contact">
            Contact us
          </a>{" "}
          to get your Zero Theorem invitation
        </div>
      </div>
      <Snackbar
        autoHideDuration={6000000000}
        open={isError}
        onClose={() => setError(false)}
        anchorOrigin={{vertical: "top", horizontal: "right"}}>
        <div className={"myAlert"}>
          {/* <div>
            <img src={errorIcon} width={"25px"}></img>
          </div> */}
          <div>Invalid Username or password</div>
        </div>
      </Snackbar>
    </>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
