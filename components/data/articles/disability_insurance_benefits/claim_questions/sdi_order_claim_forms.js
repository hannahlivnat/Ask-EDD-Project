import OnlineFormsPublications from '../../common_links/online_forms_publications'
import SDILink from '../../common_links/sdi_online_link'
import BPOLink from '../../common_links/benefits_program_link'

export default function sdi_order_claim_form() {
  <div className="article-div">
    <h4>How Can I Order a Claim Form(s)?</h4>
    <p>
          To order a paper Claim for Disability Insurance (DI) Benefits (DE
          2501), visit <OnlineFormsPublications /> or call 1-800-480-3287
          (English), 1-866-658-8846 (en español), or TTY 1-800-563-2441. When
          calling via the California Relay Service (711), provide the Disability
          Insurance number (1-800-480-3287) to the operator.
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
  </div>;
}