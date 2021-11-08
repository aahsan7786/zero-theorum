import React from 'react';
import { connect } from 'react-redux';
import './infoModalGraph.scss';
import close from "Images/icons/close.svg";
import {ReactSVG} from "react-svg";

const InfoModalGraph = ({ show, onPress, text, style }) => {

    return (
        <div className={`modal-info ${show ? '' : 'close'}`} style={style}>
            <ReactSVG
                // className={["", scroll ? "scroll" : "", scrollTwo ? "scrollTwo" : ""].join(" ")}
                renumerateIRIElements={false}
                src={close}
                wrapper="div"
                onClick={onPress}
                style={{zIndex: 2, width: '0.8rem', fill: '#ccc', right: '1rem',
                    position: 'absolute',
                    top: '1rem'}}
            />
            <div className="modal-block">
                {text}
            </div>
        </div>
    )

};

export default InfoModalGraph;
