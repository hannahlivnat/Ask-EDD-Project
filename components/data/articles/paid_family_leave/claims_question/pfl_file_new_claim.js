import SDIOnline from '../../common_links/sdi_online_link'
import BPOLink from '../../common_links/benefits_program_link'
import OnlineFormPublications from '../../common_links/online_forms_publications'

export default function pfl_file_new_claim(){
  return (
    <div className="article-div">
      <h4>How Do I File a New Claim?</h4>
      <p>
              Paid Family Leave claims may be filed online using <SDIOnline />.
              To use SDI Online, you must first complete a one-time registration
              in
        <BPOLink />.
      </p>
      <p>
              SDI Online provides claimants, physicians/practitioners, and
              employers with electronic and automated options that are simple to
              use and available 24 hours a day, 7 days a week.
      </p>
      <p>
              To order a paper <i>Claim for Paid Family Leave</i> (PFL) Benefits
              (DE 2501F) and file by mail, visit <OnlineFormPublications />
              or call 1-877-238-4373 (English), 1-877-379-3819 (en español), or
              TTY 1-800-445-1312. When calling via the California Relay Service
              (711), provide the PFL number (1-877-238-4373) to the operator.
      </p>
    </div>
  );
}