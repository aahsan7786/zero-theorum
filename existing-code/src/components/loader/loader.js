import React, {useState} from 'react';
import './loader.scss';
import loaderImage from "Images/loader.png";
import video from "../../assets/video/video 1.mp4";

const Loader = (props) => {
    const [onLoad, setOnLoad] = useState(false);

    return(
        <div className="loaderBlock is-active" style={props.style}>
        {/*<div className="loader-video is-active">*/}
        {/*    <video*/}
        {/*        className={`loader-video-item ${ onLoad ? 'is-visible' : '' }`}*/}
        {/*        width="100%"*/}
        {/*        height="100%"*/}
        {/*        preload={'auto'}*/}
        {/*        loop*/}
        {/*        muted*/}
        {/*        playsInline*/}
        {/*        autoPlay*/}
        {/*        onLoadedData={() => {*/}
        {/*            console.log('trueeeeee'); setOnLoad(true)*/}
        {/*        }}>*/}
        {/*        <source src={video} type="video/mp4" />*/}
        {/*    </video>*/}
            <div className="h2 opacityAnimation">
                Loading
                <div className="dotAnimation">...</div>
            </div>
            <img className="loaderImg" src={loaderImage} alt="Loader"/>
        </div>
    )
};

export default Loader;
