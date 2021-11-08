import React from 'react';
import {connect} from 'react-redux';
import {closeModalData, openModalData, openModal} from 'Store/modal/actions';
import './modalData.scss';
import {useFormik} from "formik";
import {dataModalSchema} from "Components/validationSchema/ValidationSchema";
import {withStyles} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import close from "Images/icons/close.svg";
import {ReactSVG} from "react-svg";

const ModalData = (props) => {

    if (!props.isOpenData) {
        return null;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            company: '',
            position: '',
            phone: '',
            phoneCode: '',
            email: '',
            checked: false
        },
        validationSchema: dataModalSchema,
        onSubmit: values => {
            props.closeModalData('data');
            props.openModal('done');
            formik.resetForm();
        }
    });

    const handleCloseModal = () => {
        props.closeModalData('data');
    };

    const GreenCheckbox = withStyles({
        root: {
            color: '#fff',
            '&$checked': {
                color: '#fff',
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    return (
        <div className={`dataModal-bg ${props.isOpenData ? 'is-active' : ''}`}>
            <div className="dataModal-bg-close" onClick={handleCloseModal}/>
            <div className="dataModal-box">
                <ReactSVG
                    renumerateIRIElements={false}
                    src={close}
                    wrapper="div"
                    onClick={handleCloseModal}
                    style={{zIndex: 2, width: '2rem', position: 'absolute', fill: '#fff', right: '1rem',
                        top: '1rem'}}
                />
                <div className="dataModal-done">
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
                                className={`input-container ${formik.errors.company ? 'error' : ''} col-6`}>
                                <span className="input-label">Company/Institution:</span>
                                <span className="input-error">{formik.errors.company}</span>
                                <input
                                    type="text"
                                    className="input"
                                    value={formik.values.company}
                                    name="company"
                                    placeholder="If n/a Please Specify"
                                    onChange={formik.handleChange}/>
                            </label>
                            <label
                                className={`input-container ${formik.errors.position ? 'error' : ''} col-6`}>
                                <span className="input-label">Position:</span>
                                <span className="input-error">{formik.errors.position}</span>
                                <input
                                    type="text"
                                    className="input"
                                    value={formik.values.position}
                                    name="position"
                                    placeholder="If n/a Please Specify"
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
                            {/*<label*/}
                            {/*    className={`input-container ${formik.errors.position ? 'error' : ''} col-3`}>*/}
                            {/*    <span className="input-label">Phone number:</span>*/}
                            {/*    <span className="input-error">{formik.errors.position}</span>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        className="input"*/}
                            {/*        value={formik.values.position}*/}
                            {/*        name="position"*/}
                            {/*        onChange={formik.handleChange}/>*/}
                            {/*</label>*/}
                            {/*<label*/}
                            {/*    className={`input-container ${formik.errors.phone ? 'error' : ''} col-9`}>*/}
                            {/*    /!*<span className="input-label"></span>*!/*/}
                            {/*    <span className="input-error">{formik.errors.phone}</span>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        className="input"*/}
                            {/*        value={formik.values.phone}*/}
                            {/*        name="phone"*/}
                            {/*        onChange={formik.handleChange}/>*/}
                            {/*</label>*/}
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
                            <FormGroup row className="col-12">
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={formik.values.checked}
                                            // onChange={formik.handleChange(false)}
                                            name="checkedB"
                                            color="primary"
                                            onChange={() => formik.setFieldValue("checked", !formik.values.checked)}
                                        />
                                    }
                                    label="I consent for my information to be stored according to Zero
Theorem privacy policy and to be contacted in relation to this
registration of interest. "
                                />
                            </FormGroup>
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
    closeModalData, openModalData, openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalData);
