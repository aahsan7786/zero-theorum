import React, { useState } from "react";
import "./auth.scss";
import ConfirmEmail from "./ConfirmEmail";
import { useInput } from "./useInput";
import validateSignUp from "./validate";
import Auth from "@aws-amplify/auth";

const authSignUp = () => {
  const [confirmation, setConfirmation] = useState(true);

  const { values, errors, handleChange, handleSubmit, focusAfterError } =
    useInput(submitData, validateSignUp);

  async function submitData() {
    await Auth.signUp({
      username: values.name,
      password: values.confirmPassword,
      attributes: {
        email: values.email,
        name: values.name,
      },
    });
    setConfirmation(false);
  }

  return (
    <div className="auth">
      {confirmation ? (
        <div>
          <p className="sign-up-title">Sign Up</p>
          <div className="auth-form">
            <label className="auth-label" htmlFor="name">
              Username:
            </label>
            <input
              type="text"
              name="name"
              style={{ borderColor: errors.name ? "#ff0000" : "" }}
              value={values.name || ""}
              required
              onChange={handleChange}
              onFocus={focusAfterError}
              className="auth-input"
            />
          </div>
          {errors.name && <p className="error-text">{errors.name}</p>}

          <div className="auth-form">
            <label className="auth-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              style={{ borderColor: errors.email ? "#ff0000" : "" }}
              value={values.email || ""}
              required
              onChange={handleChange}
              onFocus={focusAfterError}
              className="auth-input"
            />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}

          <div className="auth-form">
            <label className="auth-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              style={{ borderColor: errors.password ? "#ff0000" : "" }}
              value={values.password || ""}
              required
              onChange={handleChange}
              onFocus={focusAfterError}
              className="auth-input"
            />
          </div>
          {errors.password && <p className="error-text">{errors.password}</p>}

          <div className="auth-form">
            <label className="auth-label" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              style={{ borderColor: errors.confirmPassword ? "#ff0000" : "" }}
              value={values.confirmPassword || ""}
              required
              onChange={handleChange}
              onFocus={focusAfterError}
              className="auth-input"
            />
          </div>
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}

          <button
            type="submit"
            className="auth-button auth-signup"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <ConfirmEmail />
      )}
    </div>
  );
};

export default authSignUp;
