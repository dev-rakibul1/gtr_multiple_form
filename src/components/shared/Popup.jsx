import React from "react";
import { FaCheck } from "react-icons/fa";

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-md mx-auto my-6">
        {/* Popup content */}
        <div className="relative flex flex-col w-full bg-white border rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          {/* <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div> */}
          {/* Content */}
          <div className="relative p-6 flex-auto  justify-center items-center flex">
            {/* Your popup content here */}
            <div className="flex justify-center items-center flex-col">
              <FaCheck className="text-5xl text-green-600" />
              <h1 className="font-bold text-3xl py-2 text-gradient">
                Thank you!
              </h1>
              <h4 className="font-light">
                Your application has successfully submitted!!!
              </h4>
              <button
                className="mt-7 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
          {/* Footer */}
          {/* <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Popup;
