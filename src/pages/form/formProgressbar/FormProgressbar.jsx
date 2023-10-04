import React from "react";
import { FaHourglassEnd } from "react-icons/fa";
import { HiArrowRight, HiHome } from "react-icons/hi2";

const FormProgressbar = ({ currentStep }) => {
  return (
    <>
      <div className="multiple-form-progress-bar grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 items-center justify-between w-full md:w-[60%] mx-auto py-7 relative">
        {/* Step 01 */}
        <div className="flex flex-col justify-center items-center relative  ">
          <div
            className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full  flex items-center justify-center  text-white ${
              currentStep === 1 ||
              currentStep === 2 ||
              currentStep === 3 ||
              currentStep === 4
                ? "gradient-bg"
                : "bg-gray-400"
            }`}
          >
            <span
              className={`progress-bar-hyphen max-w-full absolute w-full h-[2px] z-0 mx-auto flex justify-center items-center ${
                currentStep === 1 ||
                currentStep === 2 ||
                currentStep === 3 ||
                currentStep === 4
                  ? "gradient-bg"
                  : "bg-gray-400"
              }`}
              style={{ verticalAlign: "middle" }}
            ></span>
            <span className="z-10">
              <HiHome />
            </span>
          </div>
          <span
            className={` ${
              currentStep === 1 ||
              currentStep === 2 ||
              currentStep === 3 ||
              currentStep === 4
                ? "text-gradient"
                : "text-gray-400"
            }`}
          >
            step 1
          </span>
        </div>

        {/* Step 02 */}
        <div className="flex flex-col justify-center items-center relative  ">
          <div
            className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full  flex items-center justify-center  text-white ${
              currentStep === 2 || currentStep === 3 || currentStep === 4
                ? "gradient-bg"
                : "bg-gray-400"
            }`}
          >
            <span
              className={`progress-bar-hyphen max-w-full absolute w-full h-[2px] z-0 mx-auto flex justify-center items-center ${
                currentStep === 2 || currentStep === 3 || currentStep === 4
                  ? "gradient-bg"
                  : "bg-gray-400"
              }`}
              style={{ verticalAlign: "middle" }}
            ></span>
            <span className="z-10">
              <HiArrowRight />
            </span>
          </div>
          <span
            className={` ${
              currentStep === 2 || currentStep === 3 || currentStep === 4
                ? "text-gradient"
                : "text-gray-400"
            }`}
          >
            Step 2
          </span>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col justify-center items-center relative  ">
          <div
            className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full  flex items-center justify-center  text-white ${
              currentStep === 3 || currentStep === 4
                ? "gradient-bg"
                : "bg-gray-400"
            }`}
          >
            <span
              className={`progress-bar-hyphen max-w-full absolute w-full h-[2px] z-0 mx-auto flex justify-center items-center ${
                currentStep === 3 || currentStep === 4
                  ? "gradient-bg"
                  : "bg-gray-400"
              }`}
              style={{ verticalAlign: "middle" }}
            ></span>
            <span className="z-10">
              <HiArrowRight />
            </span>
          </div>
          <span
            className={` ${
              currentStep === 3 || currentStep === 4
                ? "text-gradient"
                : "text-gray-400"
            }`}
          >
            Step 3
          </span>
        </div>

        {/* Step 04 */}
        <div className="flex flex-col justify-center items-center relative  ">
          <div
            className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full  flex items-center justify-center  text-white ${
              currentStep === 4 ? "gradient-bg" : "bg-gray-400"
            }`}
          >
            <span
              className={`progress-bar-hyphen max-w-full absolute w-full h-[2px] z-0 mx-auto flex justify-center items-center ${
                currentStep === 4 ? "gradient-bg" : "bg-gray-400"
              }`}
              style={{ verticalAlign: "middle" }}
            ></span>
            <span className="z-10">
              <FaHourglassEnd />
            </span>
          </div>
          <span
            className={` ${
              currentStep === 4 ? "text-gradient" : "text-gray-400"
            }`}
          >
            Final step
          </span>
        </div>
      </div>
    </>
  );
};

export default FormProgressbar;
