import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Popup from "../shared/Popup";

const StepFour = ({ formInfoCarrier }) => {
  const { prev, formData, errorMeg } = formInfoCarrier;
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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

    shareholdersInfo1: formData?.shareholdersInfo1,
    shareholdersRatio1: formData?.shareholdersRatio1,
    shareholdersInfo2: formData?.shareholdersInfo2,
    shareholdersRatio2: formData?.shareholdersRatio2,
    shareholdersInfo3: formData?.shareholdersInfo3,
    shareholdersRatio3: formData?.shareholdersRatio3,
    shareholdersInfo4: formData?.shareholdersInfo4,
    shareholdersRatio4: formData?.shareholdersRatio4,
    shareholdersInfo5: formData?.shareholdersInfo5,
    shareholdersRatio5: formData?.shareholdersRatio5,
    shareholdersInfo6: formData?.shareholdersInfo6,
    shareholdersRatio6: formData?.shareholdersRatio6,
    shareholdersInfo7: formData?.shareholdersInfo7,
    shareholdersRatio7: formData?.shareholdersRatio7,
    shareholdersInfo8: formData?.shareholdersInfo8,
    shareholdersRatio8: formData?.shareholdersRatio8,
    shareholdersInfo9: formData?.shareholdersInfo9,
    shareholdersRatio9: formData?.shareholdersRatio9,
    shareholdersInfo10: formData?.shareholdersInfo10,
    shareholdersRatio10: formData?.shareholdersRatio10,
    shareholdersInfo11: formData?.shareholdersInfo11,
    shareholdersRatio11: formData?.shareholdersRatio11,
    shareholdersInfo12: formData?.shareholdersInfo12,
    shareholdersRatio12: formData?.shareholdersRatio12,
    shareholdersInfo13: formData?.shareholdersInfo13,
    shareholdersRatio13: formData?.shareholdersRatio13,
    shareholdersInfo14: formData?.shareholdersInfo14,
    shareholdersRatio14: formData?.shareholdersRatio14,
    shareholdersInfo15: formData?.shareholdersInfo15,
    shareholdersRatio15: formData?.shareholdersRatio15,
    shareholdersInfo16: formData?.shareholdersInfo16,
    shareholdersRatio16: formData?.shareholdersRatio16,

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
    console.log("User information : ", userInformation);
  };

  return (
    <div className="pb-16 ">
      <div className="border bg-white w-full p-2 md:p-7">
        <div className="">
          {/* agent details */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient capitalize">
              Agent details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold">Client Registered Name</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.clientRegisteredName
                      ? formData.clientRegisteredName
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold">Client Trade Name </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.clientTradeName
                      ? formData.clientTradeName
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 3 */}
              <div className="">
                <span className="font-bold">Email address</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.emailAddress
                      ? formData.emailAddress
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 4 */}
              <div className="">
                <span className="font-bold">Address </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.address ? formData.address : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 5 */}
              <div className="">
                <span className="font-bold">Judicial country </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.judicialCountry
                      ? formData.judicialCountry
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 6 */}
              <div className="">
                <span className="font-bold">Office Phone</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.officePhone
                      ? formData.officePhone
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 7 */}
              <div className="">
                <span className="font-bold">Website</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.website ? formData.website : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 8 */}
              <div className="">
                <span className="font-bold">Social ID</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.socialId ? formData.socialId : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 9 */}
              <div className="">
                <span className="font-bold">Number of years</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.yearsTrading
                      ? formData.yearsTrading
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 10 */}
              <div className="">
                <span className="font-bold">Total Turnover *</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.totalTurnover
                      ? formData.totalTurnover
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 11 */}
              <div className="">
                <span className="font-bold">Number of years trading </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.yearsTrading
                      ? formData.yearsTrading
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 12 */}
              <div className="">
                <span className="font-bold">No of staff </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.noOfStaff ? formData.noOfStaff : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 13 */}
              <div className="">
                <span className="font-bold">Trading Currency </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.tradingCurrency
                      ? formData.tradingCurrency
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Admin Contact Person Details */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Admin Contact Person Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Name</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.adminContactName
                      ? formData.adminContactName
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold">Client Trade Name </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.designation
                      ? formData.designation
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Finance Contact Details*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Finance Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Name</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.financeContactName
                      ? formData.financeContactName
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Designation </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.financeContactDesignation
                      ? formData.financeContactDesignation
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold"> Email address</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.financeContactEmail
                      ? formData.financeContactEmail
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold"> Contact No</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.financeContactPhone
                      ? formData.financeContactPhone
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Reservation Contact Details*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Reservation Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Name</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.reservationContactName
                      ? formData.reservationContactName
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Designation </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.reservationContactDesignation
                      ? formData.reservationContactDesignation
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold"> Email address</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.reservationContactEmail
                      ? formData.reservationContactEmail
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold"> Contact No</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.reservationContactPhone
                      ? formData.reservationContactPhone
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Emergency Contact Details*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Emergency Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Name</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.emergencyContactName
                      ? formData.emergencyContactName
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Designation </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.emergencyContactDesignation
                      ? formData.emergencyContactDesignation
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold"> Email address</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.emergencyContactEmail
                      ? formData.emergencyContactEmail
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold"> Contact No</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.emergencyContactPhone
                      ? formData.emergencyContactPhone
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Ownership Structure */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Ownership Structure
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Shareholders (count) </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.shareholderCount
                      ? formData.shareholderCount
                      : "No data found"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              {formData.shareholdersInfo1 && formData.shareholdersRatio1 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo1
                          ? formData.shareholdersInfo1
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio1
                          ? formData.shareholdersRatio1
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}

              {/* data 3 */}
              {formData.shareholdersInfo2 && formData.shareholdersRatio2 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo2
                          ? formData.shareholdersInfo2
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio2
                          ? formData.shareholdersRatio2
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}

              {/* data 3 */}
              {formData.shareholdersInfo3 && formData.shareholdersRatio3 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo3
                          ? formData.shareholdersInfo3
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio3
                          ? formData.shareholdersRatio3
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 4*/}
              {formData.shareholdersInfo4 && formData.shareholdersRatio4 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo4
                          ? formData.shareholdersInfo4
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio4
                          ? formData.shareholdersRatio4
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 5*/}
              {formData.shareholdersInfo5 && formData.shareholdersRatio5 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo5
                          ? formData.shareholdersInfo5
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio5
                          ? formData.shareholdersRatio5
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 6*/}
              {formData.shareholdersInfo6 && formData.shareholdersRatio6 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo6
                          ? formData.shareholdersInfo6
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio6
                          ? formData.shareholdersRatio6
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 7*/}
              {formData.shareholdersInfo7 && formData.shareholdersRatio7 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo7
                          ? formData.shareholdersInfo7
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio7
                          ? formData.shareholdersRatio7
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 8*/}
              {formData.shareholdersInfo8 && formData.shareholdersRatio8 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo8
                          ? formData.shareholdersInfo8
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio8
                          ? formData.shareholdersRatio8
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 9*/}
              {formData.shareholdersInfo9 && formData.shareholdersRatio9 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo9
                          ? formData.shareholdersInfo9
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio9
                          ? formData.shareholdersRatio9
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 10*/}
              {formData.shareholdersInfo10 && formData.shareholdersRatio10 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo10
                          ? formData.shareholdersInfo10
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio10
                          ? formData.shareholdersRatio10
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 11*/}
              {formData.shareholdersInfo11 && formData.shareholdersRatio11 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo11
                          ? formData.shareholdersInfo11
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio11
                          ? formData.shareholdersRatio11
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 12*/}
              {formData.shareholdersInfo12 && formData.shareholdersRatio12 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo12
                          ? formData.shareholdersInfo12
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio12
                          ? formData.shareholdersRatio12
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 13*/}
              {formData.shareholdersInfo13 && formData.shareholdersRatio13 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo13
                          ? formData.shareholdersInfo13
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio13
                          ? formData.shareholdersRatio13
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 14*/}
              {formData.shareholdersInfo14 && formData.shareholdersRatio14 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo14
                          ? formData.shareholdersInfo14
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio14
                          ? formData.shareholdersRatio14
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 15*/}
              {formData.shareholdersInfo15 && formData.shareholdersRatio15 && (
                <div className="">
                  <div className="">
                    <span className="font-bold"> Shareholders' Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersInfo15
                          ? formData.shareholdersInfo15
                          : "No data found"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      <FaRegCheckCircle />{" "}
                      <span className={`ml-2 my-1`}>
                        {formData.shareholdersRatio15
                          ? formData.shareholdersRatio15
                          : "No data found"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Complinance */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Complinance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Tax / VAT Registration No</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.taxRegistrationNo
                      ? formData.taxRegistrationNo
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Understanding Content Requirements (Hotel content)*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Understanding Content Requirements (Hotel content)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Distribution Market</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.distributionMarket
                      ? formData.distributionMarket
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Source Market</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.sourceMarket
                      ? formData.sourceMarket
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold"> Daily Average Transaction</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.dailyAverageTransaction
                      ? formData.dailyAverageTransaction
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold"> Average Purchase</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.averagePurchaseValue
                      ? formData.averagePurchaseValue
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 5 */}
              <div className="">
                <span className="font-bold">
                  {" "}
                  Total appx Monthly Transaction{" "}
                </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.monthlyTransaction
                      ? formData.monthlyTransaction
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* Understanding Content Requirements (Flight content)*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Understanding Content Requirements (Flight content)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold"> Distribution Market</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.distributionMarket2
                      ? formData.distributionMarket2
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Source Market</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.sourceMarket2
                      ? formData.sourceMarket2
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold"> Daily Average Transaction</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.dailyAverageTransaction2
                      ? formData.dailyAverageTransaction2
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold"> Average Purchase</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.averagePurchaseValue2
                      ? formData.averagePurchaseValue2
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 5 */}
              <div className="">
                <span className="font-bold">
                  {" "}
                  Total appx Monthly Transaction{" "}
                </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.monthlyTransaction2
                      ? formData.monthlyTransaction2
                      : "No data found"}
                  </span>
                </span>
              </div>
              {/* data 6 */}
              <div className="">
                <span className="font-bold">Apprx Look to Book Ratio</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.lookToBookRatio
                      ? formData.lookToBookRatio
                      : "No data found"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* agent details */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Our terms & conditions
            </h2>
            <div className="flex flex-col gap-7">
              {/* data 1 */}
              <div className="">
                <span className="font-bold">
                  {" "}
                  Accept Terms & Conditions of Use
                </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.gdprConsent && "True"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Accept Privacy Policy </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.privacyPolicyConsent && "True"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="mx-auto w-full text-center mt-12 flex justify-center items-center">
          <button
            type="button"
            className="gtr-btn global-btn mt-4 mx-2"
            onClick={prev}
          >
            <span>Prev</span>
          </button>

          <div className="" onClick={openPopup}>
            <button
              type="button"
              className={`gtr-btn global-btn mt-4 mx-2 `}
              onClick={handleGtrMultipleForm}
            >
              <span>Submit</span>
            </button>
          </div>

          <Popup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
