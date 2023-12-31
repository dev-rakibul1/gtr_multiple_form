import React, { useState } from "react";
import Toast from "../shared/success/Toast";
const emailRex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const StepTwo = ({ formInfoCarrier }) => {
  const {
    next,
    prev,
    formData,
    handleInputFields,
    errorMeg,
    handleBtnSubmit,
    handleFileChange,
    setFile3,
    setFile4,
    file3,
    file4,
    selectedFiles,
  } = formInfoCarrier;
  const [showToast, setShowToast] = useState(false);

  let testData = [];
  let i = 0;

  do {
    if (i >= 16) {
      break;
    }
    testData.push({
      info: `shareholdersInfo${i + 1}`,
    });
    i++;
  } while (i < formData.shareholderCount);

  return (
    <div className="pb-16 ">
      <div className="border bg-white w-full p-2 md:p-7">
        {/* gtr-multiple-form-step-2 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Finance Contact Details
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Finance Contact Details */}
            <div className="">
              <label
                htmlFor="finance-contact-name"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Name
              </label>
              <input
                type="text"
                name="financeContactName"
                value={formData.financeContactName}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.financeContactName &&
                    formData.financeContactName.length < 3) ||
                  formData.financeContactName.length > 70
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.financeContactName && (
                <small className="text-red-600">
                  {errorMeg?.financeContactName}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="finance-contact-designation"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Designation{" "}
              </label>
              <input
                type="text"
                name="financeContactDesignation"
                id="finance-contact-designation"
                value={formData.financeContactDesignation}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.financeContactDesignation &&
                    formData.financeContactDesignation.length < 2) ||
                  formData.financeContactDesignation.length > 20
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.financeContactDesignation && (
                <small className="text-red-600">
                  {errorMeg?.financeContactDesignation}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="finance-contact-email"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Email Address{" "}
              </label>
              <input
                type="email"
                name="financeContactEmail"
                id="finance-contact-email"
                value={formData.financeContactEmail}
                onChange={handleInputFields}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.financeContactEmail &&
                  !formData.financeContactEmail.match(emailRex)
                    ? "border-red-600"
                    : "border-slate-300"
                }`}
              />

              {errorMeg?.financeContactEmail && (
                <small className="text-red-600">
                  {errorMeg?.financeContactEmail}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="finance-contact-phone"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Contact No{" "}
              </label>
              <input
                type="number"
                name="financeContactPhone"
                id="finance-contact-phone"
                value={formData.financeContactPhone}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.financeContactPhone &&
                  formData.financeContactPhone === ""
                    ? "border-red-600"
                    : "border-slate-300"
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.financeContactPhone && (
                <small className="text-red-600">
                  {errorMeg?.financeContactPhone}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-3 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Reservation Contact Details
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Reservation Contact Details */}

            <div className="">
              <label
                htmlFor="reservation-contact-name"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Name
              </label>
              <input
                type="text"
                name="reservationContactName"
                id="reservation-contact-name"
                value={formData.reservationContactName}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.reservationContactName &&
                    formData.reservationContactName.length < 3) ||
                  formData.reservationContactName.length > 70
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.reservationContactName && (
                <small className="text-red-600">
                  {errorMeg?.reservationContactName}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="reservation-contact-designation"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Designation{" "}
              </label>
              <input
                type="text"
                name="reservationContactDesignation"
                id="reservation-contact-designation"
                value={formData.reservationContactDesignation}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.reservationContactDesignation &&
                    formData.reservationContactDesignation.length < 2) ||
                  formData.reservationContactDesignation.length > 20
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.reservationContactDesignation && (
                <small className="text-red-600">
                  {errorMeg?.reservationContactDesignation}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="reservation-contact-email"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Email Address{" "}
              </label>
              <input
                type="email"
                name="reservationContactEmail"
                id="reservation-contact-email"
                value={formData.reservationContactEmail}
                onChange={handleInputFields}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.reservationContactEmail &&
                  !formData.reservationContactEmail.match(emailRex)
                    ? "border-red-600"
                    : "border-slate-300"
                }`}
              />

              {errorMeg?.reservationContactEmail && (
                <small className="text-red-600">
                  {errorMeg?.reservationContactEmail}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="reservation-contact-phone"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Contact No{" "}
              </label>
              <input
                type="number"
                name="reservationContactPhone"
                id="reservation-contact-phone"
                value={formData.reservationContactPhone}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.reservationContactPhone &&
                  formData.reservationContactPhone === ""
                    ? "border-red-600"
                    : "border-slate-300"
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.reservationContactPhone && (
                <small className="text-red-600">
                  {errorMeg?.reservationContactPhone}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-4 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Emergency Contact Details
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Emergency Contact Details */}
            <div className="">
              <label
                htmlFor="emergency-contact-name"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Name <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="emergencyContactName"
                id="emergency-contact-name"
                value={formData.emergencyContactName}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.emergencyContactName &&
                    formData.emergencyContactName.length < 3) ||
                  formData.emergencyContactName.length > 70
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.emergencyContactName && (
                <small className="text-red-600">
                  {errorMeg?.emergencyContactName}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="emergency-contact-designation"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Designation{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="emergencyContactDesignation"
                id="emergency-contact-designation"
                value={formData.emergencyContactDesignation}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.emergencyContactDesignation &&
                    formData.emergencyContactDesignation.length < 2) ||
                  formData.emergencyContactDesignation.length > 20
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.emergencyContactDesignation && (
                <small className="text-red-600">
                  {errorMeg?.emergencyContactDesignation}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="emergency-contact-email"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Email Address{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emergencyContactEmail"
                id="emergency-contact-email"
                value={formData.emergencyContactEmail}
                onChange={handleInputFields}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.emergencyContactEmail &&
                  !formData.emergencyContactEmail.match(emailRex)
                    ? "border-red-600"
                    : "border-slate-300"
                }`}
              />

              {errorMeg?.emergencyContactEmail && (
                <small className="text-red-600">
                  {errorMeg?.emergencyContactEmail}
                </small>
              )}
            </div>
            <div className="">
              <label
                htmlFor="emergency-contact-phone"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Contact No{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="emergencyContactPhone"
                id="emergency-contact-phone"
                value={formData.emergencyContactPhone}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.emergencyContactPhone &&
                  formData.emergencyContactPhone === ""
                    ? "border-red-600"
                    : "border-slate-300"
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.emergencyContactPhone && (
                <small className="text-red-600">
                  {errorMeg?.emergencyContactPhone}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-5 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Ownership Structure
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Ownership Structure */}
            {/* 1 - How Many Shareholders */}
            <div className="">
              <label
                htmlFor="shareholder-count"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                How Many Shareholders
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="shareholderCount"
                id="shareholder-count"
                value={formData.shareholderCount}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.shareholderCount < 0
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.shareholderCount && (
                <small className="text-red-600">
                  {errorMeg?.shareholderCount}
                </small>
              )}
            </div>

            {/* 2 - Please Put Shareholders' Name and Ratio */}

            <div className="">
              {testData.map((input, i) => (
                <div className="flex gap-x-4" key={i + 1}>
                  <div className="">
                    <label
                      htmlFor={`shareholders-info${i + 1}`}
                      className="py-1 text-base text-gray-500 inline-block normal-case"
                    >
                      Shareholders' Name{" "}
                      <span className="text-xl font-bold text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name={`shareholdersInfo${i + 1}`}
                      id={`shareholders-info${i + 1}`}
                      // value={`${formValue}`}
                      className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 border-slate-300`}
                      onChange={handleInputFields}
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor={`shareholders-ratio${i + 1}`}
                      className="py-1 text-base text-gray-500 inline-block normal-case"
                    >
                      Ratio{" "}
                      <span className="text-xl font-bold text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name={`shareholdersRatio${i + 1}`}
                      id={`shareholders-ratio${i + 1}`}
                      // value={`${formData.shareholdersRatio}${i + 1}`}
                      className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 border-slate-300 `}
                      onChange={handleInputFields}
                    />
                    <span className="ratio-icon">%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-1 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Complinance
              </h3>
            </div>
          </div>

          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* 1 - Registration No/Upload Business Registration Scan Docs */}
            <div className="">
              <label
                htmlFor="registration-docs"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Registration No/Upload Business Registration Scan Docs{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="file"
                name="registrationDocs"
                accept=".png, .pdf, .jpeg, .jpg"
                id="registration-docs"
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 `}
                onChange={(e) => handleFileChange(e, setFile3)}
              />
              {errorMeg?.file3 && (
                <small className="text-red-600">{errorMeg?.file3}</small>
              )}
            </div>

            {/* 2 - Tax / VAT Registration No */}
            <div className="">
              <label
                htmlFor="tax-registration-no"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                TAX / VAT Registration No{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="taxRegistrationNo"
                id="tax-registration-no"
                value={formData.taxRegistrationNo}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300`}
                onChange={handleInputFields}
              />
              {errorMeg?.taxRegistrationNo && (
                <small className="text-red-600">
                  {errorMeg?.taxRegistrationNo}
                </small>
              )}
            </div>

            {/* 3 - Travel Agent License Copy */}
            <div className="">
              <label
                htmlFor="travel-agent-license"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Travel Agent License Copy{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="file"
                accept=".png, .pdf, .jpeg, .jpg"
                name="travelAgentLicense"
                id="travel-agent-license"
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 `}
                onChange={(e) => handleFileChange(e, setFile4)}
              />
              {errorMeg?.file4 && (
                <small className="text-red-600">{errorMeg?.file4}</small>
              )}
            </div>
          </div>
        </div>

        {/* button */}
        <div className="mx-auto w-full text-center mt-12">
          <button
            type="button"
            className="gtr-btn global-btn mt-4 mx-2 gtr-btn-bg"
            onClick={prev}
          >
            <span>Prev</span>
          </button>
          <button
            type="button"
            className={`gtr-btn global-btn mt-4 mx-2 gtr-btn-bg ${
              !formData.emergencyContactName ||
              !formData.emergencyContactDesignation ||
              !formData.emergencyContactEmail ||
              !formData.emergencyContactPhone ||
              !formData.shareholderCount
                ? // !formData.registrationDocs ||
                  // !formData.taxRegistrationNo ||
                  // !formData.travelAgentLicense
                  "gtr-btn-bg-2 text-gray-600"
                : "gtr-btn-bg"
            }`}
            onClick={() => {
              handleBtnSubmit();
              !formData.emergencyContactName ||
              !formData.emergencyContactDesignation ||
              !formData.emergencyContactEmail ||
              !formData.emergencyContactPhone ||
              !formData.shareholderCount
                ? // !formData.registrationDocs ||
                  // !formData.taxRegistrationNo ||
                  // !formData.travelAgentLicense
                  setShowToast(true)
                : next();
            }}
          >
            <span>Next</span>
          </button>

          {showToast && (
            <Toast showToast={showToast} setShowToast={setShowToast} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
