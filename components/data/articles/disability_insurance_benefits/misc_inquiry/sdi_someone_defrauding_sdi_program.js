import Article from '../../../../common/article'
import FraudInformation from '../../common_links/fraud/fraud_and_penalties_info'
import FraudReportingForm from '../../common_links/fraud/fraud_reporting_form_link'
import fraudContact from '../../../contact/fraud_reporting'

export default function sdi_somone_defrauding_sdi_program(){
  return (
    <Article
      h4="I Know of Someone Who is Defrauding the SDI Program, What Should I
              Do?"
    >
      <p>
              Thank you for your concern in protecting the integrity of the
              State Disability Insurance (SDI) program. We investigate all fraud
              tips that we receive. Since you suspect that an individual has
              committed fraud against the SDI program, we urge you to call the
              Employment Development Department&#39;s Fraud Hotline at
        {fraudContact.hotline}, or submit a <FraudReportingForm /> online.
      </p>
      <p>
              The source of information and the results of any investigation are
              confidential.
      </p>
      <p>
              For additional information, you may visit <FraudInformation />.
      </p>
    </Article>
  );
}