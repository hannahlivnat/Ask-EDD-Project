import Article from "../../../../components/common/article";
import eddContact from "../../../contact/edd_contact";
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import TipsForClaimants from '../../common_links/sdi_information/sdi_tips_for_claimants'
import TipsForEmployers from '../../common_links/sdi_information/sdi_tips_for_employers'
import TipsForPhysicians from '../../common_links/sdi_information/sdi_tips_for_physicians'
import SDIOnlineTutorial from '../../common_links/sdi_information/sdi_online_tutorial'
export default function registration() {
  return (
    <Article h4="Register for SDI Online">
      <p>
              To register for SDI Online, you must have first completed a
              one-time registration in Benefit Programs Online (BPO).
      </p>
      <p>
              Once you have registered in BPO, you can register for SDI Online
              by following these steps:
      </p>
      <ol>
        <li>
                  Log in to your <BPOLink /> account.
        </li>
        <li>Select SDI Online.</li>
        <li>
                  Select your registration type on the SDI Online Registration
                  Instruction page
          <ul>
            <li>Claimants</li>
            <li>Physician/Practitioners</li>
            <li>Physician/Practitioner Representative</li>
            <li>Employers</li>
            <li>Voluntary Plans</li>
          </ul>
        </li>
        <li>
                  Provide all required information, including California Driver
                  License number, to complete the process.
        </li>
      </ol>
      <p>
              Once your SDI Online registration is complete, an Employment
              Development Department Customer Account Number (EDDCAN) will be
              assigned as a reference number.
      </p>
      <p>For assistance with registration, refer to:</p>
      <ul>
        <li>
          <TipsForClaimants />
        </li>
        <li>
          <TipsForEmployers />
        </li>
        <li>
          <TipsForPhysicians />
        </li>
        <li>
          <SDIOnlineTutorial />
        </li>
      </ul>
      <p>
              You may also contact the EDD to speak to a representative by
              calling {eddContact.sdi_representative} or TTY {eddContact.tty_number} Monday-Friday, 8 a.m.
              to 5 p.m. (Pacific time), except state holidays. Employers and physicians/practitioners 
              may call {eddContact.physician_and_practitioner_representative}.
      </p>
      <p>
              When calling via the California Relay Service (711), provide the
              Disability Insurance number ({eddContact.sdi_representative}) to the operator.
      </p>
    </Article>
  );
}