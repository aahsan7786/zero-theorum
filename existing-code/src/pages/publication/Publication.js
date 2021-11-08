import React, {useState, useEffect} from 'react';
import './publication.scss';
import {Link, NavLink} from 'react-router-dom';
import Loader from "Components/loader/loader";
// import { Document, Page, } from 'react-pdf';
import {Document, Page,} from 'react-pdf/dist/esm/entry.webpack';
// import {Document, Page,  } from 'react-pdf/dist/umd/entry.webpack';
import pdfFiles from '../../assets/TheEconomicsofBitcoinPriceFormation.pdf';
import imagePDF from '../../assets/images/pdf.png';
import imagePDF2 from '../../assets/images/pdf2.png';
import imagePDF3 from '../../assets/images/pdf3.png';

import {toURLTransform} from "Components/globalFunctions/globalFunctions";
import ad from "Images/ad1.png";
// import pdf from '../../assets/reduce_variant_website_v15.pdf';

const Publication = () => {
    const [click, setClick] = useState(true);

    return (
        <section className="section hero inner-page">
            <div className="container">
                <div className="row">
                    <img src={ad} alt="ad" className="imageAdFixed"/>
                    <img src={ad} alt="ad" className="imageAdFixedHidden"/>
                    {/*<div className="h1 col-12 text-center mb-3">ZERO THEOREM</div>*/}
                    <div className="col-4 h5 text-center">
                        {/*<div className="mb-3 title-block">*/}
                        {/*    <b>*/}
                        {/*        /!*Part 1:*!/*/}
                        {/*        <br/>A Conceptual & Mathematical Framework</b>*/}
                        {/*    <br/><br/>“for Satoshi...”*/}
                        {/*</div>*/}
                        {/*<a onClick={() => {window.location.href="/pdf"}}>Something*/}
                        <Link to={'/pdf'}>
                            <div className="col-11 m-auto">
                                <img src={click ? imagePDF2 : imagePDF3} alt=""/>
                            </div>
                        </Link>
                        {/*</a>*/}
                    </div>
                    <div className="offset-1 col-4 h5 text-center">
                        <div className="mb-3 title-block">
                            <b>
                                <br/> Version history</b>
                        </div>
                        <div className="col-11 m-auto version-history">
                            <span onClick={() => setClick(!click)}>
                                <br/> V0.8, 02.06.2021
                            </span>
                            <span onClick={() => setClick(!click)}>
                                <br/> <br/> V0.7, 22.05.2021
                            </span>
                            <span onClick={() => setClick(!click)}>
                                <br/> <br/> V0.6, 02.05.2021
                            </span>
                            <span onClick={() => setClick(!click)}>
                                <br/> <br/> V0.4, 17.04.2021
                            </span>
                        </div>
                    </div>
                    {/*<div className="col-4 h5 text-center">*/}
                    {/*    <div className="mb-3 title-block">*/}
                    {/*        <b>Part 2:*/}
                    {/*            <br/>The Solution & Empirical Proof</b>*/}
                    {/*        <br/><br/>“for those that believe..”*/}
                    {/*    </div>*/}
                    {/*    <div className="col-11 m-auto">*/}
                    {/*        <img src={imagePDF} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-4 h5 text-center">*/}
                    {/*    <div className="mb-3 title-block">*/}
                    {/*        <b>Part 3:*/}
                    {/*            <br/>The Economic Consequences</b>*/}
                    {/*        <br/><br/>“for those that dont...”*/}
                    {/*    </div>*/}
                    {/*    <div className="col-11 m-auto">*/}
                    {/*        <img src={imagePDF} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*<p>Page {pageNumber} of {numPages}</p>*/}
        </section>
    )

};

export default Publication;
