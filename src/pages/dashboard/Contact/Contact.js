import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    width: "50%",
    height: "65vh",
    border: "1px solid grey",
    padding: "1rem",
  },

  form_body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  nameBox: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  emailBox: {
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    // justifyContent:'space-around',
    width: "100%",
  },
  text: {
    background: "rgba(14, 11, 0, 0.15)",
    color: "white",
    padding: "1rem",
    width: "45%",
    border: "1px solid grey",
    fontSize: "larger",
  },
  emailtext: {
    background: "rgba(14, 11, 0, 0.15)",
    color: "white",
    padding: "1rem",
    width: "100%",
    border: "1px solid grey",
    fontSize: "larger",
  },

  textArea: {
    height: "30rem",
    width: "100%",
    background: "rgba(14, 11, 0, 0.15)",
    color: "white",
    padding: "1rem",
    marginBottom: "10px",
  },

  radio: {
    display: "flex",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "-20%",
  },
  btn: {
    borderStyle: "none",
    padding: "1rem 3rem 1rem 3rem",
    backgroundColor: "#deb513",
    marginTop: "3rem",
  },
});

const handleSubmit = (e) => {
  e.preventDefault();
};
const Contact = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <h3>Contact Forum</h3>
      <h4>
        We would love to hear your thoughrs, suggestion, concerns with anything
        so we can improve our platform
      </h4>
      <div className={classes.container}>
        <form className={classes.form_body} onSubmit={handleSubmit}>
          <div className={classes.nameBox}>
            <input
              className={classes.text}
              type="text"
              placeholder="First Name"
            />
            <input
              className={classes.text}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className={classes.emailBox}>
            <input
              className={classes.emailtext}
              type="email"
              placeholder="E-mail"
            />
          </div>

          <textArea
            className={classes.textArea}
            placeholder="Describe your feedback"
          />

          <div style={{fontSize: "large", width: "100%"}}>Feedback Type</div>
          <div className={classes.radio}>
            <label htmlFor="rad1">
              <input type="radio" id="rad1" value="comments" name="radio" />
              comments
            </label>

            <label htmlFor="rad2">
              <input type="radio" id="rad2" value="Suggestions" name="radio" />
              Suggestions
            </label>

            <label htmlFor="rad3">
              <input type="radio" id="rad3" value="Questions" name="radio" />
              Questions
            </label>

            <label htmlFor="rad4">
              <input type="radio" id="rad4" value="Others" name="radio" />
              Others
            </label>
          </div>

          <input className={classes.btn} type="submit" name="" id="" />
        </form>
      </div>
    </>
  );
};
export default Contact;
