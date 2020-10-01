import Article from "../../../../components/common/article";
import SDIOnline from '../../common_links/sdi_information/sdi_online_link'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import OnlineFormsPublications from '../../common_links/online_forms_publications'
import contactEDD from '../../../contact/edd_contact'
export default function sdi_file_new_claim() {
  return (
    <Article h4="How Do I File a New Claim?">
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
              2501) and file by mail, visit <OnlineFormsPublications /> or call{" "}
        {contactEDD.sdi_representative} (English),{" "}
        {contactEDD.sdi_spanish} (en español), or TTY
        {contactEDD.tty_number}. When calling via the California Relay
              Service (711), provide the Disability Insurance number (
        {contactEDD.sdi_representative}) to the operator.
      </p>
    </Article>
  );
}