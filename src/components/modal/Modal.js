import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/modal/actions';
import './modal.scss';

const Modal = ({ isOpen, type, closeModal }) => {

    if(!isOpen) {
        return null;
    }

    const handleCloseModal = () => {
      closeModal('done');
    };

    return (
        <div className={`modal-bg ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-bg-close" onClick={handleCloseModal} />
            <div className="modal-box">
                <div className="modal-done">
                    <div className="modal-done-body">
                        <div className="modal-done-icon" />
                        <div className="modal-done-content">
                            <p className="title-2 modal-done-title">success</p>
                            <p className="modal-done-description regular yellow">Thankyou for your submission of interest. Our team will reach
                                out to you shortly for further instructions. If you would like to
                                contact us directly please use <a href="mailto:contact@zerotheorem.com" className="blue">contact@zerotheorem.com</a></p>
                            {/*<p className="modal-done-description regular yellow">Your data has been sent successfully!</p>*/}
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn lg modal-done-btn" onClick={handleCloseModal}>
                            <div className="btn-title">Ok</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = ({ modalReducer }) => {
  return modalReducer;
};

const mapDispatchToProps = {
    closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
