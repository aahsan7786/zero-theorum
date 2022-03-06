import React, {useState} from "react";
import "./Accordion.scss";
import {Document, Page} from "react-pdf";
import {Link} from "react-router-dom";
import {setPdf} from "Store/pdf/actions";
import {connect} from "react-redux";
import arrowRightIcon from "Images/icons/arrow-right.svg";

function Accordion(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }
  return (
    <div
      className="accordion_section"
      style={{height: props.isActive ? "550px" : ""}}>
      <button
        className={`accordion ${props.isActive ? "accordion_onClick" : ""}`}
        onClick={() => {
          props.setOpenAccordian(props.id);
        }}>
        <div className={"accordion_title_container"}>
          <p className="accordion_title">{props.title}</p>
          <img
            src={arrowRightIcon}
            style={{
              transform: !props.isActive ? "rotate(90deg)" : "rotate(270deg)",
              width: "10px",
              height: "10px",
            }}></img>
        </div>
      </button>

      <div className={`accordion_content ${props.isActive ? "active" : ""}`}>
        <div className="d-flex">
          {props.pageFile &&
            props.pageFile.map((item, i) => (
              <Link to="/pdf" key={i}>
                <Document
                  className="mr-3 position-relative"
                  file={item.pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onClick={() => {
                    props.setPdf(item.pdf);
                  }}>
                  <Page
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    width={250}
                    wrap="false"
                  />
                  <p className="resource-desc text-center mt-3">
                    {item.description}
                  </p>
                </Document>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  setPdf,
};

export default connect(null, mapDispatchToProps)(Accordion);
