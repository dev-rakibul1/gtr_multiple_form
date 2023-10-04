import React from "react";

const StepThree = ({ formInfoCarrier }) => {
  const {
    next,
    prev,
    formData,
    handleInputFields,
    errorMeg,
    handleCheckboxChange1,
    handleCheckboxChange2,
    handleCheckboxChange3,
    isHotelChecked,
    handleHotelRadioChange,
    isFlightChecked,
    handleFlightRadioChange,
  } = formInfoCarrier;

  console.log(formData);
  console.log(errorMeg);

  return (
    <div className="pb-16 ">
      <div className="border bg-white w-full p-2 md:p-7">
        {/* gtr-multiple-form-step-1 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2">
                Understanding Content Requirements
              </h3>
            </div>

            {/* hotel content yes/no */}
            <div className="">
              <p>If required, Please select "Yes" </p>
              <div className="flex flex-col">
                <label>
                  <input
                    type="radio"
                    value="yes"
                    checked={isHotelChecked === true}
                    onChange={handleHotelRadioChange}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="no"
                    checked={isHotelChecked === false}
                    onChange={handleHotelRadioChange}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
          <div
            className={`gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3${
              isHotelChecked === false &&
              "text-gray-200 cursor-not-allowed opacity-[.6]"
            }`}
          >
            {/* 1 - Distribution Market (Country/Region) */}
            <div
              className={`mt-3 ${
                isHotelChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="distribution-market"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Distribution Market (Country/Region){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="distributionMarket"
                id="distribution-market"
                value={formData.distributionMarket}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.distributionMarket &&
                  formData.distributionMarket === ""
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.distributionMarket && (
                <small className="text-red-600">
                  {errorMeg?.distributionMarket}
                </small>
              )}
            </div>

            {/* 2 - Source Market (Mention your Top 10 Destination) */}
            <div
              className={`mt-3 ${
                isHotelChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="source-market"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Source Market (Mention your Top 10 Destination){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sourceMarket"
                id="source-market"
                value={formData.sourceMarket}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.sourceMarket && formData.sourceMarket === ""
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.sourceMarket && (
                <small className="text-red-600">{errorMeg?.sourceMarket}</small>
              )}
            </div>

            {/* 3 - Daily Average Transaction */}
            <div
              className={`mt-3 ${
                isHotelChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="daily-average-transaction"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Daily Average Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="dailyAverageTransaction"
                id="daily-average-transaction"
                value={formData.dailyAverageTransaction}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.dailyAverageTransaction &&
                    formData.dailyAverageTransaction === "") ||
                  formData.dailyAverageTransaction < 0
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.dailyAverageTransaction && (
                <small className="text-red-600">
                  {errorMeg?.dailyAverageTransaction}
                </small>
              )}
            </div>

            {/* 4 - Average Purchase Value for per transaction */}
            <div
              className={`mt-3 ${
                isHotelChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="average-purchase-value"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Average Purchase Value for per transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="averagePurchaseValue"
                id="average-purchase-value"
                value={formData.averagePurchaseValue}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.averagePurchaseValue &&
                    formData.averagePurchaseValue === "") ||
                  formData.averagePurchaseValue < 0
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.averagePurchaseValue && (
                <small className="text-red-600">
                  {errorMeg?.averagePurchaseValue}
                </small>
              )}
            </div>

            {/* 5 - Total appx Monthly Transaction */}
            <div
              className={`mt-3 ${
                isHotelChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="monthly-transaction"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Total appx Monthly Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="monthlyTransaction"
                id="monthly-transaction"
                value={formData.monthlyTransaction}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.monthlyTransaction &&
                    formData.monthlyTransaction === "") ||
                  formData.monthlyTransaction < 0
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.monthlyTransaction && (
                <small className="text-red-600">
                  {errorMeg?.monthlyTransaction}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-2 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2">
                Understanding Content Requirements
              </h3>
            </div>

            {/* Flight content yes/no */}
            <div className="">
              <p>If required, Please select "Yes" </p>
              <div className="flex flex-col">
                <label>
                  <input
                    type="radio"
                    value="yes"
                    checked={isFlightChecked === true}
                    onChange={handleFlightRadioChange}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="no"
                    checked={isFlightChecked === false}
                    onChange={handleFlightRadioChange}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
          <div
            className={`gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3${
              isFlightChecked === false &&
              "text-gray-200 cursor-not-allowed opacity-[.6]"
            }`}
          >
            {/* 1 - Distribution Market (Country/Region) */}
            <div
              className={`mt-3 ${
                isFlightChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="distribution-market-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Distribution Market (Country/Region){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="distributionMarket2"
                id="distribution-market-2"
                value={formData.distributionMarket2}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.distributionMarket2 &&
                  formData.distributionMarket2 === ""
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.distributionMarket2 && (
                <small className="text-red-600">
                  {errorMeg?.distributionMarket2}
                </small>
              )}
            </div>

            {/* 2 - Source Market (Mention your Top 10 Route) */}
            <div
              className={`mt-3 ${
                isFlightChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="source-market-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Source Market (Mention your Top 10 Route){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sourceMarket2"
                id="source-market-2"
                value={formData.sourceMarket2}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.sourceMarket2 && formData.sourceMarket2 === ""
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.sourceMarket2 && (
                <small className="text-red-600">
                  {errorMeg?.sourceMarket2}
                </small>
              )}
            </div>

            {/* 3 - Daily Average Transaction */}
            <div
              className={`mt-3 ${
                isFlightChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="daily-average-transaction-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Daily Average Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="dailyAverageTransaction2"
                id="daily-average-transaction-2"
                value={formData.dailyAverageTransaction2}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.dailyAverageTransaction2 &&
                    formData.dailyAverageTransaction2 === "") ||
                  formData.dailyAverageTransaction2 < 0
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.dailyAverageTransaction2 && (
                <small className="text-red-600">
                  {errorMeg?.dailyAverageTransaction2}
                </small>
              )}
            </div>

            {/* 4 - Average Purchase Value for per transaction */}
            <div
              className={`mt-3 ${
                isFlightChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="average-purchase-value-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Average Purchase Value for per transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="averagePurchaseValue2"
                id="average-purchase-value-2"
                value={formData.averagePurchaseValue2}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.averagePurchaseValue2 &&
                    formData.averagePurchaseValue2 === "") ||
                  formData.averagePurchaseValue2 < 0
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.averagePurchaseValue2 && (
                <small className="text-red-600">
                  {errorMeg?.averagePurchaseValue2}
                </small>
              )}
            </div>

            {/* 5 - Total appx Monthly Transaction */}
            <div
              className={`mt-3 ${
                isFlightChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="monthly-transaction-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Total appx Monthly Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="monthlyTransaction2"
                id="monthly-transaction-2"
                value={formData.monthlyTransaction2}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.monthlyTransaction2 &&
                    formData.monthlyTransaction2 === "") ||
                  formData.monthlyTransaction2 < 0
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.monthlyTransaction2 && (
                <small className="text-red-600">
                  {errorMeg?.monthlyTransaction2}
                </small>
              )}
            </div>

            {/* 6 - Apprx Look to Book Ratio (100:1) */}
            <div
              className={`mt-3 ${
                isFlightChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="look-to-book-ratio"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Apprx Look to Book Ratio (100:1){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lookToBookRatio"
                id="look-to-book-ratio"
                value={formData.lookToBookRatio}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.lookToBookRatio && formData.lookToBookRatio === ""
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.lookToBookRatio && (
                <small className="text-red-600">
                  {errorMeg?.lookToBookRatio}
                </small>
              )}
            </div>
          </div>

          <div className="mt-7">
            {/* 4 - Click Box for Acceptance GPDR Cookie Consent Management */}
            <div className="mt-3">
              <input
                type="checkbox"
                name="gdprConsent"
                id="gdpr-consent"
                className="p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
                onClick={handleCheckboxChange1}
                value={formData.gdprConsent}
                checked={formData.gdprConsent}
              />

              <label
                htmlFor="gdpr-consent"
                className=" ml-4 text-base text-gray-500 inline-block normal-case"
              >
                Click Box for Acceptance GPDR Cookie Consent Management
              </label>
            </div>

            {/* 5 - Click box for accept privacy policy */}
            <div className="mt-3">
              <input
                type="checkbox"
                name="privacyPolicyConsent"
                id="privacy-policy-consent"
                className="p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
                onClick={handleCheckboxChange2}
                value={formData.privacyPolicyConsent}
                checked={formData.privacyPolicyConsent}
              />

              <label
                htmlFor="privacy-policy-consent"
                className=" ml-4 text-base text-gray-500 inline-block normal-case"
              >
                Click box for accept privacy policy
              </label>
            </div>

            {/* 6 - Click box for terms to use policy for Credit Card use to avoid fraud dispute */}
            <div className="mt-3">
              <input
                type="checkbox"
                name="termsPolicyConsent"
                id="terms-policy-consent"
                className="p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
                onClick={handleCheckboxChange3}
                value={formData.termsPolicyConsent}
                checked={formData.termsPolicyConsent}
              />

              <label
                htmlFor="terms-policy-consent"
                className="ml-4 text-base text-gray-500 inline-block normal-case"
              >
                Click box for terms to use policy for Credit Card use to avoid
                fraud dispute
              </label>
            </div>
          </div>
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
            disabled={
              !formData.gdprConsent ||
              !formData.privacyPolicyConsent ||
              !formData.termsPolicyConsent
            }
            type="button"
            className={`gtr-btn global-btn mt-4 mx-2 ${
              !formData.gdprConsent ||
              !formData.privacyPolicyConsent ||
              !formData.termsPolicyConsent
                ? "bg-gray-400 cursor-not-allowed text-gray-600 opacity-[.7]"
                : ""
            }`}
            onClick={next}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
