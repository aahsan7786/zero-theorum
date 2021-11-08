import React, { useState } from "react";
import ReactDOM from "react-dom";
import FileViewer from "react-file-viewer";
import "./accordion.scss";

const ModalBody = ({ file }) => {
  const [shown, setShown] = useState(false);

  const modalWindow = () => (
    <div
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        left: 0,
        position: "fixed",
        top: 0,

        height: "100%",
        width: "100%",

        zIndex: 9999,
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          padding: ".5rem",
        }}
      >
        <button
          style={{
            backgroundColor: "#357edd",
            border: "none",
            borderRadius: "4px",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
          }}
          onClick={() => setShown(false)}
        >
          Close
        </button>
      </div>

      <FileViewer fileType="pdf" filePath={file} />
    </div>
  );
  return (
    <>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "transparent",
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
        }}
        onClick={() => setShown(true)}
      >
        Open modal
      </button>
      {shown && ReactDOM.createPortal(modalWindow(), document.body)}
    </>
  );
};

export default ModalBody;
