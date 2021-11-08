import React, {useState} from "react";
import PropTypes from "prop-types";
import {Document, Page} from "react-pdf";
import ModalBody from "./FileViewer";
import {Link} from "react-router-dom";
import {setPdf} from "Store/pdf/actions";
import {connect} from "react-redux";

const AccordionBox = ({data: {title, pageFile, collapsed}, setPdf}) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
    const [modalIsOpen, setIsOpen] = useState(false);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function openModal() {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        setIsOpen(false);
        document.body.style.overflow = "unset";
    }


    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div className={`accordion-box ${isCollapsed ? "" : "is-active"}`}>
            <div
                className="accordion-box-header"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <div className="accordion-btn"/>
                <div className="accordion-title title-4 yellow">
                    <p>{title}</p>
                </div>
            </div>
            <div className="accordion-box-body">
                {/* <div className="accordion-description" onClick={openModal}> */}
                <div className="accordion-description-articles">
                    <div className="d-flex">
                        {pageFile.map((item, i) => (
                            <Link to="/pdf" key={i}>
                                <Document
                                    className="mr-3 position-relative"
                                    file={item.pdf}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    onClick={() => {
                                        console.log('CLICK');
                                        setPdf(item.pdf)
                                        console.log('CLICK 2')
                                    }}
                                >
                                    <Page
                                        pageNumber={pageNumber}
                                        renderAnnotationLayer={false}
                                        width={250}
                                        wrap="false"
                                    />
                                    <p className="resource-desc text-center mt-3">
                                        {item.description}
                                    </p>
                                    {/*<ModalBody file={item.pdf} />*/}
                                </Document>
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
            {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="style-modal"
        overlayClassName="style-overlay"
      >
        <PopupForm close={closeModal} />
      </Modal> */}
        </div>
    );
};

const mapDispatchToProps = {
    setPdf
};

export default connect(null, mapDispatchToProps)(AccordionBox);

AccordionBox.propTypes = {
    data: PropTypes.object.isRequired,
};
