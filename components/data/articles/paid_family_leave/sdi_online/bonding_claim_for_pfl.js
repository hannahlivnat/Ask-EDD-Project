import BPOLink from '../../common_links/benefits_program_link'
import OnlineFP from '../../common_links/online_forms_publications'
export default function pfl_bonding_claim() {
  return (
    <div className="article-div">
      <h4>File a Bonding Claim for Paid Family Leave</h4>
      <p>
              If you are currently receiving pregnancy-related disability
              benefits, you may submit your Paid Family Leave (PFL) bonding form
              using SDI Online once your disability benefits have exhausted. The
              Employment Development Department (EDD) will also automatically
              send a paper PFL form DE 2501FP to you when your pregnancy-related
              disability has ended.
      </p>
      <p>
              To file a PFL bonding claim (new mothers without a pregnancy
              disability claim, new fathers, and adoptive/foster parents) using
              SDI Online, you must first complete a one-time registration in
              Benefit Programs Online (BPO) and complete your registration in
              SDI Online. You can file 24 hours a day, 7 days a week. To
              register or file in Spanish, select the En español link on the BPO
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
              Number.
      </p>
      <p>
              Once the claim is complete, a Claim ID number will be provided to
              use for checking the claim status or filing additional
              documentation if necessary.
      </p>
      <p>
              You may still file a paper{" "}
        <i>Claim for Paid Family Leave (PFL) Benefits</i> (DE 2501F) form.
              The Optical Character Recognition forms are scanned and data is
              captured in SDI Online for processing. Forms can be ordered at no
              cost to you by visiting <OnlineFP />.
      </p>
      <p>
              For detailed instructions, visit{" "}
        <a href="https://www.edd.ca.gov/Disability/How_to_File_a_PFL_Claim_in_SDI_Online.htm">
          {" "}
                  How to File a Paid Family Leave (PFL) Claim in SDI Online.
        </a>
      </p>
      <p>
              For further questions, call 1-877-238-4373 or TTY: 1-800-445-1312.
              When calling via the California Relay Service (711), provide the
              Paid Family Leave number (1-877-238-4373) to the operator.
      </p>
    </div>
  );
}