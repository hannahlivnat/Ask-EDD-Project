import Article from '../../../../common/article';
//OUTSIDE LINKS
import FraudReportLink from '../../common_links/fraud/fraud_reporting_form_link'
import FraudComplaintFormEng from '../../common_links/fraud/ueo_lead_referral_form_en'
import FraudComplaintFormSpan from '../../common_links/fraud/ueo_lead_referral_form_spanish'
import FraudandPenalties from '../../common_links/fraud/fraud_and_penalties_info'
import RecentFraudConvictions from '../../common_links/fraud/recent_fraud_convictions'
//CONTACT
import fraudContact from '../../../contact/edd_payroll_fraud_contact'
import CAStateDepContact from '../../../contact/ca_state_department_of_insurance_contact'
import SocialSecurityContact from '../../../contact/social_security_admin_contact'

export default function bpo_report_fraud() {
  return (
    <Article h4="How to Report Fraud">
      <p>
              If you think someone is committing fraud against one of the
              EDD&#39;s programs, it is important that you let us know.
              Allegations of fraud are taken seriously, and you can remain
              anonymous.
      </p>
      <p>
              When reporting fraud, include all relevant information. Don’t
              include your name and phone number if you wish to remain
              anonymous. You will not receive a call from the EDD unless more
              information is needed.
      </p>
      <p>
              If you already reported fraud and need to provide more
              information, contact the EDD again. Include the reference number
              provided when you first reported the issue.
      </p>
      <p>
        <b>Note</b>: To preserve confidentiality and integrity, the EDD
              does not disclose status or provide updates to allegations of
              fraud, unless court ordered or as required by law. The EDD will
              not disclose your identity unless required by law.
      </p>
      <p>There are several ways to report fraud:</p>
      <p>
              Report Unemployment Insurance, Disability Insurance, or Paid
              Family Leave Fraud:
      </p>
      <ul>
        <li>
          Submit a <FraudReportLink /> online.
        </li>
        <li>Email: {fraudContact.email}.</li>
        <li>
                  Call: <b>{fraudContact.phone}</b>.
        </li>
        <li>
                  Fax: <b>{fraudContact.fax}</b>.
        </li>
        <li>
                  Mail us one of the following forms:
          <ol>
            <li>
              <FraudComplaintFormEng />
            </li>
            <li>
              <FraudComplaintFormSpan />
            </li>
          </ol>
        </li>
      </ul>
      <p>Report Other Types of Fraud:</p>
      <p>
              If your allegation involves fraud in the following programs,
              please call the agencies listed below. The EDD does not handle
              these types of fraud.
      </p>
      <ol>
        <li>
                  Workers Compensation — Contact the California State Department
                  of Insurance at <b>{CAStateDepContact.phone}</b>.
        </li>
        <li>
                  Social Security Insurance — Contact the Social Security
                  Administration at <b>{SocialSecurityContact.phone}</b>.
        </li>
      </ol>
      <p>
        For more information, visit <FraudandPenalties /> or 
        review our <RecentFraudConvictions />.
      </p>
    </Article>
  );
}
