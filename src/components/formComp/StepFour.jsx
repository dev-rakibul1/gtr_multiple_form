import React from "react";
const emailRex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const StepFour = ({ formInfoCarrier }) => {
  const { next, prev, formData, handleInputFields, errorMeg } = formInfoCarrier;

  console.log(formData);
  console.log(errorMeg);

  const handleGtrMultipleForm = () => {
    alert("Submit success!!!");
  };

  return (
    <div className="pb-16 ">
      <div className="border bg-white w-full p-2 md:p-7">
        <div className="text-center">
          <h1 className="text-5xl font-bold py-3 gtr-form-step-title">
            Welcome {formData?.clientRegisteredName}
          </h1>
          <p className="text-gray-600 text-xl text-semibold">
            Thanks for your form submission. Although is not complete yet...
          </p>
        </div>

        {/* button */}
        <div className="mx-auto w-full text-center mt-12">
          <button
            type="button"
            className="gtr-btn global-btn mt-4 mx-2"
            onClick={prev}
          >
            <span>Prev</span>
          </button>
          <button
            type="button"
            className={`gtr-btn global-btn mt-4 mx-2 `}
            onClick={handleGtrMultipleForm}
          >
            <span>My submission</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
