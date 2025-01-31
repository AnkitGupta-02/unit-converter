import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

export default function Modal({ children, onClose, className }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const finalclassNames = classNames(
    "fixed w-[350px] bg-white shadow-lg h-auto rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4",
    className
  );

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={finalclassNames}>
        <div>{children}</div>
      </div>
    </>,
    document.querySelector(".modal-container")
  );
}
