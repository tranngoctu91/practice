import { divide } from "lodash";
import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="modal"></div>,
    document.querySelector("body")
  );
};

export default Modal;
