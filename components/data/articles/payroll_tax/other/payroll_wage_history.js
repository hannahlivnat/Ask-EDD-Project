import Article from '../../../../common/article'
import eddContact from '../../../contact/edd_contact'
export default function payroll_wage_history() {
  return (
    <Article h4="Wage History">
      <p>
              We can give you a list of your California employers and total
              subject wages. Wage history information is confidential, so your
              request must be in writing and include the following:
      </p>
      <ul>
        <li>Full name (other names used, if applicable)</li>
        <li>Address</li>
        <li>Phone number</li>
        <li>Social Security number</li>
        <li>Signature</li>
        <li>The quarters or years for the request</li>
      </ul>
      <p>
        <b>Note</b>: If this request is from a third party, you must also
              include a written authorization signed and dated from the account
              owner stating that they allow the EDD to share wage history
              information.
      </p>
      <p>Mail to:</p>
      <p>Employment Development Department</p>
      <p>Document Retrieval, MIC 15A</p>
      <p>PO Box 826880</p>
      <p>Sacramento, CA 94280-0001</p>
      <p>
              You can also fax your request to {eddContact.fax}, Attn: Wage
              History Request.
      </p>
    </Article>
  );
}
