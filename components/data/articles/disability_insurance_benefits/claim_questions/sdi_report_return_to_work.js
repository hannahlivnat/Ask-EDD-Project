import SDILink from '../../common_links/sdi_information/sdi_online_link'
import Article from '../../../../common/article'
import contactEdd from '../../../contact/edd_contact'
export default function sdi_report_return_to_work() {
  return (
    <Article h4="How Do I Report a Return to Work Date?">
      <p>
              You may report your return to work date using <SDILink /> the
        <i>Notice of Automatic Payment</i> (DE 2587), the{" "}
        <i>Disability Claim Continuing Eligibility Certification</i> (DE
              2593), or the <i>Claim for Continued Disability Benefits</i> (DE
              2500A).
      </p>
      <p>
              You may also report a return to work by calling Disability
              Insurance at {contactEdd.sdi_representative} (English), 
        {contactEdd.sdi_spanish} (en español), or TTY {contactEdd.tty_number}. 
              When calling via the California Relay Service (711), provide the Disability 
              Insurance number ({contactEdd.sdi_representative}) to the operator.
      </p>
    </Article>
  );
} 