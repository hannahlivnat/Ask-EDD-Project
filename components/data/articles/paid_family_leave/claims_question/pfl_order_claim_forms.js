import OnlineFormPublication from '../../common_links/online_forms_publications'
import SDIOnlineLink from '../../common_links/sdi_information/sdi_online_link'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import Article from '../../../../common/article'
import eddContact from '../../../contact/edd_contact'

export default function pfl_order_claim_forms() {
  return (
    <Article h4="How Can I Order a Paid Family Leave Claim Form(s)?">
      <p>
              To order a paper{" "}
        <i>Claim for Paid Family Leave (PFL) Benefits </i>(DE 2501F),
              visit <OnlineFormPublication /> or call{" "}
        {eddContact.paid_family_representative} or{" "}
        {eddContact.paid_family_representative_spanish} (en espanol) TTY:{" "}
        {eddContact.tty_paid_family_representative}. When calling via the
              California Relay Service (711), provide the Paid Family Leave
              number ({eddContact.paid_family_representative}) to the operator.
      </p>
      <p>
              Paid Family Leave claims may be filed online using{" "}
        <SDIOnlineLink />. To use SDI Online, you must first complete a
              one-time registration in <BPOLink />.
      </p>
      <p>
              SDI Online provides claimants, physicians/practitioners,
              physician/practitioner representatives, and employers with
              electronic and automated options that are simple to use and
              available 24 hours a day, 7 days a week.
      </p>
    </Article>
  );
}