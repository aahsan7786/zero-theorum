import React, {useState} from 'react';
import './slideWho.scss';
import link from "Images/icons/mail.svg";

const SlideWho = ({image, name, job, description}) => {

    const [more, setMore] = useState(false);

    return (
        <>
            <img className="photo" src={image} alt=""/>
            <div className="name">
                {name}
            </div>
            <div className="mb-3 position d-flex justify-content-between slide-description">
                {job}
                <div>
                    <img src={link} alt=""/>
                </div>
            </div>
            <div className="offset-1">
                <div className={!more && "twoLine"}>
                    {description}
                </div>
                <div className="lead-more" onClick={() => setMore(!more)}>{more ? 'Make it smaller' : 'Read more'}</div>
                {/*<a className="lead-more" href='#'></a>*/}
            </div>
        </>
    )
};

export default SlideWho;
