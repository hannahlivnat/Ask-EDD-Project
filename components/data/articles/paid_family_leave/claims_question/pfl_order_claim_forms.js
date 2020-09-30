import OnlineFormPublication from '../../common_links/online_forms_publications'
import SDIOnlineLink from '../../common_links/sdi_online_link'
import BPOLink from '../../common_links/benefits_program_link'
export default function pfl_order_claim_forms() {
  return (
    <div className="article-div">
      <h4>How Can I Order a Paid Family Leave Claim Form(s)?</h4>
      <p>
              To order a paper{" "}
        <i>Claim for Paid Family Leave (PFL) Benefits </i>(DE 2501F),
              visit <OnlineFormPublication /> or call 1-877-238-4373-or
              1-877-379-3819 (en espanol) TTY: 1-800-445-1312. When calling via
              the California Relay Service (711), provide the Paid Family Leave
              number (1-877-238-4373) to the operator.
      </p>
      <p>
              Paid Family Leave claims may be filed online using{" "}
        <SDIOnlineLink />. To use SDI Online, you must first complete a
              one-time registration in
        <BPOLink />.
      </p>
      <p>
              SDI Online provides claimants, physicians/practitioners,
              physician/practitioner representatives, and employers with
              electronic and automated options that are simple to use and
              available 24 hours a day, 7 days a week.
      </p>
    </div>
  );
}