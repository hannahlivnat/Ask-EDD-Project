import Article from "../../../../common/article";
import BPOLink from "../../common_links/benefits_program_link";
import eddContact from "../../../contact/edd_contact";

export default function bpo_pay_overpayment() {
  return (
    <Article h4="How Can I Pay My Benefits Overpayment?">
      <p>
      You may make your payments online, by phone, or by mail.
      Review the <BPOLink /> page for specific details.
      </p>
      <p>
      To request an installment agreement, call the EDD Benefit Overpayment
      Collection Section at {eddContact.benefit_overpayment_collection}.
      </p>
    </Article>
  )
}
