import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { openModal } from "Store/modal/actions";
import { useFormik } from "formik";
import { feedbackSchema } from "Components/validationSchema/ValidationSchema";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";

import emailjs from "emailjs-com";

const Feedback = ({ openModal }) => {
  const [radioCheck, setRadioCheck] = useState("");

  const sendEmail = (object) => {
    emailjs
      .send(
        "service_3i0lgui",
        "template_vokv1wb",
        object,
        "user_Q5lL7jeLTed0oRsxBlDTx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: feedbackSchema,
    onSubmit: (values) => {
      sendEmail(values);
      openModal("done");
      formik.resetForm();
      setRadioCheck("");
    },
  });

  const StyledRadio = withStyles({
    root: {
      color: "white",
    },
    colorPrimary: {
      color: "white !important",
    },
  })(Radio);

  return (
    <Fragment>
      <div className="feedback">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="feedback-title text-center">
              <h3 className="title-3">CONTACT FORM</h3>
            </div>
            <div className="feedback-description text-center">
              <p>
                We would love to hear your thoughts, suggestions, concerns with
                anything so we can improve our platform!
              </p>
            </div>
            <div className="feedback-description">
              <b>Feedback Type</b>
            </div>
            <div className="col-12">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                  value={radioCheck}
                  onChange={(event) => {
                    setRadioCheck(event.currentTarget.value);
                  }}
                >
                  <FormControlLabel
                    // classes={{root: styles.formControlLabelRoot, label: styles.formControlLabel}}
                    value="Comments"
                    control={<StyledRadio color="primary" />}
                    labelPlacement="top"
                    label="Comments"
                  />
                  <FormControlLabel
                    value="Suggestions"
                    control={<StyledRadio color="primary" />}
                    labelPlacement="top"
                    label="Suggestions"
                  />
                  <FormControlLabel
                    value="Questions"
                    control={<StyledRadio color="primary" />}
                    labelPlacement="top"
                    label="Questions"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<StyledRadio color="primary" />}
                    labelPlacement="top"
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="feedback-fields">
              <form onSubmit={formik.handleSubmit}>
                <label
                  className={`input-container ${
                    formik.errors.message ? "error" : ""
                  } col-12`}
                >
                  <span className="input-label">Describe your Feedback:</span>
                  <textarea
                    className="textarea"
                    value={formik.values.message}
                    name="message"
                    onChange={formik.handleChange}
                  />
                </label>
                <label
                  className={`input-container ${
                    formik.errors.name ? "error" : ""
                  } col-6`}
                >
                  <span className="input-label">Name:</span>
                  <span className="input-error">{formik.errors.name}</span>
                  <input
                    type="text"
                    className="input"
                    value={formik.values.name}
                    name="name"
                    onChange={formik.handleChange}
                  />
                </label>
                <label
                  className={`input-container ${
                    formik.errors.email ? "error" : ""
                  } col-6`}
                >
                  <span className="input-label">E-mail:</span>
                  <span className="input-error">{formik.errors.email}</span>
                  <input
                    type="text"
                    className="input"
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                  />
                </label>
                {/*<label*/}
                {/*    className={`input-container ${formik.errors.institution ? 'error' : ''}`}>*/}
                {/*    <span className="input-label">Institution:</span>*/}
                {/*    <span className="input-error">{formik.errors.institution}</span>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        className="input"*/}
                {/*        value={formik.values.institution}*/}
                {/*        name="institution"*/}
                {/*        onChange={formik.handleChange} />*/}
                {/*</label>*/}
                {/*<div className="feedback-detail">*/}
                {/*    <p>Please specify your use case for our direct api data feed?</p>*/}
                {/*</div>*/}

                {/*<div className="feedback-more">*/}
                {/*    <p>*Please note that custom API data feed is a paid service!*</p>*/}
                {/*</div>*/}
                <div className="feedback-action">
                  <button className="btn lg" type="submit">
                    <span className="btn-title">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  openModal,
};

export default connect(null, mapDispatchToProps)(Feedback);
