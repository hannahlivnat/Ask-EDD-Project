import Article from "../../../../components/common/article";
import eddContact from '../../../contact/edd_contact'

export default function sdi_employee_and_phys_pract_inquiry() {
  return (
    <Article h4="Employer and Physician/Practitioner Inquiry">
      <p>
              To assist you with questions about Disability Insurance, the
              Employment Development Department has compiled a list of the most
              common questions. If you have additional questions, call{" "}
        {eddContact.physician_and_practitioner_representative}.
      </p>
    </Article>
  );
}