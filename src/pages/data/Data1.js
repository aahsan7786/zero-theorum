import React, {useEffect, useState} from 'react';
import './data.scss';
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import {useFormik} from "formik";
import {dataSchema} from "Components/validationSchema/ValidationSchema";
import {openModal} from "Store/modal/actions";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";

const Data = ({openModal}) => {
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
        <section className="section hero inner-page">
            <div className="container backCircle">
                <div className="row">
                    <div className="col-12 d-flex flex-column justify-content-center vh-100">
                        <div className="h3 text-center mb-5">
                            Want API access to our data feeds?
                        </div>
                        <div className="lab-box">
                            <ErrorBoundry>
                                <form onSubmit={formik.handleSubmit}>
                                    <label
                                        className={`input-container ${formik.errors.name ? 'error' : ''} input-data`}>
                                        <span className="input-label">Name:</span>
                                        <span className="input-error">{formik.errors.name}</span>
                                        <input
                                            type="text"
                                            className="input"
                                            value={formik.values.name}
                                            name="name"
                                            onChange={formik.handleChange}/>
                                    </label>
                                    <label
                                        className={`input-container ${formik.errors.email ? 'error' : ''} input-data`}>
                                        <span className="input-label">E-mail:</span>
                                        <span className="input-error">{formik.errors.email}</span>
                                        <input
                                            type="text"
                                            className="input"
                                            value={formik.values.email}
                                            name="email"
                                            onChange={formik.handleChange}/>
                                    </label>
                                    <div className="feedback-action">
                                        <button className="btn lg" type="submit">
                                            <span className="btn-title">REGISTER INTEREST</span>
                                        </button>
                                    </div>
                                </form>
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

const mapDispatchToProps = {
    openModal
};

export default connect(null, mapDispatchToProps)(Data);
