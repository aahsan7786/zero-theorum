import React, {useState} from 'react';
import { connect } from 'react-redux';
import './infoComponent.scss';
import close from "Images/icons/close.svg";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const InfoComponent = ({ text }) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <ReactSVG
                renumerateIRIElements={false}
                src={information}
                wrapper="div"
                onClick={() => {
                    setShow(!show)
                }}
                style={{marginLeft: '1rem', zIndex: 2, width: '1.4rem', fill: '#ccc', right: '2rem'}}
            />

            <div className={`single-info ${show ? '' : 'close'}`}>
                <ReactSVG
                    renumerateIRIElements={false}
                    src={close}
                    wrapper="div"
                    onClick={() => setShow(false)}
                    style={{zIndex: 2, width: '1.4rem', position: 'absolute', fill: '#ccc', right: '1rem',
                        top: '1rem'}}
                />
                <div className="modal-block">
                    {text}
                </div>
            </div>
        </div>
    )
};

export default InfoComponent;
