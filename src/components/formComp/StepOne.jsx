import React from "react";
const emailRex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const websiteUrl = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\S*)$/;

const StepOne = ({ formInfoCarrier }) => {
  const { next, formData, handleInputFields, clientTradeName, errorMeg } =
    formInfoCarrier;
  console.log(formData.clientTradeName);
  console.log(formData);

  console.log(clientTradeName);

  // if (formData === "") {
  //   setClientRegisteredName("Fields is required!");
  // }

  return (
    <div className="pb-16">
      <div className="border bg-white w-full p-2 md:p-7">
        <div className="gtr-form-step-1 gtr-form-step-title">
          {/* Form title */}
          <div className="">
            <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
              Agent details
            </h3>
          </div>
        </div>
        {/* gtr-multiple-form-step-1 */}
        <div className="gtr-multiple-form-step-1  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12">
          {/* ------------------------ */}

          {/* 1. Client Registered Name */}
          <div className="mt-3">
            <label
              htmlFor="client-registered-name"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Client Registered Name{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="clientRegisteredName"
              id="client-registered-name"
              value={formData.clientRegisteredName}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                (formData.clientRegisteredName &&
                  formData.clientRegisteredName.length < 3) ||
                formData.clientRegisteredName.length > 30
                  ? "border-red-600 "
                  : " border-slate-300 "
              }`}
              onChange={handleInputFields}
            />
            {errorMeg?.clientRegisteredName && (
              <small className="text-red-600">
                {errorMeg?.clientRegisteredName}
              </small>
            )}
          </div>

          {/* 2. Client Trade Name */}
          <div className="mt-3">
            <label
              htmlFor="client-trade-name"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Client Trade Name (If different from registered Name){" "}
            </label>
            <input
              type="text"
              name="clientTradeName"
              id="client-trade-name"
              value={formData.clientTradeName}
              className={`outline-0 border w-full border-slate-300 p-2 rounded-sm focus:border-blue-500 transition-all duration-300`}
              onChange={handleInputFields}
            />
          </div>

          {/* 3. Email address */}
          <div className="mt-3">
            <label
              htmlFor="email-address"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Email Address (Will be used as admin login ID){" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              id="email-address"
              value={formData.emailAddress}
              onChange={handleInputFields}
              className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                formData.emailAddress && !formData.emailAddress.match(emailRex)
                  ? "border-red-600"
                  : "border-slate-300"
              }`}
            />

            {errorMeg?.emailAddress && (
              <small className="text-red-600">{errorMeg?.emailAddress}</small>
            )}
          </div>

          {/* 4. Address */}
          <div className="mt-3">
            <label
              htmlFor="address"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Address <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                (formData.address && formData.address.length < 10) ||
                formData.address.length > 70
                  ? "border-red-600 "
                  : " border-slate-300 "
              }`}
              onChange={handleInputFields}
            />
            {errorMeg?.address && (
              <small className="text-red-600">{errorMeg?.address}</small>
            )}
          </div>

          {/* 5. Judicial Country */}
          <div className="mt-3">
            <label
              htmlFor="judicial-country"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Judicial Country{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <select
              className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              name="judicialCountry"
              id="judicial-country"
              value={formData.judicialCountry}
              onChange={handleInputFields}
            >
              <option className="">Select country</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="pakistan">pakistan</option>
              <option value="india">India</option>
              <option value="australia">australia</option>
              <option value="canada">Canada</option>
              <option value="china">China</option>
              <option value="usa">Usa</option>
            </select>
            {errorMeg?.judicialCountry && (
              <small className="text-red-600">
                {errorMeg?.judicialCountry}
              </small>
            )}
          </div>

          {/* 6. Office Phone */}
          <div className="mt-3">
            <label
              htmlFor="office-phone"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Office Phone{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="number"
              name="officePhone"
              id="office-phone"
              value={formData.officePhone}
              className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                formData.officePhone && formData.officePhone === ""
                  ? "border-red-600"
                  : "border-slate-300"
              }`}
              onChange={handleInputFields}
            />
            {errorMeg?.officePhone && (
              <small className="text-red-600">{errorMeg?.officePhone}</small>
            )}
          </div>

          {/* 7. Website */}
          <div className="mt-3">
            <label
              htmlFor="website"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Website
            </label>
            <input
              type="url"
              name="website"
              id="website"
              value={formData.website}
              onChange={handleInputFields}
              className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                formData.website && !formData.website.match(websiteUrl)
                  ? "border-red-600"
                  : "border-slate-300"
              }`}
            />
            {errorMeg?.website && (
              <small className="text-red-600">{errorMeg?.website}</small>
            )}
          </div>

          {/* 8. Social/apps ID to send push notification */}
          <div className="mt-3">
            <label
              htmlFor="social-id"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Social ID to Send Push Notification
            </label>
            <input
              type="text"
              name="socialId"
              id="social-id"
              className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              value={formData.socialId}
              onChange={handleInputFields}
            />
          </div>

          {/* 9. Number of years client has been trading */}
          {/* <div className="mt-3">
            <label
              htmlFor="years-trading"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Number of Years Client has been Trading{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="number"
              name="yearsTrading"
              id="years-trading"
              value={formData.yearsTrading}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                formData.yearsTrading < 0
                  ? "border-red-600 "
                  : " border-slate-300 "
              }`}
              onChange={handleInputFields}
            />
            {errorMeg?.yearsTrading && (
              <small className="text-red-600">{errorMeg?.yearsTrading}</small>
            )}
          </div> */}

          <div className="mt-3">
            <label
              htmlFor="years-trading"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Number of Years Client has been Trading{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <select
              className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              name="yearsTrading"
              id="years-trading"
              value={formData.yearsTrading}
              onChange={handleInputFields}
            >
              <option className="">Select Years of trading</option>
              <option value="0-5">0-5</option>
              <option value="5-10">5-10</option>
              <option value="10-15">10-15</option>
              <option value="10-15">15-20</option>
              <option value="20-25">20-25</option>
              <option value="25+">25+</option>
            </select>
            {errorMeg?.yearsTrading && (
              <small className="text-red-600">{errorMeg?.yearsTrading}</small>
            )}
          </div>

          {/* 10. Last year Total Turnover */}
          {/* <div className="mt-3">
            <label
              htmlFor="total-turnover"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Last Year Total Turnover{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="number"
              name="totalTurnover"
              id="total-turnover"
              value={formData.totalTurnover}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                formData.totalTurnover < 0
                  ? "border-red-600 "
                  : " border-slate-300 "
              }`}
              onChange={handleInputFields}
            />
            {errorMeg?.totalTurnover && (
              <small className="text-red-600">{errorMeg?.totalTurnover}</small>
            )}
          </div> */}

          <div className="mt-3">
            <label
              htmlFor="total-turnover"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Last Year Total Turnover{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <select
              className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              name="totalTurnover"
              id="total-turnover"
              value={formData.totalTurnover}
              onChange={handleInputFields}
            >
              <option className="">Select Total Turnover</option>
              <option value="$1M">Below $1M</option>
              <option value="$1M-$3M">$1M - $3M</option>
              <option value="$3M-$5M">$3M - $5M</option>
              <option value="$5M-$10M">$5M - $10M</option>
              <option value="$ above of $10M">$ Above of $10M</option>
            </select>
            {errorMeg?.totalTurnover && (
              <small className="text-red-600">{errorMeg?.totalTurnover}</small>
            )}
          </div>

          {/* 11. No of staff */}
          {/* <div className="mt-3">
            <label
              htmlFor="no-of-staff"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              No of Staff{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="number"
              name="noOfStaff"
              id="no-of-staff"
              value={formData.noOfStaff}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                formData.noOfStaff < 0
                  ? "border-red-600 "
                  : " border-slate-300 "
              }`}
              onChange={handleInputFields}
            />
            {errorMeg?.noOfStaff && (
              <small className="text-red-600">{errorMeg?.noOfStaff}</small>
            )}
          </div> */}

          <div className="mt-3">
            <label
              htmlFor="no-of-staff"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              No of Staff{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <select
              className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              name="noOfStaff"
              id="no-of-staff"
              value={formData.noOfStaff}
              onChange={handleInputFields}
            >
              <option className="">Select Staff</option>
              <option value="0-5">0-5</option>
              <option value="10-15">10-15</option>
              <option value="15-20">15-20</option>
              <option value="20-25">20-25</option>
              <option value="30-35">30-35</option>
              <option value="35-40">35-40</option>
              <option value="40+">40+</option>
            </select>
            {errorMeg?.noOfStaff && (
              <small className="text-red-600">{errorMeg?.noOfStaff}</small>
            )}
          </div>

          {/* 12. Trading Currency */}
          {/* <div className="mt-3">
            <label
              htmlFor="trading-currency"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Trading Currency{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tradingCurrency"
              id="trading-currency"
              className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              value={formData.tradingCurrency}
              onChange={handleInputFields}
            />
            {errorMeg?.tradingCurrency && (
              <small className="text-red-600">
                {errorMeg?.tradingCurrency}
              </small>
            )}
          </div> */}

          {/* 12.  Trading Currency */}
          <div className="mt-3">
            <label
              htmlFor="trading-currency"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Trading Currency{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <select
              className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              name="tradingCurrency"
              id="trading-currency"
              value={formData.tradingCurrency}
              onChange={handleInputFields}
            >
              <option className="">Select Currency</option>
              <option value="UDS">USD</option>
              <option value="BDT">BDT</option>
              <option value="EUR">EUR</option>
              <option value="SGD">SGD</option>
              <option value="IDR">IDR</option>
              <option value="PHP">PHP</option>
              <option value="AED">AED</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
              <option value="Other">Other</option>
            </select>
            {errorMeg?.tradingCurrency && (
              <small className="text-red-600">
                {errorMeg?.tradingCurrency}
              </small>
            )}
          </div>
        </div>

        <div className="mt-7">
          <h3 className="text-lg md:text-xl py-1 md:py-2 gtr-form-step-title capitalize">
            Admin Contact Person Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12">
            {/* 13. Name */}
            <div className="mt-3">
              <label
                htmlFor="name"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Name <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="adminContactName"
                id="name"
                value={formData.adminContactName}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.adminContactName &&
                    formData.adminContactName.length < 3) ||
                  formData.adminContactName.length > 30
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.adminContactName && (
                <small className="text-red-600">
                  {errorMeg?.adminContactName}
                </small>
              )}
            </div>

            {/* 14. Designation */}
            <div className="mt-3">
              <label
                htmlFor="designation"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Designation{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                value={formData.designation}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  (formData.designation && formData.designation.length < 2) ||
                  formData.designation.length > 20
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.designation && (
                <small className="text-red-600">{errorMeg?.designation}</small>
              )}
            </div>

            {/* 15. Upload Name Card */}
            <div className="mt-3">
              <label
                htmlFor="name-card"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Upload Name Card{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                name="nameCard"
                id="name-card"
                // value={formData?.nameCard}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.nameCard && formData.nameCard === ""
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.nameCard && (
                <small className="text-red-600">{errorMeg?.nameCard}</small>
              )}
            </div>

            {/* 16. National ID/Driving License/Photo Identity Card */}
            <div className="mt-3">
              <label
                htmlFor="national-id"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                National ID/Driving License/Photo Identity Card (Colour Scan
                copy from Original one) Photocopy not allowed.{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .pdf, .pdf"
                name="nationalID"
                id="national-id"
                // value={formData.nationalID}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 ${
                  formData.nationalID && formData.nationalID === ""
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.nationalID && (
                <small className="text-red-600">{errorMeg?.nationalID}</small>
              )}
            </div>
          </div>
        </div>

        {/* button */}
        <div className="mx-auto w-full text-center mt-12">
          <button
            type="button"
            disabled={
              !formData.clientRegisteredName ||
              !formData.emailAddress ||
              !formData.address ||
              !formData.judicialCountry ||
              !formData.officePhone ||
              !formData.yearsTrading ||
              !formData.totalTurnover ||
              !formData.noOfStaff ||
              !formData.tradingCurrency ||
              !formData.adminContactName ||
              !formData.designation ||
              !formData.nameCard ||
              !formData.nationalID
            }
            className={`gtr-btn global-btn mt-4 mx-2 ${
              !formData.clientRegisteredName ||
              !formData.emailAddress ||
              !formData.address ||
              !formData.judicialCountry ||
              !formData.officePhone ||
              !formData.yearsTrading ||
              !formData.totalTurnover ||
              !formData.noOfStaff ||
              !formData.tradingCurrency ||
              !formData.adminContactName ||
              !formData.designation ||
              !formData.nameCard ||
              !formData.nationalID
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

export default StepOne;
