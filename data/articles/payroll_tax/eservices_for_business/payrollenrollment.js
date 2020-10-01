import Article from '../../../../components/common/article'
import EservicesLink from '../../common_links/employer_resources/eservices_for_business'
import EservicesFAQLink from '../../common_links/jobs_resources/faq_eservices_for_business'
import taxPayerContact from '../../../contact/tax_assistance'

export default function payrollenrollment() {
  return (
    <Article h4="Payroll Enrollment">
      <p>
              To get assistance with enrolling or using <EservicesLink />
              , refer to the <EservicesFAQLink />. You may call the Taxpayer
              Assistance Center at {taxPayerContact.phone} for further
              assistance.
      </p>
    </Article>
  );
}