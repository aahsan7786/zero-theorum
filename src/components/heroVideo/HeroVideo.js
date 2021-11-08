import React, { useState } from 'react';
import video from '../../assets/video/hero.mp4';

const HeroVideo = () => {

    const [onLoad, setOnLoad] = useState(false);

    return(
        <div className="hero-video">
            <video
                className={`hero-video-item ${ onLoad ? 'is-visible' : '' }`}
                width="100%"
                height="100%"
                preload={'auto'}
                loop
                muted
                playsInline
                autoPlay
                onLoadedData={() => setOnLoad(true)}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )

};

export default HeroVideo;
