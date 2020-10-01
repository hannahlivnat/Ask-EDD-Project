import Article from "../../../../components/common/article"
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import eddContact from '../../../contact/edd_contact'
export default function bpo_update_information () {
  return (
    <Article
      h4="Update Email, Password, Security Questions, Personal Image, and
      Caption"
    >
      <p>
              To update your Benefit Programs Online account, follow these
              steps:
      </p>
      <ol>
        <li>
                  Log in to <BPOLink />.
        </li>
        <li>
                  Select the <b>My Profile</b> link at the top of the page.
        </li>
        <li>
                  Select the item for which you wish to begin the update
                  process. The update options on the My Profile page are:
        </li>
        <ol>
          <li>
                      Update Email (A link will be emailed to you which you must
                      select within 48 hours.)
          </li>
          <li>Update Password</li>
          <li>Update Security Questions</li>
          <li>Update Personal Images and Caption</li>
        </ol>
        <li>
                  Make the changes and select <b>Next</b>.
        </li>
        <li>
                  Review your change and select <b>Update</b>.
        </li>
      </ol>
      <p>
        <b>Note:</b> Changes to your Password, Security Questions and
              Personal Image and Caption will take effect immediately.
      </p>
      <p>
              You may also contact the EDD to speak to a representative by
              calling {eddContact.sdi_representative}or TTY {eddContact.tty_number} Monday-Friday, 8 a.m.
              to 5 p.m. (Pacific time), except state holidays. Employers and
              physicians/practitioners may call {eddContact.physician_and_practitioner_representative}.
      </p>
      <p>
              When calling via the California Relay Service (711), provide the
              Disability Insurance number ({eddContact.sdi_representative}) to the operator.
      </p>
    </Article>
  );
}