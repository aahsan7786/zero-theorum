import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/zerOtheorem_logo.svg';
import './footer.scss';

const Footer = (props) => {

    return(
        <footer className={`footer ${props.menuBig ? 'menuBig' : ''}`}>
            <div className="container">
                <div className="row">
                    {/*<div className="col-sm-4">*/}
                    {/*    <Link to="/" className="footer-logo">*/}
                    {/*        <img src={logo} alt="ZeroTheorem" />*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="col-lg-12">
                        <div className="footer-nav">
                            <nav className="nav">
                                <NavLink to="/privacy" className="link">Privacy Policy</NavLink>
                                <NavLink to="/terms" className="link">Terms and Conditions</NavLink>
                                <NavLink to="/disclaimer" className="link">Disclaimer</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright regular">© 2021 Zero Theorem.</p>
                    {/*<p className="copyright regular">Copyright &copy;2020 Zero Theorem. All rights reserved. Made by <a href="http://studiopresto.com/" target="_blank">Presto</a></p>*/}
                </div>
            </div>
        </footer>
    )

};

export default Footer;
