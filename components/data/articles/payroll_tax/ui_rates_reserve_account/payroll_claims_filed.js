import Article from '../../../../common/article'
import taxpayerAssistanceContact from '../../../contact/tax_assistance'

export default function payroll_claim_filed() {
  return (
    <Article h4="Claims Filed Against My Reserve Account">
      <p>
              At the time a UI claim is filed by your former employee, you are
              sent a notice. Also, each year in October you are sent a{" "}
        <i>Charges to Reserve Account </i>(DE 428T), which lists all the
              individuals who have collected UI benefits that have been charged
              against your reserve account during the previous fiscal year. If
              you need a copy of the DE 428T or additional information, call the
              Taxpayer Assistance Center at {taxpayerAssistanceContact.phone}.
      </p>
    </Article>
  );
}