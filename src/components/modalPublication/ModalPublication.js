import React from 'react';
import {connect} from 'react-redux';
import {openModalPublication, closeModalPublication} from 'Store/modal/actions';
import './modalPublication.scss';
import {useFormik} from "formik";
import {publicationModalSchema} from "Components/validationSchema/ValidationSchema";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ModalPublication = (props) => {

    if (!props.isOpenPublication) {
        return null;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            phoneCode: '',
            email: '',
            message: '',
        },
        validationSchema: publicationModalSchema,
        onSubmit: values => {
            props.closeModalPublication('formPublic');
            props.openModal('done');
            formik.resetForm();
        }
    });

    const handleCloseModal = () => {
        props.closeModalPublication('formPublic');
    };

    return (
        <div className={`publicationModal-bg ${props.isOpenPublication ? 'is-active' : ''}`}>
            <div className="publicationModal-bg-close" onClick={handleCloseModal}/>
            <div className="publicationModal-box">
                <div className="publicationModal-done">
                    <div className="feedback-fields">
                        <form onSubmit={formik.handleSubmit}>
                            <label
                                className={`input-container ${formik.errors.firstName ? 'error' : ''} col-6`}>
                                <span className="input-label">First Name:</span>
                                <span className="input-error">{formik.errors.firstName}</span>
                                <input
                                    type="text"
                                    className="input"
                                    value={formik.values.firstName}
                                    name="firstName"
                                    onChange={formik.handleChange}/>
                            </label>
                            <label
                                className={`input-container ${formik.errors.lastName ? 'error' : ''} col-6`}>
                                <span className="input-label">Last Name:</span>
                                <span className="input-error">{formik.errors.lastName}</span>
                                <input
                                    type="text"
                                    className="input"
                                    value={formik.values.lastName}
                                    name="lastName"
                                    onChange={formik.handleChange}/>
                            </label>
                            <label
                                className={`input-container ${formik.errors.phone ? 'error' : ''} col-12`}>
                                <span className="input-label">Phone number:</span>
                                <span className="input-error">{formik.errors.phone}</span>
                                <PhoneInput
                                    inputClass="input"
                                    buttonClass="phoneCode"
                                    dropdownClass="dropdownPhone"
                                    country={'us'}
                                    value={formik.values.phone}
                                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                                />
                            </label>
                            <label
                                className={`input-container ${formik.errors.email ? 'error' : ''} col-12`}>
                                <span className="input-label">E-mail:</span>
                                <span className="input-error">{formik.errors.email}</span>
                                <input
                                    type="text"
                                    className="input"
                                    value={formik.values.email}
                                    name="email"
                                    onChange={formik.handleChange}/>
                            </label>
                            <label className={`input-container ${formik.errors.message ? 'error' : ''} col-12`}>
                                <span className="input-label">Tell us why you would like early access?:</span>
                                <textarea
                                    className="textarea"
                                    value={formik.values.message}
                                    name="message"
                                    onChange={formik.handleChange}/>
                            </label>
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
    )

};

const mapStateToProps = ({modalReducer}) => {
    return modalReducer;
};

const mapDispatchToProps = {
    openModalPublication, closeModalPublication
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPublication);
