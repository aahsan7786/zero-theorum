import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./auth.scss";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import Auth from "@aws-amplify/auth";
import { useHistory } from "react-router-dom";

const SignIn = ({ close }) => {
  const [recaptcha, setRecaptcha] = useState(false);

  const [forgotPass, setForgotPass] = useState(true);
  const [signUp, setSignUp] = useState(true);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName === "" || password === "") return;
    const user = await Auth.signIn(userName, password).catch((err) =>
      setErrorMessage(err.message)
    );

    if (user) {
      close();
    }
  };

  const handleContact = (e) =>{
    history.push('/contact');
  }

  const showForgotPass = () => {
    setForgotPass(false);
    setSignUp(true);
  };

  const showSignUp = () => {
    setSignUp(false);
    setForgotPass(true);
  };

  return (
    <div className="auth">
      <div style={{ display: forgotPass && signUp ? "block" : "none" }}>
        <p className="login-title">Login</p>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <div className="auth-form">
          <label className="auth-label" htmlFor="userName">
            Username:
          </label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="auth-input"
          />
        </div>
        <div className="auth-form">
          <label className="auth-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>

        <div className="d-flex justify-content-center">
          <ReCAPTCHA
            sitekey="6Lc684YcAAAAAJGG01D5ee2aFLKxHAFfqoZUb9fA"
            onChange={() => setRecaptcha(true)}
          />
        </div>

        <div className="d-flex">
          <button
            type="submit"
            className="auth-button"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <button
            type="submit"
            className="auth-button"
            onClick={handleContact}
          >
            Contact
          </button>
        </div>
        <div className="forgot-pass" onClick={showForgotPass}>
          Forgot Password?
        </div>
      </div>
      {forgotPass ? <></> : <ForgotPassword />}
      {signUp ? <></> : <SignUp />}
    </div>
  );
};

export default SignIn;
