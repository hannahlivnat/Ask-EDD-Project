import Article from "../../../../components/common/article";
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import UILink from '../../common_links/uionline/ui_online_link'
import eddContact from "../../../contact/edd_contact";

export default function bpo_overpayments() {
  return (
    <Article h4="Overpayments - General Information">
      <p>
              You may now view your payment activity through <UILink />{' '}
              including any benefits paid that were deducted to apply towards an
              overpayment balance.
      </p>
      <p>
              A <i>Notice of Overpayment.</i> DE 1444. is mailed to claimants
              who have been paid benefits they were not eligible to receive. The
              notice shows the amount of overpayment and penalties, if any. In
              addition, the notice explains why you were overpaid and provides
              information about your appeal rights.
      </p>
      <p>
              To make a payment on your overpayment, visit <BPOLink />. If you have additional questions
              about your overpayment, contact the EDD at {eddContact.benefit_overpayment_collection}.
      </p>
    </Article>
  );
}