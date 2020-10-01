import Article from "../../../../common/article";
import OnlineFormsPublications from '../../common_links/online_forms_publications'
import SDILink from '../../common_links/sdi_information/sdi_online_link'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import contactEDD from '../../../contact/edd_contact'

export default function sdi_order_claim_form() {
  return (
    <Article h4="How Can I Order a Claim Form(s)?">
      <p>
          To order a paper Claim for Disability Insurance (DI) Benefits (DE
          2501), visit <OnlineFormsPublications /> or call {contactEDD.sdi_representative}
          (English), {contactEDD.sdi_spanish} (en español), or TTY {contactEDD.tty_number}. When
          calling via the California Relay Service (711), provide the Disability
          Insurance number ({contactEDD.sdi_representative}) to the operator.
      </p>
      <p>
          Disability Insurance claims may be filed online using <SDILink />. To
          use SDI Online, you must first complete a one-time registration with
        <BPOLink />.
      </p>
      <p>
          SDI Online provides claimants, physicians/practitioners,
          physician/practitioner representatives, and employers with electronic
          and automated options that are simple to use and available 24 hours a
          day, 7 days a week.
      </p>
    </Article>
  )
}