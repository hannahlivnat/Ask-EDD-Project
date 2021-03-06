import BPOLink from '../../common_links/bp_online/benefits_program_link'
import OnlineFP from '../../common_links/bp_online/benefits_program_link'
import Article from '../../../../components/common/article'
import FilePFLClaim from '../../common_links/pfl_links/file_pfl_claim'
import askEdd from '../../../contact/edd_contact'

export default function sdi_care_claim_for_pfl() {
  return (
    <Article h4="File a Care Claim for Paid Family Leave">
      <p>
              To file a Paid Family Leave (PFL) care claim, using SDI Online,
              you must first complete a one-time registration in Benefit
              Programs Online (BPO) and complete your registration in SDI
              Online. You can file 24 hours a day, 7 days a week. To register or
              file a PFL claim in Spanish, select the En español link on the BPO
              login page.
      </p>
      <p>
              After you have completed the registration process, you can file
              your claim by following these steps:
      </p>
      <ol>
        <li>
                  Log in to your <BPOLink /> account.
        </li>
        <li>
                  Select <b>SDI Online</b> which will direct you to your Home
                  page.
        </li>
        <li>
                  Select <b>New Claim</b> from the <b>Menu</b>.
        </li>
        <li>
                  Select <b>Paid Family Leave</b> under the{" "}
          <b>Apply for Paid Family Leave Benefits</b> header and
                  complete the required information for your claim.
        </li>
      </ol>
      <p>
              Once your claim is submitted, you will be provided with a Receipt
              Number. Give your Receipt Number to the care recipient’s
              physician/practitioner that will provide the certification
              required for your PFL care claim. The Receipt Number is necessary
              whether the physician/practitioner certifies using SDI Online or
              submits a hard copy claim form
      </p>
      <p>
              Your care claim must be supported by signed certifications from
              the care recipient and their physician/practitioner. SDI Online
              allows the uploading of these document(s) from your computer when
              saved in the following formats: .pdf, .jpg, .tif.
      </p>
      <p>
              For detailed instructions visit <FilePFLClaim />
      </p>
      <p>
              You may still file a paper{" "}
        <i>Claim for Paid Family Leave (PFL) Benefits </i>(DE 2501F) form.
              The Optical Character Recognition forms are scanned and data is
              captured in SDI Online for processing. Forms can be ordered at no
              cost to you by visiting <OnlineFP />.
      </p>
      <p>
              For further questions, call {askEdd.paid_family_representative} or TTY: {askEdd.tty_paid_family_representative}.
              When calling via the California Relay Service (711), provide the
              Paid Family Leave number ({askEdd.paid_family_representative}) to the operator.
      </p>
    </Article>
  );
} 