import SDIOnline from '../../common_links/sdi_online_link'
import BPOLink from '../../common_links/benefits_program_link'
import OnlineFormsPublications from '../../common_links/online_forms_publications'

export default function sdi_file_new_claim() {
  return (
    <div className="article-div">
      <h4>How Do I File a New Claim?</h4>
      <p>
              Disability Insurance claims may be filed online using{" "}
        <SDIOnline />. To use SDI Online, you must first complete a
              one-time registration with
        <BPOLink />.
      </p>
      <p>
              SDI Online provides claimants, physicians/practitioners, and
              employers with electronic and automated options that are simple to
              use and available 24 hours a day, 7 days a week.
      </p>
      <p>
              To order a paper Claim for Disability Insurance (DI) Benefits (DE
              2501) and file by mail, visit <OnlineFormsPublications /> or
              call 1-800-480-3287 (English), 1-866-658-8846 (en español), or TTY
              1-800-563-2441. When calling via the California Relay Service
              (711), provide the Disability Insurance number (1-800-480-3287) to
              the operator.
      </p>
    </div>
  );
}