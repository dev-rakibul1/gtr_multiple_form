import React, { useState } from "react";
import StepFour from "../../components/formComp/StepFour";
import StepOne from "../../components/formComp/StepOne";
import StepThree from "../../components/formComp/StepThree";
import StepTwo from "../../components/formComp/StepTwo";
import FormProgressbar from "./formProgressbar/FormProgressbar";
const emailRex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const GtrForm = () => {
  const totalForm = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(totalForm[0]);
  const [isHotelChecked, setIsHotelChecked] = useState(true);
  const [isFlightChecked, setIsFlightChecked] = useState(true);

  // hotel content checked
  const handleHotelRadioChange = (event) => {
    setIsHotelChecked(event.target.value === "yes");
  };

  // hotel content checked
  const handleFlightRadioChange = (event) => {
    setIsFlightChecked(event.target.value === "yes");
  };

  const [formData, setFormData] = useState({
    clientRegisteredName: "",
    clientTradeName: "",
    emailAddress: "",
    address: "",
    judicialCountry: "",
    officePhone: "",
    website: "",
    socialId: "",
    yearsTrading: "",
    totalTurnover: "",
    noOfStaff: "",
    tradingCurrency: "",
    adminContactName: "",
    designation: "",
    nameCard: "",
    nationalID: "",

    // step 2
    financeContactName: "",
    financeContactDesignation: "",
    financeContactEmail: "",
    financeContactPhone: "",
    reservationContactName: "",
    reservationContactDesignation: "",
    reservationContactEmail: "",
    reservationContactPhone: "",
    emergencyContactName: "",
    emergencyContactDesignation: "",
    emergencyContactEmail: "",
    emergencyContactPhone: "",
    shareholderCount: "",

    shareholdersInfo1: "",
    shareholdersRatio1: "",
    shareholdersInfo2: "",
    shareholdersRatio2: "",
    shareholdersInfo3: "",
    shareholdersRatio3: "",
    shareholdersInfo4: "",
    shareholdersRatio4: "",
    shareholdersInfo5: "",
    shareholdersRatio5: "",
    shareholdersInfo6: "",
    shareholdersRatio6: "",
    shareholdersInfo7: "",
    shareholdersRatio7: "",
    shareholdersInfo8: "",
    shareholdersRatio8: "",
    shareholdersInfo9: "",
    shareholdersRatio9: "",
    shareholdersInfo10: "",
    shareholdersRatio10: "",
    shareholdersInfo11: "",
    shareholdersRatio11: "",
    shareholdersInfo12: "",
    shareholdersRatio12: "",
    shareholdersInfo13: "",
    shareholdersRatio13: "",
    shareholdersInfo14: "",
    shareholdersRatio14: "",
    shareholdersInfo15: "",
    shareholdersRatio15: "",
    shareholdersInfo16: "",
    shareholdersRatio16: "",

    registrationDocs: "",
    taxRegistrationNo: "",
    travelAgentLicense: "",
    gdprConsent: false,
    privacyPolicyConsent: false,
    termsPolicyConsent: false,

    // Step 3
    distributionMarket: "",
    sourceMarket: "",
    dailyAverageTransaction: "",
    averagePurchaseValue: "",
    monthlyTransaction: "",
    distributionMarket2: "",
    sourceMarket2: "",
    dailyAverageTransaction2: "",
    averagePurchaseValue2: "",
    monthlyTransaction2: "",
    lookToBookRatio: "",
  });

  const [errorMeg, setErrorMeg] = useState({});

  const handleInputFields = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // Remove the error message when the user starts typing in the field.
    setErrorMeg({
      ...errorMeg,
      [event.target.name]: "",
    });
  };

  // check box or term & condition check
  const handleCheckboxChange1 = () => {
    setFormData({ ...formData, gdprConsent: !formData.gdprConsent });
  };
  const handleCheckboxChange2 = () => {
    setFormData({
      ...formData,
      privacyPolicyConsent: !formData.privacyPolicyConsent,
    });
  };
  const handleCheckboxChange3 = () => {
    setFormData({
      ...formData,
      termsPolicyConsent: !formData.termsPolicyConsent,
    });
  };

  // Ratio calculation

  const aData = [
    formData.shareholdersRatio1,
    formData.shareholdersRatio2,
    formData.shareholdersRatio3,
    formData.shareholdersRatio4,
    formData.shareholdersRatio5,
    formData.shareholdersRatio6,
    formData.shareholdersRatio7,
    formData.shareholdersRatio8,
    formData.shareholdersRatio9,
    formData.shareholdersRatio10,
    formData.shareholdersRatio11,
    formData.shareholdersRatio12,
    formData.shareholdersRatio13,
    formData.shareholdersRatio14,
    formData.shareholdersRatio15,
  ];
  let ratioSum = 0;
  // Create a new array with only valid numbers
  const validNumbers = [];

  aData.forEach((item) => {
    const parsedValue = parseInt(item);
    if (!isNaN(parsedValue)) {
      validNumbers.push(parsedValue);
      ratioSum += parsedValue;
    }
  });

  console.log(ratioSum);

  const handleNextButton = (e) => {
    // Form step 1
    // if (currentStep === 1) {
    //   const newErrorMeg = {};

    //   // Client registered name
    //   if (formData.clientRegisteredName === "") {
    //     newErrorMeg.clientRegisteredName =
    //       "Client registered name is required!";
    //   } else if (
    //     formData.clientRegisteredName.length < 3 ||
    //     formData.clientRegisteredName.length > 30
    //   ) {
    //     newErrorMeg.clientRegisteredName =
    //       "Client registered name must be between 3 and 30 characters";
    //   }

    //   // Client Trade Name
    //   // if (formData.clientTradeName === "") {
    //   //   newErrorMeg.clientTradeName = "Client trade name is required!";
    //   // } else if (
    //   //   formData.clientTradeName.length < 3 ||
    //   //   formData.clientTradeName.length > 20
    //   // ) {
    //   //   newErrorMeg.clientTradeName =
    //   //     "Client trade name must be between 3 and 20 characters";
    //   // }

    //   // Email address (Will be used as admin login ID)
    //   if (formData.emailAddress === "") {
    //     newErrorMeg.emailAddress = "Email address is required!";
    //   } else if (!formData.emailAddress.match(emailRex)) {
    //     newErrorMeg.emailAddress = "Email is not valid!";
    //   }

    //   // Address
    //   if (formData.address === "") {
    //     newErrorMeg.address = "Address is required!";
    //   } else if (formData.address.length < 10 || formData.address.length > 70) {
    //     newErrorMeg.address = "Address must be between 10 and 70 characters";
    //   }

    //   // judicial Country
    //   if (formData.judicialCountry === "") {
    //     newErrorMeg.judicialCountry = "Judicial country is required!";
    //   }

    //   // Office phone number
    //   if (formData.officePhone === "") {
    //     newErrorMeg.officePhone = "Office phone number is required!";
    //   }

    //   // website
    //   const websiteUrl =
    //     /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\S*)$/;
    //   if (formData.website && !formData.website.match(websiteUrl)) {
    //     newErrorMeg.website = "Website url is not valid";
    //   }

    //   // socialId
    //   // if (!formData.socialId && formData.socialId === "") {
    //   //   newErrorMeg.socialId = "Social id or app id is required!";
    //   // }

    //   // years Trading
    //   if (formData.yearsTrading === "") {
    //     newErrorMeg.yearsTrading = "Year trading is required!";
    //   } else if (formData.yearsTrading < 0) {
    //     newErrorMeg.yearsTrading = "Your trading year number is not valid.";
    //   }

    //   // Total turnover
    //   if (formData.totalTurnover === "") {
    //     newErrorMeg.totalTurnover = "Total turnover is required!";
    //   } else if (formData.totalTurnover < 0) {
    //     newErrorMeg.totalTurnover = "Your Total turnover number is not valid.";
    //   }

    //   // no Of Staff
    //   if (formData.noOfStaff === "") {
    //     newErrorMeg.noOfStaff = "No of staff is required!";
    //   } else if (formData.noOfStaff < 0) {
    //     newErrorMeg.noOfStaff = "No of staff is number not valid.";
    //   }

    //   // trading Currency
    //   if (!formData.tradingCurrency && formData.tradingCurrency === "") {
    //     newErrorMeg.tradingCurrency = "Trading currency is required!";
    //   }

    //   // Admin Contact Person Details
    //   // Admin client name
    //   if (formData.adminContactName === "") {
    //     newErrorMeg.adminContactName = "Name is required!";
    //   } else if (
    //     formData.adminContactName.length < 3 ||
    //     formData.adminContactName.length > 30
    //   ) {
    //     newErrorMeg.adminContactName =
    //       "Name must be between 3 and 30 characters";
    //   }

    //   // Designation
    //   if (formData.designation === "") {
    //     newErrorMeg.designation = "Designation is required!";
    //   } else if (
    //     formData.designation.length < 2 ||
    //     formData.designation.length > 20
    //   ) {
    //     newErrorMeg.designation =
    //       "Designation must be between 2 and 20 characters";
    //   }

    //   // image validation
    //   if (formData.nameCard === "") {
    //     newErrorMeg.nameCard = "Name card is required!";
    //   } else if (
    //     !formData.nameCard.toLowerCase().endsWith(".jpg") &&
    //     !formData.nameCard.toLowerCase().endsWith(".png") &&
    //     !formData.nameCard.toLowerCase().endsWith(".pdf") &&
    //     !formData.nameCard.toLowerCase().endsWith(".jpeg")
    //   ) {
    //     newErrorMeg.nameCard =
    //       "Please select a valid image file (jpg, jpeg, png or pdf).";
    //   }
    //   // National id
    //   if (formData.nationalID === "") {
    //     newErrorMeg.nationalID = "Name card is required!";
    //   } else if (
    //     !formData.nameCard.toLowerCase().endsWith(".jpg") &&
    //     !formData.nameCard.toLowerCase().endsWith(".png") &&
    //     !formData.nameCard.toLowerCase().endsWith(".pdf") &&
    //     !formData.nameCard.toLowerCase().endsWith(".jpeg")
    //   ) {
    //     newErrorMeg.nationalID =
    //       "Please select a valid image file (jpg, jpeg, png or pdf).";
    //   }

    //   // error handling meg
    //   if (Object.keys(newErrorMeg).length > 0) {
    //     setErrorMeg(newErrorMeg);
    //     return;
    //   }
    // }

    // Form step 2
    // if (currentStep === 2) {
    //   const newErrorMeg = {};

    //   // -------------------FINANCE CONTACT DETAILS--------------------
    //   // Finance contact name
    //   if (formData.financeContactName === "") {
    //     newErrorMeg.financeContactName = "Finance contact name is required!";
    //   } else if (
    //     formData.financeContactName.length < 3 ||
    //     formData.financeContactName.length > 70
    //   ) {
    //     newErrorMeg.financeContactName =
    //       "Finance contact name must be between 3 and 70 characters";
    //   }

    //   // Finance designation name
    //   if (formData.financeContactDesignation === "") {
    //     newErrorMeg.financeContactDesignation =
    //       "Finance contact designation is required!";
    //   } else if (
    //     formData.financeContactDesignation.length < 2 ||
    //     formData.financeContactDesignation.length > 20
    //   ) {
    //     newErrorMeg.financeContactDesignation =
    //       "Finance contact designation must be between 2 and 20 characters";
    //   }

    //   // Finance Contact Email
    //   if (formData.financeContactEmail === "") {
    //     newErrorMeg.financeContactEmail = "Finance email is required!";
    //   } else if (!formData.financeContactEmail.match(emailRex)) {
    //     newErrorMeg.financeContactEmail = "Finance email is not valid!";
    //   }

    //   // Finance phone number
    //   if (formData.financeContactPhone === "") {
    //     newErrorMeg.financeContactPhone = "Finance phone number is required!";
    //   }

    //   // ------------------- Reservation CONTACT DETAILS--------------------

    //   // Reservation contact name
    //   if (formData.reservationContactName === "") {
    //     newErrorMeg.reservationContactName =
    //       "Reservation contact name is required!";
    //   } else if (
    //     formData.reservationContactName.length < 2 ||
    //     formData.reservationContactName.length > 20
    //   ) {
    //     newErrorMeg.reservationContactName =
    //       "Reservation contact name must be between 2 and 20 characters";
    //   }

    //   // Reservation designation
    //   if (formData.reservationContactDesignation === "") {
    //     newErrorMeg.reservationContactDesignation =
    //       "Reservation contact designation is required!";
    //   } else if (
    //     formData.reservationContactDesignation.length < 2 ||
    //     formData.reservationContactDesignation.length > 20
    //   ) {
    //     newErrorMeg.reservationContactDesignation =
    //       "Reservation contact designation must be between 2 and 20 characters";
    //   }

    //   // Reservation Contact Email
    //   if (formData.reservationContactEmail === "") {
    //     newErrorMeg.reservationContactEmail = "Reservation email is required!";
    //   } else if (!formData.reservationContactEmail.match(emailRex)) {
    //     newErrorMeg.reservationContactEmail = "Reservation email is not valid!";
    //   }

    //   // Reservation phone number
    //   if (formData.reservationContactPhone === "") {
    //     newErrorMeg.reservationContactPhone =
    //       "Reservation phone number is required!";
    //   }

    //   // ------------------- EMERGENCY CONTACT DETAILS--------------------
    //   // Emergency contact name
    //   if (formData.emergencyContactName === "") {
    //     newErrorMeg.emergencyContactName =
    //       "Emergency contact name is required!";
    //   } else if (
    //     formData.emergencyContactName.length < 2 ||
    //     formData.emergencyContactName.length > 20
    //   ) {
    //     newErrorMeg.emergencyContactName =
    //       "Emergency contact name must be between 2 and 20 characters";
    //   }

    //   // Emergency designation
    //   if (formData.emergencyContactDesignation === "") {
    //     newErrorMeg.emergencyContactDesignation =
    //       "Emergency contact designation is required!";
    //   } else if (
    //     formData.emergencyContactDesignation.length < 2 ||
    //     formData.emergencyContactDesignation.length > 20
    //   ) {
    //     newErrorMeg.emergencyContactDesignation =
    //       "Emergency contact designation must be between 2 and 20 characters";
    //   }

    //   // Emergency Contact Email
    //   if (formData.emergencyContactEmail === "") {
    //     newErrorMeg.emergencyContactEmail = "Emergency email is required!";
    //   } else if (!formData.emergencyContactEmail.match(emailRex)) {
    //     newErrorMeg.emergencyContactEmail = "Emergency email is not valid!";
    //   }

    //   // Emergency phone number
    //   if (formData.emergencyContactPhone === "") {
    //     newErrorMeg.emergencyContactPhone =
    //       "Emergency phone number is required!";
    //   }

    //   // -------------------OWNERSHIP STRUCTURE--------------------
    //   // Share holders
    //   if (formData.shareholderCount === "") {
    //     newErrorMeg.shareholderCount = "Share holders is required!";
    //   } else if (formData.shareholderCount < 0) {
    //     newErrorMeg.shareholderCount = "Share holders  number is not valid.";
    //   } else if (formData.shareholderCount > 15) {
    //     newErrorMeg.shareholderCount = "Share holders to be 15.";
    //   } else if (ratioSum > 100) {
    //     newErrorMeg.shareholderCount = "Ratio percentage (%) must be 100%.";
    //   }

    //   // // Share info
    //   // if (formData.shareholdersInfo === "") {
    //   //   newErrorMeg.shareholdersInfo = "Share holders is required!";
    //   // }
    //   // Share info

    //   // -------------------COMPLINANCE --------------------
    //   // registration Docs
    //   if (formData.registrationDocs === "") {
    //     newErrorMeg.registrationDocs = "Registration docs is required!";
    //   } else if (
    //     !formData.registrationDocs.toLowerCase().endsWith(".jpg") &&
    //     !formData.registrationDocs.toLowerCase().endsWith(".png") &&
    //     !formData.registrationDocs.toLowerCase().endsWith(".pdf") &&
    //     !formData.registrationDocs.toLowerCase().endsWith(".jpeg")
    //   ) {
    //     newErrorMeg.registrationDocs =
    //       "Please select a valid image file (jpg, jpeg, png, or pdf).";
    //   }

    //   // Tax / VAT Registration
    //   if (formData.taxRegistrationNo === "") {
    //     newErrorMeg.taxRegistrationNo = "TAX/VAT is required!";
    //   }

    //   // registration Docs
    //   if (formData.travelAgentLicense === "") {
    //     newErrorMeg.travelAgentLicense = "Registration docs is required!";
    //   } else if (
    //     !formData.travelAgentLicense.toLowerCase().endsWith(".jpg") &&
    //     !formData.travelAgentLicense.toLowerCase().endsWith(".png") &&
    //     !formData.travelAgentLicense.toLowerCase().endsWith(".pdf") &&
    //     !formData.travelAgentLicense.toLowerCase().endsWith(".jpeg")
    //   ) {
    //     newErrorMeg.travelAgentLicense =
    //       "Please select a valid image file (jpg, jpeg, png or pdf).";
    //   }

    //   // error handling meg
    //   if (Object.keys(newErrorMeg).length > 0) {
    //     setErrorMeg(newErrorMeg);
    //     return;
    //   }
    // }

    // Form step 3
    if (currentStep === 3) {
      const newErrorMeg = {};

      // -------------------UNDERSTANDING CONTACT REQUIREMENT--------------------
      if (isHotelChecked) {
        // Distribution Market
        if (formData.distributionMarket === "") {
          newErrorMeg.distributionMarket =
            "Distribution Market (Country/Region) is required!";
        }

        // Source Market
        if (formData.sourceMarket === "") {
          newErrorMeg.sourceMarket = "Source Market is required!";
        }

        // daily Average Transaction
        if (formData.dailyAverageTransaction === "") {
          newErrorMeg.dailyAverageTransaction =
            "Daily average transaction is required!";
        } else if (formData.dailyAverageTransaction < 0) {
          newErrorMeg.dailyAverageTransaction =
            "Daily average transaction no positive value.";
        }

        // daily Average Purchase value
        if (formData.averagePurchaseValue === "") {
          newErrorMeg.averagePurchaseValue =
            "Daily average purchase is required!";
        } else if (formData.averagePurchaseValue < 0) {
          newErrorMeg.averagePurchaseValue =
            "Daily average purchase no positive value.";
        }

        // Total appx Monthly Transaction
        if (formData.monthlyTransaction === "") {
          newErrorMeg.monthlyTransaction =
            "Total appx monthly transaction is required!";
        } else if (formData.monthlyTransaction < 0) {
          newErrorMeg.monthlyTransaction =
            "Total appx monthly transaction no positive value.";
        }
      }

      // -------------------UNDERSTANDING CONTACT REQUIREMENT 2--------------------
      if (isFlightChecked) {
        // Distribution Market
        if (formData.distributionMarket2 === "") {
          newErrorMeg.distributionMarket2 =
            "Distribution Market (Country/Region) is required!";
        }

        // Source Market
        if (formData.sourceMarket2 === "") {
          newErrorMeg.sourceMarket2 = "Source Market is required!";
        }

        // daily Average Transaction
        if (formData.dailyAverageTransaction2 === "") {
          newErrorMeg.dailyAverageTransaction2 =
            "Daily average transaction is required!";
        } else if (formData.dailyAverageTransaction2 < 0) {
          newErrorMeg.dailyAverageTransaction2 =
            "Daily average transaction no positive value.";
        }

        // daily Average Purchase value
        if (formData.averagePurchaseValue2 === "") {
          newErrorMeg.averagePurchaseValue2 =
            "Daily average purchase is required!";
        } else if (formData.averagePurchaseValue2 < 0) {
          newErrorMeg.averagePurchaseValue2 =
            "Daily average purchase no positive value.";
        }

        // Total appx Monthly Transaction
        if (formData.monthlyTransaction2 === "") {
          newErrorMeg.monthlyTransaction2 =
            "Total appx monthly transaction is required!";
        } else if (formData.monthlyTransaction2 < 0) {
          newErrorMeg.monthlyTransaction2 =
            "Total appx monthly transaction no positive value.";
        }

        // Apprx Look to Book Ratio (100:1)
        if (formData.lookToBookRatio === "") {
          newErrorMeg.lookToBookRatio = "Look to book ratio is required!";
        } else if (
          parseInt(formData.lookToBookRatio) < 1 ||
          parseInt(formData.lookToBookRatio) > 100
        ) {
          newErrorMeg.lookToBookRatio = "The book ratio must be between 1-100";
        }
      }

      // error handling meg
      if (Object.keys(newErrorMeg).length > 0) {
        setErrorMeg(newErrorMeg);
        return;
      }
    }

    setCurrentStep(currentStep + 1);
  };

  const handlePrevButton = () => {
    setCurrentStep(currentStep - 1);
  };

  const formInfoCarrier = {
    next: handleNextButton,
    prev: handlePrevButton,
    formData: formData,
    setFormData: setFormData,
    handleInputFields: handleInputFields,
    errorMeg: errorMeg,
    handleCheckboxChange1: handleCheckboxChange1,
    handleCheckboxChange2: handleCheckboxChange2,
    handleCheckboxChange3: handleCheckboxChange3,
    handleHotelRadioChange: handleHotelRadioChange,
    isHotelChecked: isHotelChecked,
    handleFlightRadioChange: handleFlightRadioChange,
    isFlightChecked: isFlightChecked,
  };

  return (
    <section>
      <div className="gtr-box-container">
        <div className="text-center py-4">
          {/* form progress bar */}
          <FormProgressbar currentStep={currentStep} />
        </div>
        <div className="gtr-form-box">
          {/* Step 01 */}
          {currentStep === 1 && <StepOne formInfoCarrier={formInfoCarrier} />}

          {/* Step 02 */}
          {currentStep === 2 && <StepTwo formInfoCarrier={formInfoCarrier} />}

          {/* Step 03 */}
          {currentStep === 3 && <StepThree formInfoCarrier={formInfoCarrier} />}

          {/* Step 04 */}
          {currentStep === 4 && <StepFour formInfoCarrier={formInfoCarrier} />}
        </div>
      </div>
    </section>
  );
};

export default GtrForm;
