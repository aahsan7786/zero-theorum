import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {closeCookies} from 'Store/cookies/actions';
import './cookies.scss';
import {Link} from "react-router-dom";
import close from "Images/icons/close.svg";
import {ReactSVG} from "react-svg";

const Cookies = ({show, hz, closeCookies}) => {

    if (!show) {
        return null;
    }

    const handleCloseCookies = (el) => {
        if(el === 'agree'){
            document.cookie = "agree=true;";
        }
        closeCookies(el);
    };

    return (
        <div className={`cookies-bg ${show ? 'is-active' : ''}`}>
            <div className="cookies-box">
                <div className="cookies-done">
                    <div className="cookies-done-body row">
                        <div className="cookies-done-content col-lg-11">
                            <p className="cookies-done-description regular">We use cookies to improve your user
                                experience. Information published on this website does not constitute
                                investment advice, financial advice or trading advice. Do conduct your own due diligence
                                and consult your financial
                                adviser before making investment decisions.
                                By continuing onto our website, you agree to our&nbsp;
                                 <Link to="/privacy" className="blue">
                                     privacy policy
                                </Link> and <Link to="/disclaimer" className="blue">
                                    disclaimer
                                </Link>.</p>
                        </div>
                        <ReactSVG
                            renumerateIRIElements={false}
                            src={close}
                            wrapper="div"
                            onClick={() => handleCloseCookies('close')}
                            style={{zIndex: 2, width: '1rem', position: 'absolute', fill: '#000', right: '1rem',
                                top: '1rem'}}
                        />
                        <div className="agree" onClick={() => handleCloseCookies('agree')}>
                            Agree
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = ({cookiesReducer}) => {
    return cookiesReducer;
};

const mapDispatchToProps = {
    closeCookies
};

export default connect(mapStateToProps, mapDispatchToProps)(Cookies);
