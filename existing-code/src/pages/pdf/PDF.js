import React, {useState} from 'react';
import './pdf.scss';
import {Document, Page,} from 'react-pdf/dist/esm/entry.webpack';
import pdfFiles from '../../assets/Zerotheorem.pdf';
import ad from "Images/ad1.png";
import {connect, useSelector} from "react-redux";
import {defaultResources} from "Store/resources/actions";
import Loader from "Components/loader/loader";
import { Redirect } from "react-router-dom";

const PDF = () => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }
    const pdf = useSelector((item) => item.pdfReducer.pdf);

    if(pdf === undefined || !pdf){
        return (<Redirect to="/research" />);
    }

    return (
        <section className="section hero inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <div className={`col-12 d-flex ${screen.width > 540 ? '' : 'flex-column'}`}>
                            <div className="col-xs-12 col-lg-12">
                                <iframe
                                    src={pdf}
                                    frameBorder="0" height="850" width="100%">
                                </iframe>
                            </div>
                        </div>
                        {/*<object data={pdfFiles} type="application/pdf">*/}
                        {/*    <embed src={pdfFiles} type="application/pdf" />*/}
                        {/*</object>*/}
                        {/*<Document*/}
                        {/*    file={pdfFiles}*/}
                        {/*    onLoadSuccess={onDocumentLoadSuccess}*/}
                        {/*    className="documentPDF"*/}
                        {/*>*/}
                        {/*    {Array.from(new Array(numPages), (el, index) => (*/}
                        {/*        <Page*/}
                        {/*            width={screen.width/2}*/}
                        {/*            style={{height: 750}}*/}
                        {/*            key={`page_${index + 1}`}*/}
                        {/*            pageNumber={index + 1}*/}
                        {/*            className="documentPDF-page col-8"*/}
                        {/*        />*/}
                        {/*    ))}*/}
                        {/*</Document>*/}
                    </div>
                </div>
            </div>
        </section>
    )

};

export default PDF;
