import SDIOnline from '../../common_links/sdi_information/sdi_online_link'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import OnlineFormPublications from '../../common_links/online_forms_publications'
import contactEdd from '../../../contact/edd_contact'
import Article from '../../../../components/common/article'
export default function pfl_file_new_claim(){
  return (
    <Article h4="How Do I File a New Claim?">
      <p>
              Paid Family Leave claims may be filed online using <SDIOnline />.
              To use SDI Online, you must first complete a one-time registration
              in <BPOLink />.
      </p>
      <p>
              SDI Online provides claimants, physicians/practitioners, and
              employers with electronic and automated options that are simple to
              use and available 24 hours a day, 7 days a week.
      </p>
      <p>
              To order a paper <i>Claim for Paid Family Leave (PFL) Benefits</i>
        {' '}(DE 2501F) and file by mail, visit <OnlineFormPublications />{' '}
              or call {contactEdd.paid_family_representative} (English),{" "}
        {contactEdd.paid_family_representative_spanish} (en español), or
              TTY {contactEdd.tty_paid_family_representative}. When calling via
              the California Relay Service (711), provide the PFL number (
        {contactEdd.paid_family_representative}) to the operator.
      </p>
    </Article>
  );
}