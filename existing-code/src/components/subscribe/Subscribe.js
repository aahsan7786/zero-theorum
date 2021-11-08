import React, { useState } from 'react';
import { connect } from 'react-redux';
import { openModal } from 'Store/modal/actions';
import { useFormik } from 'formik';
import './subscribe.scss';
import { subscribeSchema } from "Components/validationSchema/ValidationSchema";

const Subscribe = ({ openModal }) => {

    const [subscriptionType, setSubscriptionType] = useState([
        {
            title: 'Backtests',
            value: 'Backtests',
        },
        {
            title: 'Academic articles',
            value: 'Academic articles'
        },
        {
            title: 'Research',
            value: 'Research'
        },
        {
            title: 'Education',
            value: 'Education'
        }
    ]);

    const formik = useFormik({
        initialValues: {
            email: '',
            type: 'all',
        },
        validationSchema: subscribeSchema,
        onSubmit: values => {
            openModal('done');
            formik.resetForm();
        },
    });

    return (
        <section className="section subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="subscribe-box">
                                <p className="subtitle">Quant lab</p>
                                <p className="title-2">Subscribe to Our Blog</p>
                                <p>Stay up to date with the latest tips and news.</p>
                                <div className="subscribe-options">
                                    {
                                        subscriptionType.map((type, key) => {
                                            return (
                                                <label className="input-container input-container-check" key={key}>
                                                    <input
                                                        type="radio"
                                                        name="type"
                                                        value={type.value}
                                                        className="input-check"
                                                        onChange={formik.handleChange}
                                                    />
                                                    <div className="input-check-icon" />
                                                    <div className="input-check-title">{type.title}</div>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                                <div className="input-container input-container-row">
                                    <input
                                        type="text"
                                        name="email"
                                        className="input"
                                        placeholder="E-mail"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        />
                                    <button className="btn" type="submit">
                                        <span className="btn-title">Send</span>
                                    </button>
                                    <span className="input-error">{formik.errors.email}</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

const mapDispatchToProps = {
     openModal
};

export default connect(null, mapDispatchToProps)(Subscribe);
