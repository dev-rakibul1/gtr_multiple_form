import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Toast = ({ setShowToast, showToast }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeToast = () => {
    setIsVisible(false);
    setShowToast(false);
  };

  console.log("showToast", showToast);

  return (
    isVisible && (
      <div
        className={`bg-red-100 text-red-700 font-normal px-4 py-2 rounded shadow-md fixed top-[-10%] right-5 text-sm flex items-center justify-between opacity-0 transition-all duration-1000 ${
          showToast === true && "toast-visible"
        }`}
      >
        <span>Kindly complete the form and proceed to the next step.</span>
        <button className="text-white hover:text-red-500" onClick={closeToast}>
          <RxCross1 className="text-xl text-red-600 ml-4" />
        </button>
      </div>
    )
  );
};

export default Toast;
