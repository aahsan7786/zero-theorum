import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { openModal } from 'Store/modal/actions';
import { useFormik } from 'formik';
import { dataSchema } from "Components/validationSchema/ValidationSchema";

const Feedback = ({ openModal }) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            institution: '',
            message: '',
        },
        validationSchema: dataSchema,
        onSubmit: values => {
            openModal('done');
            formik.resetForm();
        }
    });

    return (
        <Fragment>
            <div className="feedback">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="feedback-title">
                            <h3 className="title-3">Want access to data feed VIA API?</h3>
                        </div>
                        <div className="feedback-description">
                            <p>Please fill out the contact form</p>
                        </div>
                        <div className="feedback-fields">
                            <form onSubmit={formik.handleSubmit}>
                                <label
                                    className={`input-container ${formik.errors.name ? 'error' : ''}`}>
                                    <span className="input-label">Name:</span>
                                    <span className="input-error">{formik.errors.name}</span>
                                    <input
                                        type="text"
                                        className="input"
                                        value={formik.values.name}
                                        name="name"
                                        onChange={formik.handleChange} />
                                </label>
                                <label
                                    className={`input-container ${formik.errors.email ? 'error' : ''}`}>
                                    <span className="input-label">E-mail:</span>
                                    <span className="input-error">{formik.errors.email}</span>
                                    <input
                                        type="text"
                                        className="input"
                                        value={formik.values.email}
                                        name="email"
                                        onChange={formik.handleChange} />
                                </label>
                                <label
                                    className={`input-container ${formik.errors.institution ? 'error' : ''}`}>
                                    <span className="input-label">Institution:</span>
                                    <span className="input-error">{formik.errors.institution}</span>
                                    <input
                                        type="text"
                                        className="input"
                                        value={formik.values.institution}
                                        name="institution"
                                        onChange={formik.handleChange} />
                                </label>
                                <div className="feedback-detail">
                                    <p>Please specify your use case for our direct api data feed?</p>
                                </div>
                                <label className="input-container">
                                    <span className="input-label">Message:</span>
                                    <textarea
                                        className="textarea"
                                        value={formik.values.message}
                                        name="message"
                                        onChange={formik.handleChange} />
                                </label>
                                <div className="feedback-more">
                                    <p>*Please note that custom API data feed is a paid service!*</p>
                                </div>
                                <div className="feedback-action">
                                    <button className="btn lg" type="submit">
                                        <span className="btn-title">Send</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

};

const mapDispatchToProps = {
   openModal
};

export default connect(null, mapDispatchToProps)(Feedback);
