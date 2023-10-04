import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
const emailRex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const StepFour = ({ formInfoCarrier }) => {
  const { prev, formData, errorMeg } = formInfoCarrier;

  console.log(formData);
  console.log(errorMeg);

  const userInformation = {
    clientRegisteredName: formData?.clientRegisteredName,
    clientTradeName: formData?.clientTradeName,
    emailAddress: formData?.emailAddress,
    address: formData?.address,
    judicialCountry: formData?.judicialCountry,
    officePhone: formData?.officePhone,
    website: formData?.website,
    socialId: formData?.socialId,
    yearsTrading: formData?.yearsTrading,
    totalTurnover: formData?.totalTurnover,
    noOfStaff: formData?.noOfStaff,
    tradingCurrency: formData?.tradingCurrency,
    adminContactName: formData?.adminContactName,
    designation: formData?.designation,
    nameCard: formData?.nameCard,
    nationalID: formData?.nationalID,

    // step 2
    financeContactName: formData?.financeContactName,
    financeContactDesignation: formData?.financeContactDesignation,
    financeContactEmail: formData?.financeContactEmail,
    financeContactPhone: formData?.financeContactPhone,
    reservationContactName: formData?.reservationContactName,
    reservationContactDesignation: formData?.reservationContactDesignation,
    reservationContactEmail: formData?.reservationContactEmail,
    reservationContactPhone: formData?.reservationContactPhone,
    emergencyContactName: formData?.emergencyContactName,
    emergencyContactDesignation: formData?.emergencyContactDesignation,
    emergencyContactEmail: formData?.emergencyContactEmail,
    emergencyContactPhone: formData?.emergencyContactPhone,
    shareholderCount: formData?.shareholderCount,
    shareholdersInfo: formData?.shareholdersInfo,
    registrationDocs: formData?.registrationDocs,
    taxRegistrationNo: formData?.taxRegistrationNo,
    travelAgentLicense: formData?.travelAgentLicense,
    gdprConsent: formData?.gdprConsent,
    privacyPolicyConsent: formData?.privacyPolicyConsent,
    termsPolicyConsent: formData?.termsPolicyConsent,

    // Step 3
    distributionMarket: formData?.distributionMarket,
    sourceMarket: formData?.sourceMarket,
    dailyAverageTransaction: formData?.dailyAverageTransaction,
    averagePurchaseValue: formData?.averagePurchaseValue,
    monthlyTransaction: formData?.monthlyTransaction,
    distributionMarket2: formData?.distributionMarket2,
    sourceMarket2: formData?.sourceMarket2,
    dailyAverageTransaction2: formData?.dailyAverageTransaction2,
    averagePurchaseValue2: formData?.averagePurchaseValue2,
    monthlyTransaction2: formData?.monthlyTransaction2,
    lookToBookRatio: formData?.lookToBookRatio,
  };

  const handleGtrMultipleForm = () => {
    alert("Submit success!!!");
    console.log("User information : ", userInformation);
  };

  return (
    <div className="pb-16 ">
      <div className="border bg-white w-full p-2 md:p-7">
        <div className="">
          {/* agent details */}
          <div className="">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Agent details
            </h2>
            <div className="">
              <div className="">
                <span>Client Registered Name</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.clientRegisteredName
                      ? formData.clientRegisteredName
                      : "No data found"}
                  </span>
                </span>
              </div>
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
