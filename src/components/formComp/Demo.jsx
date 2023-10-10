import React from "react";
import { getCurrentDateTime } from "../../utiles/dateAndTime";
import "./Demo.css";

const { time, date } = getCurrentDateTime();

const Demo = ({ formData }) => {
  return (
    <div>
      <article>
        <img
          src="https://rakib.innovatedemo.com/gtr-system/images/logo/logo.png"
          alt=""
          class="gtr-logo"
        />
        <h3 class="">Hi,</h3>
        <p>
          {`On ${date} at ${time} the onboarding form for becoming a Developer
        Partner has been submitted. Data related to the proposal:`}
        </p>

        <ul>
          <div class="heading">
            <h4 class="my-1">Agent details</h4>
          </div>
          <li>
            <strong>Client Registered Name: </strong>
            {formData.clientRegisteredName
              ? formData.clientRegisteredName
              : "No data found"}
          </li>
          <li>
            <strong>Client Trade Name: </strong>
            {formData?.clientTradeName
              ? formData?.clientTradeName
              : "No data found"}
          </li>
          <li>
            <strong>Email address: </strong>
            {formData?.emailAddress ? formData?.emailAddress : "No data found"}
          </li>
          <li>
            <strong>Address: </strong>
            {formData?.address ? formData?.address : "No data found"}
          </li>
          <li>
            <strong>Judicial country: </strong>
            {formData?.judicialCountry
              ? formData?.judicialCountry
              : "No data found"}
          </li>
          <li>
            <strong>Office Phone: </strong>
            {formData?.officePhone ? formData?.officePhone : "No data found"}
          </li>
          <li>
            <strong>Website: </strong>
            {formData?.website ? formData?.website : "No data found"}
          </li>
          <li>
            <strong>Social ID: </strong>
            {formData?.socialId ? formData?.socialId : "No data found"}
          </li>
          <li>
            <strong>Number of years: </strong>
            {formData?.yearsTrading ? formData?.yearsTrading : "No data found"}
          </li>
          <li>
            <strong>Total Turnover: </strong>
            {formData?.totalTurnover
              ? formData?.totalTurnover
              : "No data found"}
          </li>
          <li>
            <strong>Number of years trading: </strong>
            {formData?.yearsTrading ? formData?.yearsTrading : "No data found"}
          </li>
          <li>
            <strong>No of staff: </strong>
            {formData?.noOfStaff ? formData?.noOfStaff : "No data found"}
          </li>
          <li>
            <strong>Trading Currency: </strong>
            {formData?.tradingCurrency
              ? formData?.tradingCurrency
              : "No data found"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Admin Contact Person Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            {formData?.adminContactName
              ? formData?.adminContactName
              : "No data found"}
          </li>
          <li>
            <strong>Designation: </strong>
            {formData?.designation ? formData?.designation : "No data found"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Finance Contact Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            {formData?.financeContactName
              ? formData?.financeContactName
              : "No data found"}
          </li>
          <li>
            <strong>Designation: </strong>
            {formData?.financeContactDesignation
              ? formData?.financeContactDesignation
              : "No data found"}
          </li>
          <li>
            <strong>Email address: </strong>
            {formData?.financeContactEmail
              ? formData?.financeContactEmail
              : "No data found"}
          </li>
          <li>
            <strong>Contact No: </strong>
            {formData?.financeContactPhone
              ? formData?.financeContactPhone
              : "No data found"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Reservation Contact Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            {formData?.reservationContactName
              ? formData?.reservationContactName
              : "No data found"}
          </li>
          <li>
            <strong>Designation: </strong>
            {formData?.reservationContactDesignation
              ? formData?.reservationContactDesignation
              : "No data found"}
          </li>
          <li>
            <strong>Email address: </strong>
            {formData?.reservationContactEmail
              ? formData?.reservationContactEmail
              : "No data found"}
          </li>
          <li>
            <strong>Contact No: </strong>
            {formData?.reservationContactPhone
              ? formData?.reservationContactPhone
              : "No data found"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Emergency Contact Details</h4>
          </div>

          <li>
            <strong>Name: </strong>
            {formData?.emergencyContactName
              ? formData?.emergencyContactName
              : "No data found"}
          </li>
          <li>
            <strong>Designation: </strong>
            {formData?.emergencyContactDesignation
              ? formData?.emergencyContactDesignation
              : "No data found"}
          </li>
          <li>
            <strong>Email address: </strong>
            {formData?.emergencyContactEmail
              ? formData?.emergencyContactEmail
              : "No data found"}
          </li>
          <li>
            <strong>Contact No: </strong>
            {formData?.emergencyContactPhone
              ? formData?.emergencyContactPhone
              : "No data found"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Ownership Structure</h4>
          </div>

          <li>
            <strong>Shareholders (count): </strong>
            {formData?.shareholderCount ? formData?.shareholderCount : " 0/0"}
          </li>

          <ol class="ml-2">
            {formData.shareholdersInfo1 && formData.shareholdersRatio1 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo1 + " " + formData.shareholdersRatio1}
                %
              </li>
            )}
            {formData.shareholdersInfo2 && formData.shareholdersRatio2 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo2 + " " + formData.shareholdersRatio2}
                %
              </li>
            )}
            {formData.shareholdersInfo3 && formData.shareholdersRatio3 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo3 + " " + formData.shareholdersRatio3}
                %
              </li>
            )}
            {formData.shareholdersInfo4 && formData.shareholdersRatio4 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo4 + " " + formData.shareholdersRatio4}
                %
              </li>
            )}
            {formData.shareholdersInfo5 && formData.shareholdersRatio5 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo5 + " " + formData.shareholdersRatio5}
                %
              </li>
            )}
            {formData.shareholdersInfo6 && formData.shareholdersRatio6 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo6 + " " + formData.shareholdersRatio6}
                %
              </li>
            )}
            {formData.shareholdersInfo7 && formData.shareholdersRatio7 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo7 + " " + formData.shareholdersRatio7}
                %
              </li>
            )}
            {formData.shareholdersInfo8 && formData.shareholdersRatio8 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo8 + " " + formData.shareholdersRatio8}
                %
              </li>
            )}
            {formData.shareholdersInfo9 && formData.shareholdersRatio9 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo9 + " " + formData.shareholdersRatio9}
                %
              </li>
            )}
            {formData.shareholdersInfo10 && formData.shareholdersRatio10 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo10 +
                  " " +
                  formData.shareholdersRatio10}
                %
              </li>
            )}
            {formData.shareholdersInfo11 && formData.shareholdersRatio11 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo11 +
                  " " +
                  formData.shareholdersRatio11}
                %
              </li>
            )}
            {formData.shareholdersInfo12 && formData.shareholdersRatio12 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo12 +
                  " " +
                  formData.shareholdersRatio12}
                %
              </li>
            )}
            {formData.shareholdersInfo13 && formData.shareholdersRatio13 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo13 +
                  " " +
                  formData.shareholdersRatio13}
                %
              </li>
            )}
            {formData.shareholdersInfo14 && formData.shareholdersRatio14 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo14 +
                  " " +
                  formData.shareholdersRatio14}
                %
              </li>
            )}
            {formData.shareholdersInfo15 && formData.shareholdersRatio15 && (
              <li>
                <strong> Shareholders' Name & Ratio:</strong>{" "}
                {formData.shareholdersInfo15 +
                  " " +
                  formData.shareholdersRatio15}
                %
              </li>
            )}
          </ol>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Complinance </h4>
          </div>

          <li>
            <strong>TAX/VAT Registration No: </strong>
            {formData?.taxRegistrationNo
              ? formData?.taxRegistrationNo
              : "No data found"}
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
            {formData?.distributionMarket
              ? formData?.distributionMarket
              : "No data found"}
          </li>

          <li>
            <strong>Source Market: </strong>
            {formData?.sourceMarket ? formData?.sourceMarket : "No data found"}
          </li>
          <li>
            <strong>Daily Average Transaction: </strong>
            {formData?.dailyAverageTransaction
              ? formData?.dailyAverageTransaction
              : "No data found"}
          </li>
          <li>
            <strong>Average Purchase: </strong>
            {formData?.averagePurchaseValue
              ? formData?.averagePurchaseValue
              : "No data found"}
          </li>
          <li>
            <strong>Total appx Monthly Transaction: </strong>
            {formData?.monthlyTransaction
              ? formData?.monthlyTransaction
              : "No data found"}
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
            {formData?.distributionMarket1
              ? formData?.distributionMarket1
              : "No data found"}
          </li>

          <li>
            <strong>Source Market: </strong>
            {formData?.sourceMarket2
              ? formData?.sourceMarket2
              : "No data found"}
          </li>
          <li>
            <strong>Daily Average Transaction: </strong>
            {formData?.dailyAverageTransaction3
              ? formData?.dailyAverageTransaction3
              : "No data found"}
          </li>
          <li>
            <strong>Average Purchase: </strong>
            {formData?.averagePurchaseValue4
              ? formData?.averagePurchaseValue4
              : "No data found"}
          </li>
          <li>
            <strong>Total appx Monthly Transaction: </strong>
            {formData?.monthlyTransaction5
              ? formData?.monthlyTransaction5
              : "No data found"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Our terms & conditions</h4>
          </div>

          <li>
            <strong>Accept Terms & Conditions of Use: </strong>
            {formData.gdprConsent && "True"}
          </li>

          <li>
            <strong>Accept Privacy Policy: </strong>
            {formData.privacyPolicyConsent && "True"}
          </li>
        </ul>

        <ul>
          <div class="heading">
            <h4 class="my-1">Documents</h4>
          </div>

          <li>
            <strong>Upload Name Card </strong>
            <br />
            {formData?.nameCard ? (
              <img src={formData?.nameCard} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )}
          </li>

          <li>
            <strong>
              National ID/Driving License/Photo Identity Card (Colour Scan copy
              from Original one) Photocopy not allowed:{" "}
            </strong>
            <br />
            {formData?.nationalID ? (
              <img src={formData?.nationalID} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )}
          </li>

          <li>
            <strong>
              Registration No/Upload Business Registration Scan Docs:{" "}
            </strong>
            <br />
            {formData?.registrationDocs ? (
              <img src={formData?.registrationDocs} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )}
          </li>

          <li>
            <strong>Travel Agent License Copy: </strong>
            <br />
            {formData?.travelAgentLicense ? (
              <img src={formData?.travelAgentLicense} alt="doc" />
            ) : (
              <img
                src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                alt="doc"
              />
            )}
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Demo;
