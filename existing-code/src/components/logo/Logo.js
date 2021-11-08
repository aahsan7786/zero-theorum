import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import small_logo from 'Images/small_logo.png';
import big_logo from 'Images/big_logo.png';
import logo_mobile_big from 'Images/logo_mobile_big.png';
import './logo.scss';

const Logo = ({menuBig}) => {

    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isInnerPage, setIsInnerPage] = useState(false);

    const history = useHistory();

    const detectHeaderTheme = () => {
        const pathName = history.location.pathname.split('/');
        // pathName[1] !== 'quant-lab' && pathName[1] !== 'research' ? setIsInnerPage(false) : setIsInnerPage(true);
    };

    useEffect(() => {
        history.listen(() => {
            setIsOpenNav(false);
            detectHeaderTheme();
        });

        detectHeaderTheme(history.location.pathname);

        window.addEventListener('scroll', () => setIsOpenNav(false));
    }, [history]);

    return (
        <div className={`logoAll ${isInnerPage ? 'inner-theme' : ''}`}>
            <div className="">
                <div className="row">
                    <div
                        className={`col-12 d-flex ${screen.width > 540 ? 'justify-content-start' : 'justify-content-center'} align-items-center`}>
                        <Link to="/" className="logoAll-logo">
                            <div className={`d-flex align-items-center ${screen.width > 540 ? '' : 'justify-content-center'}`}>
                                {screen.width > 540 && menuBig && <img src={big_logo} alt="" className="big-logo"/>}
                                {screen.width > 540 && !menuBig && <img src={small_logo} alt="" className="small-logo"/>}
                                {screen.width < 540 && <img src={logo_mobile_big} alt="" className="logo-mobile-big"/>}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Logo;
