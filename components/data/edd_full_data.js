//Import Articles ============================================
import BPOGeneralInfo from './articles/benefit_programs_online/bpo_general_information'
import BPORegistration from './articles/benefit_programs_online/bpo_registration'
import BPOUpdateProfile from './articles/benefit_programs_online/bpo_update_my_profile'
import BPOUpdateInformation from './articles/benefit_programs_online/bpo_update_information'
import BPOForgotEmailPassword from './articles/benefit_programs_online/bpo_forgot_email_password'
import BPOForgotSecurityQuestions from './articles/benefit_programs_online/bpo_forgot_security_questions'
import BPOPersonalImageOrCaption from './articles/benefit_programs_online/bpo_personalimage_or_caption'
import BPOLockedOutOfAccount from './articles/benefit_programs_online/bpo_locked_out_of_account'
import BPOReportFraud from './articles/benefit_programs_online/bpo_report_fraud'
import BPOPasswordReset from './articles/benefit_programs_online/bpo_password_reset'
import BPOWhereIsPayment from './articles/benefit_programs_online/bpo_where_is_payment'
import BPOEDDDebitCardInfo from './articles/benefit_programs_online/edd_debit_card_general_information'
import BPOEDDDebitCardFees from './articles/benefit_programs_online/edd_debit_card_fees'
import BPONoDebitCard from './articles/benefit_programs_online/bpo_no_debit_card'
import BPOFailureToNotify from './articles/benefit_programs_online/bpo_failure_to_notify_edd'

//Full EDD Category and Article Data =======================
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
      "Forgot Answers to Security Questions": <BPOForgotSecurityQuestions />,
      "Don't Recognize Personal Image or Caption": <BPOPersonalImageOrCaption />,
      "Locked Out of Account": <BPOLockedOutOfAccount />,
      "Password Reset": <BPOPasswordReset />,
      "Report Fraud": <BPOReportFraud />,
    },
    "Payment": {
      "Where is My Payment": <BPOWhereIsPayment />,
      "EDD Debit Card: General Information": <BPOEDDDebitCardInfo />,
      "EDD Debit Card Fees?": <BPOEDDDebitCardFees />,
      "Benefit Checks Without Debit Card": <BPONoDebitCard />,
      "Failure to Notify EDD of Changes": <BPOFailureToNotify />,
    },
    "Overpayment": {},
  },
  "Unemployment Insurance": {
    "UI Online (UIO)": {},
    "Claim Questions": {},
    "Certify for Continued Benefits": {},
    "Appointment": {},
    "Disqualifications & Appeals": {},
    "School or Training": {},
    "Employer Inquiry": {},
    "Other": {},
  },
  "Disability Insurance Benefits": {
    "SDI Online": {},
    "Claim Questions": {},
    "Certify for Continued Benefits": {},
    "Tax Questions": {},
    "Miscellaneous Inquiry": {},
  },
  "Paid Family Leave": {
    "SDI Online": {

    },
    "Claims Questions": {

    },
  },
  "Workforce Services": {

  },
  "CalJOBS": {

  },
  "Labor Market Information": {

  },
  "Payroll Tax": {

  },
}

export default eddData;