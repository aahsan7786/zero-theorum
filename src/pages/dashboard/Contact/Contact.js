import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import DashboardBreadcrumb from "../DashboardBreadcrumb";
import DashboardBackground from "../DashboardBackground";
import backgroundImg from "Images/starry_bg.webp";
import sunImg from "Images/sun_gif.gif";
import clsx from "clsx";
const useStyles = makeStyles({
  container: {
    width: "50%",
    border: "1px solid grey",
    padding: "10px",
    fontSize: "14px",
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
    background: "rgba(39, 43, 51, 0.5)",
    color: "white",
    padding: "10px",
    width: "45%",
    border: "none",
    fontSize: "larger",
  },
  emailtext: {
    background: "rgba(39, 43, 51, 0.5)",
    color: "white",
    padding: "10px",
    width: "100%",
    border: "none",
    fontSize: "larger",
  },

  textArea: {
    height: "200px",
    width: "100%",
    background: "rgba(39, 43, 51, 0.5)",
    color: "white",
    padding: "10px",
    marginBottom: "10px",
    border: "none",
  },

  radio: {
    display: "flex",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "-20%",
  },
  btn: {
    width: "100px",
    height: "40px",
    borderRadius: "0px",
    lineHeight: "40px",
    fontSize: "14px",
    color: "white",
    backgroundColor: "#ddb611",
    "&:hover": {
      color: "#ddb611",
      backgroundColor: "transparent",
    },
  },
  root: {
    background: `url(${backgroundImg}) repeat center`,
    height: "100%",
    backgroundSize: "contain",
  },
  sun_image: {
    background: `url(${sunImg}) left  `,
    backgroundRepeat: "no-repeat",
    marginTop: "inherit",
    height: "550px",
    position: "absolute",
    zIndex: "-1",
    width: "100%",
    // margin:"0 0 0 40px"
  },
});

const handleSubmit = (e) => {
  e.preventDefault();
};
const Contact = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <DashboardBreadcrumb currentPage={"Contact"}></DashboardBreadcrumb>
      <h4 style={{color: "#deb513"}} className={"ml-5"}>
        Contact Form
      </h4>
      <p
        style={{fontSize: "12px", fontWeight: "bold", color: "#9b9b9c"}}
        className={"ml-5"}>
        We would love to hear your thoughts, suggestion, concerns with anything
        so we can improve our platform
      </p>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div className={clsx(classes.container, "ml-5")}>
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

            <div style={{fontSize: "large", width: "100%", margin: "10px"}}>
              Feedback Type
            </div>
            <div className={classes.radio}>
              <label htmlFor="rad1">
                <input type="radio" id="rad1" value="comments" name="radio" />
                Comments
              </label>

              <label htmlFor="rad2">
                <input
                  type="radio"
                  id="rad2"
                  value="Suggestions"
                  name="radio"
                />
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

            <input
              className={clsx(classes.btn, "btn", "mt-3")}
              type="submit"
              name=""
              id=""
            />
          </form>
        </div>
        <div>
          <img src={sunImg}></img>
        </div>
      </div>
    </div>
  );
};
export default Contact;
