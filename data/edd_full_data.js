//Import Articles =====================================================================================================
//BENEFIT OVERPAYMENT ARTICLES
import BPOGeneralInfo from './articles/benefit_programs_online/general_information/bpo_general_information'
import BPORegistration from './articles/benefit_programs_online/create_update_bpo-profile/bpo_registration'
import BPOUpdateProfile from './articles/benefit_programs_online/create_update_bpo-profile/bpo_update_my_profile'
import BPOUpdateInformation from './articles/benefit_programs_online/create_update_bpo-profile/bpo_update_information'
import BPOForgotEmailPassword from './articles/benefit_programs_online/account_issues/bpo_forgot_email_password'
import BPOForgotSecurityQuestions from './articles/benefit_programs_online/account_issues/bpo_forgot_security_questions'
import BPOPersonalImageOrCaption from './articles/benefit_programs_online/account_issues/bpo_personalimage_or_caption'
import BPOLockedOutOfAccount from './articles/benefit_programs_online/account_issues/bpo_locked_out_of_account'
import BPOReportFraud from './articles/benefit_programs_online/account_issues/bpo_report_fraud'
import BPOPasswordReset from './articles/benefit_programs_online/account_issues/bpo_password_reset'
import BPOWhereIsPayment from './articles/benefit_programs_online/payment/bpo_where_is_payment'
import BPOEDDDebitCardInfo from './articles/benefit_programs_online/payment/edd_debit_card_general_information'
import BPOEDDDebitCardFees from './articles/benefit_programs_online/payment/edd_debit_card_fees'
import BPONoDebitCard from './articles/benefit_programs_online/payment/bpo_no_debit_card'
import BPOFailureToNotify from './articles/benefit_programs_online/payment/bpo_failure_to_notify_edd'
import BPOStopPayments from './articles/benefit_programs_online/payment/bpo_stop_payments'
import BPOReplaceCheck from './articles/benefit_programs_online/payment/bpo_replace_lost_damaged_stolen_check'
import BPOChildSupportDeduction from './articles/benefit_programs_online/payment/bpo_child_support_deduction'
import BPOOverpayments from './articles/benefit_programs_online/overpayment/bpo_overpayments'
import BPOAccountToUseCard from './articles/benefit_programs_online/payment/bpo_account_to_use_debit_card'
import BPOPayOverpayment from './articles/benefit_programs_online/overpayment/bpo_pay_overpayment'
import BPOBenefitOffset from './articles/benefit_programs_online/overpayment/bpo_what_is_benefit_offset'
import BPOIncomeTaxOffset from './articles/benefit_programs_online/overpayment/bpo_income_tax_offset'
import BPOPropertyLotterWinnings from './articles/benefit_programs_online/overpayment/bpo_property_lottery_winnings'
import BPOLegalAction from './articles/benefit_programs_online/overpayment/bpo_legal_action'
import BPORequestOverpaymentCopy from './articles/benefit_programs_online/overpayment/bpo_request_copy_overpayment'
//UNEMPLOYMENT INSURANCE ARTICLES
import UIORegistration from './articles/unemployment_insurance/ui-online/uio_registration'
import UIOUpdateInfo from './articles/unemployment_insurance/ui-online/uio_update_information'
import UIOUIOnline from './articles/unemployment_insurance/ui-online/uio_what_is_ui_online'
import UIOCancelClaim from './articles/unemployment_insurance/claim_questions/uio_cancel_claim'
import UIOPrintClaim from './articles/unemployment_insurance/claim_questions/uio_claim_print_out'
import UIOEDDNeedsWage from './articles/unemployment_insurance/claim_questions/uio_edd_needs_my_wage_info'
import UIOOpenClaimSchoolEmployee from './articles/unemployment_insurance/claim_questions/uio_file_new_claim_school_employees'
import UIOFileOrReopenClaim from './articles/unemployment_insurance/claim_questions/uio_file_or_reopen_claim'
import UIOFiledClaimNoResponse from './articles/unemployment_insurance/claim_questions/uio_filed_claim_no_response'
import UIOMadeClaimMistake from './articles/unemployment_insurance/claim_questions/uio_made_mistake_on_claim'
import UIOMissingWagesFromClaim from './articles/unemployment_insurance/claim_questions/uio_missing_wages_from_claim'
import UIOPaidUnemployment from './articles/unemployment_insurance/claim_questions/uio_paid_into_unemployment'
import UIOWorkedLivedOutsideCA from './articles/unemployment_insurance/claim_questions/uio_worked_or_lived_outside_ca'
import UIOCommissionResidualEtc from './articles/unemployment_insurance/certify_for_cont_benefits/uio_commission_residual_etc'
import UIOMistakeonContBenefits from './articles/unemployment_insurance/certify_for_cont_benefits/uio_mistake_on_cont_benefits_cert'
import UIOReportingWages from './articles/unemployment_insurance/certify_for_cont_benefits/uio_reporting_wages'
import UIOUnableToWork from './articles/unemployment_insurance/certify_for_cont_benefits/uio_sick_or_unable_to_work'
import UIOSocialSecPension from './articles/unemployment_insurance/certify_for_cont_benefits/uio_social_sec_and_pension'
import UIOPhoneInterviewPayStatus from './articles/unemployment_insurance/appointment/uio_phone_interview_eligibility_and_pay_status'
import UIORescheduleInterview from './articles/unemployment_insurance/appointment/uio_reschedule_phone_interview'
import UIODontAgreeWithDisqualification from './articles/unemployment_insurance/disqualifications_and_appeals/uio_dont_agree_with_disqualification'
import UIOWonAppeal from './articles/unemployment_insurance/disqualifications_and_appeals/uio_won_appeal'
import UIOCtb from './articles/unemployment_insurance/school_or_training/uio_ctb'
import UIOSchoolOrTraining from './articles/unemployment_insurance/school_or_training/uio_school_or_training'
import UIOReceivedWageRequest from './articles/unemployment_insurance/employer_inquiry/uio_received_wage_request'
import UIOSides from './articles/unemployment_insurance/employer_inquiry/uio_sides'
import UIOAlternativeBasePeriod from './articles/unemployment_insurance/other/uio_alternative_base_period'
import UIOForm1099g from './articles/unemployment_insurance/other/uio_form_1099g'
import UIOMissedCantAttendReaAppt from './articles/unemployment_insurance/other/uio_missed_or_cant_attend_rea_appt'
import UIOWhatisEddTelecert from './articles/unemployment_insurance/other/uio_what_is_edd_telecert'
//DISABILITY INSURANCE BENEFITS
import SDIRegistration from './articles/disability_insurance_benefits/sdi_online/sdi_registration'
import SDIFileClaim from './articles/disability_insurance_benefits/sdi_online/sdi_file_claim_for_disability_insurance'
import SDIPhysicianPractitionerCert from './articles/disability_insurance_benefits/sdi_online/sdi_physician_practitioner_cert_for_benefits'
import SDIOnlineVoluntaryPlanFiling from './articles/disability_insurance_benefits/sdi_online/sdi_online_voluntary_plan_filing'
import SDIEDDCustomerAccountNumber from './articles/disability_insurance_benefits/sdi_online/sdi_edd_customer_account_number'
import SDIErrorMessage from './articles/disability_insurance_benefits/sdi_online/sdi_received_error_message'
import SDIQualification from './articles/disability_insurance_benefits/claim_questions/sdi_qualification_for_disability_insurance_benefits'
import SDINewClaim from './articles/disability_insurance_benefits/claim_questions/sdi_file_new_claim'
import SDIOrderClaim from './articles/disability_insurance_benefits/claim_questions/sdi_order_claim_forms'
import SDIPregnantWeeks from './articles/disability_insurance_benefits/claim_questions/pregnant_how_many_weeks_of_benefits'
import SDIUIStillFile from './articles/disability_insurance_benefits/claim_questions/sdi_collecting_ui_benefits'
import SDIPregnantFileWhich from './articles/disability_insurance_benefits/claim_questions/sdi_pregnant_di_or_family_leave'
import SDIFindClaimStatusOnline from './articles/disability_insurance_benefits/claim_questions/sdi_check_status_of_di_claim'
import SDIDoctorCharge from './articles/disability_insurance_benefits/claim_questions/sdi_can_doctors_office_charge_for_cert_filing'
import SDIMissingWages from './articles/disability_insurance_benefits/claim_questions/sdi_missing_wage_from_claim'
import SDIStopBenefitsForDeceased from './articles/disability_insurance_benefits/claim_questions/sdi_stop_benefits_for_deceased_claimants'
import SDIReportReturntoWork from './articles/disability_insurance_benefits/claim_questions/sdi_report_return_to_work'
import SDIAutomatedPayment from './articles/disability_insurance_benefits/cert_for_cont_benefits/sdi_automated_payment_status'
import SDINonAutomatedPayment from './articles/disability_insurance_benefits/cert_for_cont_benefits/sdi_not_automated_payment_status'
import SDIExtendBenefits from './articles/disability_insurance_benefits/cert_for_cont_benefits/sdi_extend_benefits'
import SDIForm1099G from './articles/disability_insurance_benefits/tax_questions/copy_of_form_1099g'
import SDITaxable from './articles/disability_insurance_benefits/tax_questions/disability_last_year_are_benefits_taxable'
import SDIFraud from './articles/disability_insurance_benefits/misc_inquiry/sdi_someone_defrauding_sdi_program'
import SDIEmployerPhysicianInq from './articles/disability_insurance_benefits/misc_inquiry/sdi_employee_and_phys_pract_inquiry'
//PAID FAMILY LEAVE ARTICLES
import PFLToSDIRelationship from './articles/paid_family_leave/sdi_online/pfl_relationship_of_pfd_to_sdi'
import PFLBondClaim from './articles/paid_family_leave/sdi_online/bonding_claim_for_pfl'
import PFLCareClaim from './articles/paid_family_leave/sdi_online/sdi_care_claim_for_pfl'
import PFLOnlineVolFile from './articles/paid_family_leave/sdi_online/sdi_online_voluntary_plan_filing'
import PFLEDD from './articles/paid_family_leave/sdi_online/sdi_edd_customer_account_number'
import PFLWhatIs from './articles/paid_family_leave/claims_question/pfl_what_is'
import PFLQualify from './articles/paid_family_leave/claims_question/pfl_qualify'
import PFLFileClaim from './articles/paid_family_leave/claims_question/pfl_file_new_claim'
import PFLOrderClaim from './articles/paid_family_leave/claims_question/pfl_order_claim_forms'
import PFLHowLong from './articles/paid_family_leave/claims_question/pfl_time_to_recieve_benefits'
//WORKFORCE SERVICES ARTICLES
import WhatIsETPL from './articles/workforce_services/general/what_is_etpl'
import WorkTraining from './articles/workforce_services/resources/get_training'
import EmploymentOpp from './articles/workforce_services/resources/employment_opportunities'
//CALJOBS ARTICLES
import CalJobsRegister from './articles/caljobs/create_update_accout/register_in_caljobs'
import CalJobsSocialSecurity from './articles/caljobs/create_update_accout/why_caljobs_needs_social'
import CalJobsChangePersonalInfo from './articles/caljobs/create_update_accout/make_changes_to_personal_info'
import CalJobsChangeName from './articles/caljobs/create_update_accout/how_to_change_name'
import CalJobsHowSecureIsInfo from './articles/caljobs/create_update_accout/how_secure_is_information'
import CalJobsReportSystemProblem from './articles/caljobs/account_problem/report_system_problem'
import CalJobsForgotPasswordUser from './articles/caljobs/account_problem/forgot_password_or_userid'
import CalJobsJobListingLength from './articles/caljobs/job_search/how_long_job_listing_in_system'
import CalJobsResume from './articles/caljobs/job_search/caljobs_resume'
import CalJobsFindStateOrFedJob from './articles/caljobs/job_search/find_state_or_fed_job'
//LABORMARKET ARTICLES
import LaborMarketWageDataByOcc from './articles/labor_market_info/wage_data_and_resources/wage_data_by_occ'
import LaborMarketMinWage from './articles/labor_market_info/wage_data_and_resources/min_wage_ca'
import LaborMarketUnemployRate from './articles/labor_market_info/wage_data_and_resources/unemployment_rate_in_my_city'
import LaborMarketTopEmployers from './articles/labor_market_info/wage_data_and_resources/list_top_employers'
import LaborMarketWageDisagreement from './articles/labor_market_info/employee_rights/wages_owed_disagreement'
import LaborMarketOvertime from './articles/labor_market_info/employee_rights/when_owed_overtime'
import LaborMarketLaidOffFinalPay from './articles/labor_market_info/employee_rights/laid_off_no_final_check'
import LaborMarketBenefitsEntitled from './articles/labor_market_info/employee_rights/employee_benefits_entitled'
import LaborMarketSexualHarrassment from './articles/labor_market_info/employee_rights/sexual_harrassment_claim'
import LaborMarketLaborLaw from './articles/labor_market_info/wage_data_and_resources/labor_law'
//PAYROLL ARTICLES
import PayrollEnrollment from './articles/payroll_tax/eservices_for_business/payrollenrollment'
import PayrollUsernamePassword from './articles/payroll_tax/eservices_for_business/payroll_username_and_password'
import PayrollUniqueEmail from './articles/payroll_tax/eservices_for_business/payroll_unique_email'
import PayrollEnrollmentConfirm from './articles/payroll_tax/eservices_for_business/payroll_enrollment_confirmation_email'
import PayrollMultipleClient from './articles/payroll_tax/eservices_for_business/payroll_multiple_client_accounts'
import PayrollNewEmployeeReport from './articles/payroll_tax/eservices_for_business/report_new_employees'
import PayrollIndependentContractReport from './articles/payroll_tax/eservices_for_business/report_independent_contractors'
import PayrollNo from './articles/payroll_tax/eservices_for_business/no_payroll'
import PayrollTaxWageReport from './articles/payroll_tax/electronic_filing/tax_wage_report'
import PayrollBulkTransmissions from './articles/payroll_tax/electronic_filing/bulk_transmissions'
import PayrollVendorPayments from './articles/payroll_tax/electronic_filing/vendor_payments'
import PayrollReserveAccountInfo from './articles/payroll_tax/ui_rates_reserve_account/payroll_reserve_account'
import PayrollClaimFiled from './articles/payroll_tax/ui_rates_reserve_account/payroll_claims_filed'
import PayrollReplacementCopy from './articles/payroll_tax/ui_rates_reserve_account/payroll_replacement_ui_rate'
import PayrollUiRates from './articles/payroll_tax/ui_rates_reserve_account/payroll_ui_rates'
import PayrollEmployerTaxNumber from './articles/payroll_tax/registration/payroll_employer_account_number'
import PayrollBusinessChanges from './articles/payroll_tax/registration/payroll_changes_to_business'
import PayrollElectronicFunds from './articles/payroll_tax/other/payroll_electronic_transfer'
import PayrollWageHistory from './articles/payroll_tax/other/payroll_wage_history'
import PayrollAdjustTax from './articles/payroll_tax/other/payroll_adjust_tax'
import PayrollMultistateEmployment from './articles/payroll_tax/other/payroll_multistate_employment'
import PayrollW2And1099s from './articles/payroll_tax/other/payroll_w2_and_1099s'
import PayrollTaxSeminars from './articles/payroll_tax/other/payroll_tax_seminars'

//Full EDD Category and Article Data =================================================================================
const eddData = {
  "Benefit Programs Online (BPO)": {
    "BPO General Information": {
      "BPO - General Information": <BPOGeneralInfo />,
    },
    "Create / Update BPO Profile": {
      "Registration": <BPORegistration />,
      "Update My Profile": <BPOUpdateProfile />,
      "Update Information": <BPOUpdateInformation />,
    },
    "BPO Account Issues": {
      "Forgot Email or Password": <BPOForgotEmailPassword />,
      "Forgot Answers to Security Questions": (
        <BPOForgotSecurityQuestions />
      ),
      "Don't Recognize Personal Image or Caption": (
        <BPOPersonalImageOrCaption />
      ),
      "Locked Out of Account": <BPOLockedOutOfAccount />,
      "Password Reset": <BPOPasswordReset />,
      "Report Fraud": <BPOReportFraud />,
    },
    Payment: {
      "Where is My Payment": <BPOWhereIsPayment />,
      "EDD Debit Card: General Information": <BPOEDDDebitCardInfo />,
      "EDD Debit Card Fees": <BPOEDDDebitCardFees />,
      "Benefit Checks Without Debit Card": <BPONoDebitCard />,
      "Failure to Notify EDD of Changes": <BPOFailureToNotify />,
      "Stop Payments": <BPOStopPayments />,
      "Replace Lost, Damaged, or Stolen Check": <BPOReplaceCheck />,
      "Child Support Deduction": <BPOChildSupportDeduction />,
      "Do I Need An Account with Bank of America to Use My EDD Debit Card?": (
        <BPOAccountToUseCard />
      ),
    },
    Overpayment: {
      "Overpayments General Information": <BPOOverpayments />,
      "How Can I Pay my Benefits Overpayment?": <BPOPayOverpayment />,
      "What is a Benefit Offset?": <BPOBenefitOffset />,
      "Federal/State Income Tax Offset": <BPOIncomeTaxOffset />,
      "Why Did the EDD Take my Unclaimed Property/Lottery Winnings?": (
        <BPOPropertyLotterWinnings />
      ),
      "Legal Action": <BPOLegalAction />,
      "Request a Copy of My Overpayment Notice": (
        <BPORequestOverpaymentCopy />
      ),
    },
  },
  "Unemployment Insurance": {
    "UI Online (UIO)": {
      "What is UI Online?": <UIOUIOnline />,
      "UIO Registration": <UIORegistration />,
      "Update Address, Phone, Number, or Email": <UIOUpdateInfo />,
    },
    "Claim Questions": {
      "How do I File a New Claim or Reopen a Claim?": (
        <UIOFileOrReopenClaim />
      ),
      "Claim Print Out": <UIOPrintClaim />,
      "How Do I Cancel a Claim?": <UIOCancelClaim />,
      "Filed a Claim, No Response": <UIOFiledClaimNoResponse />,
      "Worked or Live Outside California": <UIOWorkedLivedOutsideCA />,
      "File a New Claim - School Employees": (
        <UIOOpenClaimSchoolEmployee />
      ),
      "Made Mistake on Claim Filing Application": <UIOMadeClaimMistake />,
      "Missing Wages from Claim": <UIOMissingWagesFromClaim />,
      "EDD Needs My Wage Information": <UIOEDDNeedsWage />,
      "Paid into Unemployment": <UIOPaidUnemployment />,
    },
    "Certify for Continued Benefits": {
      "Reporting Wages While Certifying for Continued Benefits": (
        <UIOReportingWages />
      ),
      "Commission, Residual and Other Pay": <UIOCommissionResidualEtc />,
      "Social Security and Pensions": <UIOSocialSecPension />,
      "Sick or Unable to Work": <UIOUnableToWork />,
      "Made a Mistake on Continued Benefits Certification": (
        <UIOMistakeonContBenefits />
      ),
    },
    Appointment: {
      "Reschedule Phone Eligibility Interview": (
        <UIORescheduleInterview />
      ),
      "Phone Interview Eligibility and Payment Status": (
        <UIOPhoneInterviewPayStatus />
      ),
    },
    "Disqualifications & Appeals": {
      "Don't Agree with Disqualification": (
        <UIODontAgreeWithDisqualification />
      ),
      "I Won My Appeal": <UIOWonAppeal />,
    },
    "School or Training": {
      "California Training Benefits (CTB)": <UIOCtb />,
      "School or Training": <UIOSchoolOrTraining />,
    },
    "Employer Inquiry": {
      "State Information Data Exchange System (SIDES)": <UIOSides />,
      "I Received a Request for Wages": <UIOReceivedWageRequest />,
    },
    Other: {
      "Form 1099G for Taxes": <UIOForm1099g />,
      "Missed REA Appointment or Can't Attend REA Appointment": (
        <UIOMissedCantAttendReaAppt />
      ),
      "Alternative Base Period": <UIOAlternativeBasePeriod />,
      "What is EDD Tele-Cert": <UIOWhatisEddTelecert />,
    },
  },
  "Disability Insurance Benefits": {
    "SDI Online": {
      Registration: <SDIRegistration />,
      "File Claim": <SDIFileClaim />,
      "Physician/Practitioner Certifying for Benefits": (
        <SDIPhysicianPractitionerCert />
      ),
      "Online Voluntary Plan Filing": <SDIOnlineVoluntaryPlanFiling />,
      "EDD Customer Account Number": <SDIEDDCustomerAccountNumber />,
      "Received Error Message": <SDIErrorMessage />,
    },
    "Claim Questions": {
      "Do I Qualify for Disability Insurance Benefits?": (
        <SDIQualification />
      ),
      "File a New Claim": <SDINewClaim />,
      "Order Claim Form(s)": <SDIOrderClaim />,
      "I am Pregnant, How Many Weeks of Benefits Will I Receive?": (
        <SDIPregnantWeeks />
      ),
      "I Was Collecting UI Benefits But Now Have a Disability, Can I Still File for DI Benefits?": (
        <SDIUIStillFile />
      ),
      "I am Pregnant, Do I File for Disability Insurance or Paid Family Leave?": (
        <SDIPregnantFileWhich />
      ),
      "Check Status of Disability Insurance Claim Online": (
        <SDIFindClaimStatusOnline />
      ),
      "Charge for Filling Out Physician/Practitioner Certificate?": (
        <SDIDoctorCharge />
      ),
      "Missing Wages From Claim": <SDIMissingWages />,
      "Stop Benefits for Deceased Claimants": (
        <SDIStopBenefitsForDeceased />
      ),
      "Report a Return to Work Date": <SDIReportReturntoWork />,
    },
    "Certify for Continued Benefits": {
      "Automated Payment Status": <SDIAutomatedPayment />,
      "Not Automated Payment Status": <SDINonAutomatedPayment />,
      "Extend Benefits": <SDIExtendBenefits />,
    },
    "Tax Questions": {
      "Copy of the Form 1099G": <SDIForm1099G />,
      "Are My Disability Insurance Benefits Taxable?": <SDITaxable />,
    },
    "Miscellaneous Inquiry": {
      "Reporting Fraud": <SDIFraud />,
      "Employee and Physician/Practitioner Inquiry": (
        <SDIEmployerPhysicianInq />
      ),
    },
  },
  "Paid Family Leave": {
    "SDI Online": {
      "I am Pregant, Do I File for Disability Insurance or Paid Family Leave?": (
        <SDIPregnantFileWhich />
      ),
      "What is the Relationship of Paid Family Leave to State Disability Insurance": (
        <PFLToSDIRelationship />
      ),
      "File a Bonding Claim for Paid Family Leave": <PFLBondClaim />,
      "File a Care Claim for Paid Family Leave": <PFLCareClaim />,
      "Online Voluntary Plan Filing": <PFLOnlineVolFile />,
      "EDD Customer Account Number (EDDCAN)": <PFLEDD />,
    },
    "Claims Questions": {
      "What is Paid Family Leave?": <PFLWhatIs />,
      "Do I Qualify for Paid Family Leave Benefits": <PFLQualify />,
      "How Do I File a New Claim?": <PFLFileClaim />,
      "How Can I Order a Paid Family Leave Claim Form(s)?": (
        <PFLOrderClaim />
      ),
      "How Long May a Person Receive Paid Family Leave Benefits": (
        <PFLHowLong />
      ),
    },
  },
  "Workforce Services": {
    "General": {
      "What is the Eligible Training Provider List (ETPL)?": (
        <WhatIsETPL />
      ),
    },
    "Resources": {
      "Where Can I Get Training": <WorkTraining />,
      "Where Can I Find Employment Opportunities?": <EmploymentOpp />,
    },
  },
  "CalJOBS": {
    "Create / Update Account": {
      "How to Register in CalJOBS": <CalJobsRegister />,
      "Why Does CalJOBS Need My Social Security Number?": (
        <CalJobsSocialSecurity />
      ),
      "How Can I Make Changes to My Personal Information": (
        <CalJobsChangePersonalInfo />
      ),
      "How Can I Change My Name?": <CalJobsChangeName />,
      "How Secure is My Information?": <CalJobsHowSecureIsInfo />,
    },
    "Account Problem": {
      "Report a CalJobs System Problem": <CalJobsReportSystemProblem />,
      "Forgot Password and/or User ID": <CalJobsForgotPasswordUser />,
    },
    "Job Search": {
      "How Long is a Job Listing in the System": (
        <CalJobsJobListingLength />
      ),
      "CalJOBS Resume": <CalJobsResume />,
      "How to Find a State or Federal Job": <CalJobsFindStateOrFedJob />,
    },
  },
  "Labor Market Information": {
    "Wage Data and Resources": {
      "Where Can I Find Wage Data by Occupation": (
        <LaborMarketWageDataByOcc />
      ),
      "What is the Minimum Wage in California?": <LaborMarketMinWage />,
      "Where Can I Find the Unemployment Rate for My City?": (
        <LaborMarketUnemployRate />
      ),
      "Where Can I Find a List of Top Employers in My Area?": (
        <LaborMarketTopEmployers />
      ),
      "Where Can I Find Labor Law and EEO Posters?": <LaborMarketLaborLaw />,
    },
    "Employee Rights": {
      "My Employer and I Disagree About the Wages I Am Owed": (
        <LaborMarketWageDisagreement />
      ),
      "When Does My Employe Have to Pay Overtime?": <LaborMarketOvertime />,
      "My Employer Laid me Off, But Has Not Given Me a Final Paycheck": (
        <LaborMarketLaidOffFinalPay />
      ),
      "What Benefits are Employees Entitled to?": (
        <LaborMarketBenefitsEntitled />
      ),
      "Sexual Harrassment Information": <LaborMarketSexualHarrassment />,
    },
  },
  "Payroll Tax": {
    "e-Services for Business": {
      "Enrollment": <PayrollEnrollment />,
      "Username and Password": <PayrollUsernamePassword />,
      "Unique Email Address": <PayrollUniqueEmail />,
      "Enrollment Confirmation Email": <PayrollEnrollmentConfirm />,
      "Add Multiple Client Accounts": <PayrollMultipleClient />,
      "Report of New Employees": <PayrollNewEmployeeReport />,
      "Report of Independent Contractors": <PayrollIndependentContractReport />,
      "No Payroll": <PayrollNo />,
    },
    "Electronic Filing": {
      "Tax and Wage Report Forms": <PayrollTaxWageReport />,
      "Bulk Transmissions (XML and Web Services)": <PayrollBulkTransmissions />,
      "Vendor Payments for Payroll Tax Deposit": <PayrollVendorPayments />,
    },
    "UI Rates & Reserve Account Information": {
      "Form 1099G": <UIOForm1099g />,
      "Reserve Account Information": <PayrollReserveAccountInfo />,
      "Claims Filed Against My Reserve Account": <PayrollClaimFiled />,
      "Replacement Copy of UI Rate Notice": <PayrollReplacementCopy />,
      "UI Rates": <PayrollUiRates />,
    },
    "Registration": {
      "Employer Payroll Tax Account Number": <PayrollEmployerTaxNumber />,
      "Changes for My Business": <PayrollBusinessChanges />,
    },
    "Other": {
      "Electronic Funds Transfer Payment": <PayrollElectronicFunds />,
      "Wage History": <PayrollWageHistory />,
      "Adjust Tax and Wage Reports": <PayrollAdjustTax />,
      "Multistate Employment": <PayrollMultistateEmployment />,
      "W-2s and 1099s": <PayrollW2And1099s />,
      "Payroll Tax Seminars": <PayrollTaxSeminars />,
    },
  },
};

export default eddData;