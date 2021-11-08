import React from "react";
import "./tabButtons.scss";

const Feedback = () => {
  return (
    <div className="feedback-block">
      <p className="feedback-yellow">FEEDBACK FORM</p>
      <p className="feedback-description">
        We could love to hear your thoughts, suggestions, concerns with anything
        so we can improve our platform!
      </p>
      <p>Feedback Type</p>
      <div className="feedback-radio">
        <div className="feedback-item">
          <label className="feedback-label" htmlFor="comments">
            Comments
          </label>
          <input
            className="feedback-radiobutton"
            type="radio"
            name="feedback"
            id="comments"
          />
        </div>
        <div className="feedback-item">
          <label className="feedback-label" htmlFor="suggestions">
            Suggestions
          </label>
          <input
            className="feedback-radiobutton"
            type="radio"
            name="feedback"
            id="suggestions"
          />
        </div>
        <div className="feedback-item">
          <label className="feedback-label" htmlFor="questions">
            Questions
          </label>
          <input
            className="feedback-radiobutton"
            type="radio"
            name="feedback"
            id="questions"
          />
        </div>
        <div className="feedback-item">
          <label className="feedback-label" htmlFor="other">
            Other
          </label>
          <input
            className="feedback-radiobutton"
            type="radio"
            name="feedback"
            id="other"
          />
        </div>
      </div>

      <div className="feedback-form">
        <label htmlFor="describe">Describe your Feedback:</label>
        <textarea
          className="feedback-textarea"
          type="text"
          name="describe"
          rows="5"
        />
        <div className="feedback-data">
          <div className="feedback-data-item">
            <label htmlFor="feedback-name">Name:</label>
            <input
              type="text"
              className="feedback-input"
              name="feedback-name"
              id="feedbackName"
            />
          </div>
          <div className="feedback-data-item">
            <label htmlFor="feedback-email">Email:</label>
            <input
              type="email"
              className="feedback-input"
              name="feedback-email"
              id="feedbackEmail"
            />
          </div>
        </div>
        <div className="feedback-button">
          <button className="profile-button feedback-padding">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
