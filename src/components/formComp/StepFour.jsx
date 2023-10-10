import axios from "axios";
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { getCurrentDateTime } from "../../utiles/dateAndTime";
import Popup from "../shared/Popup";
import Demo from "./Demo";

const StepFour = ({ formInfoCarrier }) => {
  const { prev, formData, errorMeg } = formInfoCarrier;
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { time, date } = getCurrentDateTime();

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // console.log(formData);
  // console.log(errorMeg);

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

  const emailBodyHtml = `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Information</title>
      <style>
      @import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
          /* Add your styles here */
          html,body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-smooth: inherit;
              scroll-behavior: smooth;
              transition: all 0.5s;
              width: 100%;
              height: auto;
              scroll-margin-top: 0;
              font-family: "Lexend", sans-serif;
              background: rgb(231, 249, 255);
              background: -moz-linear-gradient(
                80deg,
                rgba(231, 249, 255, 1) 8%,
                rgba(255, 248, 243, 1) 55%
              );
              background: -webkit-linear-gradient(
                80deg,
                rgba(231, 249, 255, 1) 8%,
                rgba(255, 248, 243, 1) 55%
              );
              background: linear-gradient(
                80deg,
                rgba(231, 249, 255, 1) 8%,
                rgba(255, 248, 243, 1) 55%
              );
          }

          .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .heading {
            font-size: 16px;
            color: #4502fa;
            display: inline-block;
            font-weight: 600;
          }
          
          .py-1 {
            padding-top: 8px;
            padding-bottom: 8px;
          }
          .my-1 {
            margin-top: 8px;
            margin-bottom: 8px;
          }

          p{
           color: #7b7583;
           font-size: 1rem; 
          line-height: 1.5rem; 
          }
          li{ color: #7b7583; font-size: 0.875rem;
          line-height: 1.25rem; }

          li strong{
          color: #333;
          }

          .py-1 {
            padding-top: 4px;
            padding-bottom: 4px;
          }
          .my-1 {
            margin-top: 8px;
            margin-bottom: 8px;
          }
          
          .mr-1 {
            margin-right: 8px;
          }
          .mr-2 {
            margin-right: 16px;
          }
          .ml-1 {
            margin-left: 8px;
          }
          .ml-2 {
            margin-left: 16px;
          }
          
          img {
            max-width: 100%;
            width: 50%;
            height: auto;
          }
          
          .gtr-logo {
            width: 250px;
            max-width: 100%;
            height: auto;
            margin: 0 auto;
            margin-bottom: 30px;
          }
          

         
      </style>
  </head>
  <body>
      <div class="container">
      <div>
      <article>

      <img
      src="https://rakib.innovatedemo.com/gtr-system/images/logo/logo.png"
      alt=""
      class="gtr-logo"
    />

        <h3 class="">Hi,</h3>
        <p>
          On <span class="heading">${date}</span> at <span class="heading">${time}</span> the onboarding form for becoming a Developer
        Partner has been submitted. Data related to the proposal:
        </p>
        

        <ul>
          <div class="heading">
            <h4 class="my-1" >Agent details</h4>
          </div>
          <li>
            <strong>Client Registered Name: </strong>
            ${
              formData.clientRegisteredName
                ? formData.clientRegisteredName
                : "Empty"
            }
          </li>
          <li>
            <strong>Client Trade Name: </strong>
            ${formData?.clientTradeName ? formData?.clientTradeName : "Empty"}
          </li>
          <li>
            <strong>Email address: </strong>
            ${formData?.emailAddress ? formData?.emailAddress : "Empty"}
          </li>
          <li>
            <strong>Address: </strong>
            ${formData?.address ? formData?.address : "Empty"}
          </li>
          <li>
            <strong>Judicial country: </strong>
            ${formData?.judicialCountry ? formData?.judicialCountry : "Empty"}
          </li>
          <li>
            <strong>Office Phone: </strong>
            ${formData?.officePhone ? formData?.officePhone : "Empty"}
          </li>
          <li>
            <strong>Website: </strong>
            ${formData?.website ? formData?.website : "Empty"}
          </li>
          <li>
            <strong>Social ID: </strong>
            ${formData?.socialId ? formData?.socialId : "Empty"}
          </li>
          <li>
            <strong>Number of years: </strong>
            ${formData?.yearsTrading ? formData?.yearsTrading : "Empty"}
          </li>
          <li>
            <strong>Total Turnover: </strong>
            ${formData?.totalTurnover ? formData?.totalTurnover : "Empty"}
          </li>
          <li>
            <strong>Number of years trading: </strong>
            ${formData?.yearsTrading ? formData?.yearsTrading : "Empty"}
          </li>
          <li>
            <strong>No of staff: </strong>
            ${formData?.noOfStaff ? formData?.noOfStaff : "Empty"}
          </li>
          <li>
            <strong>Trading Currency: </strong>
            ${formData?.tradingCurrency ? formData?.tradingCurrency : "Empty"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Admin Contact Person Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            ${formData?.adminContactName ? formData?.adminContactName : "Empty"}
          </li>
          <li>
            <strong>Designation: </strong>
            ${formData?.designation ? formData?.designation : "Empty"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Finance Contact Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            ${
              formData?.financeContactName
                ? formData?.financeContactName
                : "Empty"
            }
          </li>
          <li>
            <strong>Designation: </strong>
            ${
              formData?.financeContactDesignation
                ? formData?.financeContactDesignation
                : "Empty"
            }
          </li>
          <li>
            <strong>Email address: </strong>
            ${
              formData?.financeContactEmail
                ? formData?.financeContactEmail
                : "Empty"
            }
          </li>
          <li>
            <strong>Contact No: </strong>
            ${
              formData?.financeContactPhone
                ? formData?.financeContactPhone
                : "Empty"
            }
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Reservation Contact Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            ${
              formData?.reservationContactName
                ? formData?.reservationContactName
                : "Empty"
            }
          </li>
          <li>
            <strong>Designation: </strong>
            ${
              formData?.reservationContactDesignation
                ? formData?.reservationContactDesignation
                : "Empty"
            }
          </li>
          <li>
            <strong>Email address: </strong>
            ${
              formData?.reservationContactEmail
                ? formData?.reservationContactEmail
                : "Empty"
            }
          </li>
          <li>
            <strong>Contact No: </strong>
            ${
              formData?.reservationContactPhone
                ? formData?.reservationContactPhone
                : "Empty"
            }
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Emergency Contact Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            ${
              formData?.emergencyContactName
                ? formData?.emergencyContactName
                : "Empty"
            }
          </li>
          <li>
            <strong>Designation: </strong>
            ${
              formData?.emergencyContactDesignation
                ? formData?.emergencyContactDesignation
                : "Empty"
            }
          </li>
          <li>
            <strong>Email address: </strong>
            ${
              formData?.emergencyContactEmail
                ? formData?.emergencyContactEmail
                : "Empty"
            }
          </li>
          <li>
            <strong>Contact No: </strong>
            ${
              formData?.emergencyContactPhone
                ? formData?.emergencyContactPhone
                : "Empty"
            }
          </li>
        </ul>

        <ul>
        <div class="heading">
          <h4 class="my-1">Ownership Structure</h4>
        </div>

        <li>
          <strong>Shareholders (count): </strong>
          ${formData?.shareholderCount ? formData?.shareholderCount : " 0/0"}
        </li>

        <ol class="ml-1">

        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo1 && formData?.shareholdersRatio1
              ? formData?.shareholdersInfo1 +
                " " +
                formData?.shareholdersRatio1 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo2 && formData?.shareholdersRatio2
              ? formData?.shareholdersInfo2 +
                " " +
                formData?.shareholdersRatio2 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo3 && formData?.shareholdersRatio3
              ? formData?.shareholdersInfo3 +
                " " +
                formData?.shareholdersRatio3 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo4 && formData?.shareholdersRatio4
              ? formData?.shareholdersInfo4 +
                " " +
                formData?.shareholdersRatio4 +
                "%"
              : "Empty"
          }
        </li>

        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo5 && formData?.shareholdersRatio5
              ? formData?.shareholdersInfo5 +
                " " +
                formData?.shareholdersRatio5 +
                "%"
              : "Empty"
          }
        </li>

        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo6 && formData?.shareholdersRatio6
              ? formData?.shareholdersInfo6 +
                " " +
                formData?.shareholdersRatio6 +
                "%"
              : "Empty"
          }
        </li>

        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo7 && formData?.shareholdersRatio7
              ? formData?.shareholdersInfo7 +
                " " +
                formData?.shareholdersRatio7 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo8 && formData?.shareholdersRatio8
              ? formData?.shareholdersInfo8 +
                " " +
                formData?.shareholdersRatio8 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo9 && formData?.shareholdersRatio9
              ? formData?.shareholdersInfo9 +
                " " +
                formData?.shareholdersRatio9 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo10 && formData?.shareholdersRatio10
              ? formData?.shareholdersInfo10 +
                " " +
                formData?.shareholdersRatio10 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo11 && formData?.shareholdersRatio11
              ? formData?.shareholdersInfo11 +
                " " +
                formData?.shareholdersRatio11 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo12 && formData?.shareholdersRatio12
              ? formData?.shareholdersInfo12 +
                " " +
                formData?.shareholdersRatio12 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo13 && formData?.shareholdersRatio13
              ? formData?.shareholdersInfo13 +
                " " +
                formData?.shareholdersRatio13 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo14 && formData?.shareholdersRatio14
              ? formData?.shareholdersInfo14 +
                " " +
                formData?.shareholdersRatio14 +
                "%"
              : "Empty"
          }
        </li>
        <li>
          <strong>Shareholders' Name & Ratio: </strong>
          ${
            formData?.shareholdersInfo15 && formData?.shareholdersRatio15
              ? formData?.shareholdersInfo15 +
                " " +
                formData?.shareholdersRatio15 +
                "%"
              : "Empty"
          }
        </li>
        
        
         
        </ol>
      </ul>

      <ul>
        <div class="heading">
          <h4 class="my-1">Complinance </h4>
        </div>

        <li>
          <strong>TAX/VAT Registration No: </strong>
          ${formData?.taxRegistrationNo ? formData?.taxRegistrationNo : "Empty"}
        </li>
      </ul>

      <ul>
        <div class="heading">
          <h4 class="my-1">
            Understanding Content Requirements (Hotel Content)
          </h4>
        </div>

        <li>
          <strong>Distribution Market: </strong>
          ${
            formData?.distributionMarket
              ? formData?.distributionMarket
              : "Empty"
          }
        </li>

        <li>
          <strong>Source Market: </strong>
          ${formData?.sourceMarket ? formData?.sourceMarket : "Empty"}
        </li>
        <li>
          <strong>Daily Average Transaction: </strong>
          ${
            formData?.dailyAverageTransaction
              ? formData?.dailyAverageTransaction
              : "Empty"
          }
        </li>
        <li>
          <strong>Average Purchase: </strong>
          ${
            formData?.averagePurchaseValue
              ? formData?.averagePurchaseValue
              : "Empty"
          }
        </li>
        <li>
          <strong>Total appx Monthly Transaction: </strong>
          ${
            formData?.monthlyTransaction
              ? formData?.monthlyTransaction
              : "Empty"
          }
        </li>
      </ul>

      <ul>
        <div class="heading">
          <h4 class="my-1">
            Understanding Content Requirements (Flight Content)
          </h4>
        </div>

        <li>
          <strong>Distribution Market: </strong>
          ${
            formData?.distributionMarket1
              ? formData?.distributionMarket1
              : "Empty"
          }
        </li>

        <li>
          <strong>Source Market: </strong>
          ${formData?.sourceMarket2 ? formData?.sourceMarket2 : "Empty"}
        </li>
        <li>
          <strong>Daily Average Transaction: </strong>
          ${
            formData?.dailyAverageTransaction3
              ? formData?.dailyAverageTransaction3
              : "Empty"
          }
        </li>
        <li>
          <strong>Average Purchase: </strong>
          ${
            formData?.averagePurchaseValue4
              ? formData?.averagePurchaseValue4
              : "Empty"
          }
        </li>
        <li>
          <strong>Total appx Monthly Transaction: </strong>
          ${
            formData?.monthlyTransaction5
              ? formData?.monthlyTransaction5
              : "Empty"
          }
        </li>
      </ul>

      <ul>
        <div class="heading">
          <h4 class="my-1">Our terms & conditions</h4>
        </div>

        <li>
          <strong>Accept Terms & Conditions of Use: </strong>
          ${formData.gdprConsent && "True"}
        </li>

        <li>
          <strong>Accept Privacy Policy: </strong>
          ${formData.privacyPolicyConsent && "True"}
        </li>
      </ul>

      <ul>
        <div class="heading">
          <h4 class="my-1">Documents</h4>
        </div>

        <li>
          <strong>Upload Name Card </strong>
          <br />
          ${
            formData?.nameCard ? (
              <img src={formData?.nameCard} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )
          }
        </li>

        <li>
          <strong>
            National ID/Driving License/Photo Identity Card (Colour Scan copy
            from Original one) Photocopy not allowed:{" "}
          </strong>
          <br />
          ${
            formData?.nationalID ? (
              <img src={formData?.nationalID} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )
          }
        </li>

        <li>
          <strong>
            Registration No/Upload Business Registration Scan Docs:{" "}
          </strong>
          <br />
          ${
            formData?.registrationDocs ? (
              <img src={formData?.registrationDocs} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )
          }
        </li>

        <li>
          <strong>Travel Agent License Copy: </strong>
          <br />
          ${
            formData?.travelAgentLicense ? (
              <img src={formData?.travelAgentLicense} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )
          }
        </li>
      </ul>
      </article>
      </div>
  </body>
  </html>
`;

  const handleGtrMultipleForm = async () => {
    try {
      const response = await axios.post(
        "https://api.gtrs.travel/tools/send-email",

        JSON.stringify({
          email_subject: "Sample Subject",
          email_body: emailBodyHtml,
          email_to: {
            full_name: "Rakibul",
            email_addresss: "fl.rakibul@gmail.com",
          },
          email_from: {
            full_name: "GTRSystem",
            email_addresss: "noreply@gtrsystem.com",
          },
          email_cc: [
            {
              full_name: "Tanveer Kazi",
              email_addresss: "tanveer@innovatesolution.com",
            },
            {
              full_name: "Rakibul Islam",
              email_addresss: "rakibul@innovatesolution.com",
            },
          ],
          email_bcc: [
            {
              full_name: "Abdus Samad",
              email_addresss: "samad4147@innovatesolution.com",
            },
          ],
          // ...userInformation, // Add the userInformation object to the request
        }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            apikey: "34152112944906126",
            secretecode: "4e7m4sf3ylynmxriijxygidvtyd7qzag3ylvty74x",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error sending the request:", error);
    }

    // console.log("User information : ", userInformation);
  };

  console.log("Images_1", formData?.travelAgentLicense);
  console.log("Images_2", formData?.registrationDocs);

  return (
    <div className="pb-16 ">
      <div className="border bg-white w-full p-2 md:p-7">
        <div className="">
          {/* agent details */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient capitalize">
              Agent details
            </h2>
            <Demo formData={formData} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold">Client Registered Name</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.clientRegisteredName
                      ? formData.clientRegisteredName
                      : "Empty"}
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
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 3 */}
              <div className="">
                <span className="font-bold">Email address</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.emailAddress ? formData.emailAddress : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 4 */}
              <div className="">
                <span className="font-bold">Address </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.address ? formData.address : "Empty"}
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
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 6 */}
              <div className="">
                <span className="font-bold">Office Phone</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.officePhone ? formData.officePhone : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 7 */}
              <div className="">
                <span className="font-bold">Website</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.website ? formData.website : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 8 */}
              <div className="">
                <span className="font-bold">Social ID</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.socialId ? formData.socialId : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 9 */}
              <div className="">
                <span className="font-bold">Number of years</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.yearsTrading ? formData.yearsTrading : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 10 */}
              <div className="">
                <span className="font-bold">Total Turnover *</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.totalTurnover ? formData.totalTurnover : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 11 */}
              <div className="">
                <span className="font-bold">Number of years trading </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.yearsTrading ? formData.yearsTrading : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 12 */}
              <div className="">
                <span className="font-bold">No of staff </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.noOfStaff ? formData.noOfStaff : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold">Client Trade Name </span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.designation ? formData.designation : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                          : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Source Market</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.sourceMarket ? formData.sourceMarket : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold"> Source Market</span>
                <span className="flex items-center justify-start font-light">
                  <FaRegCheckCircle />{" "}
                  <span className={`ml-2 my-1`}>
                    {formData.sourceMarket2 ? formData.sourceMarket2 : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
                      : "Empty"}
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
