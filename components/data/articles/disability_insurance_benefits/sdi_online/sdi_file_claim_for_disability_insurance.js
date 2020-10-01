import BPOLink from '../../common_links/bp_online/benefits_program_link'
import Article from '../../../../common/article'
import OnlineFormsPublications from '../../common_links/online_forms_publications'
export default function sdi_file_claim_for_disability_insurance() {
  return (
    <Article h4="File a Claim for Disability Insurance">
      <p>
          To file a Disability Insurance (DI) claim in SDI Online, you must
          first complete a one-time registration in Benefit Programs Online
          (BPO) and complete your registration in SDI Online. You can file 24
          hours a day, 7 days a week. To register or file in Spanish, select the
          En español link on the BPO login page.
      </p>
      <p>
          After you have completed the registration process, you can file your
          claim by following these steps:
      </p>
      <ul>
        <li>
              Log in to your <BPOLink /> account.
        </li>
        <li>
              Select <b>SDI Online</b> which will direct you to your <b>Home</b>{" "}
              page.
        </li>
        <li>
              Select <b>New Claim</b> from the <b>Menu</b>.
        </li>
        <li>
              Select <b>Disability Insurance</b> under the{" "}
          <b>Apply for Disability Insurance Benefits</b>
              header and complete the required information for you claim.
        </li>
      </ul>
      <p>
          Once your claim is submitted, you will be provided with a Receipt
          Number.
      </p>
      <p>
          Give your Receipt Number to the physician/practitioner that will
          provide the certification required for your claim. The Receipt Number
          is necessary whether the physician/practitioner certifies using SDI
          Online or submits a hard copy claim form.
      </p>
      <p>
          Once the claim is complete, a Claim ID number will be provided to use
          for checking the claim status on SDI Online or filing additional
          documentation if necessary.
      </p>
      <p>
          All DI claims require a medical certification. If your claim duration
          needs to be extended by the physician/practitioner, provide the Claim
          ID number to the physician/practitioner to file a medical
          certification using SDI Online.
      </p>
      <p>
          You may still file a paper Claim for Disability Insurance (DI)
          Benefits (DE 2501) form. The Optical Character Recognition forms are
          scanned and data is captured in SDI Online for processing. Forms can
          be ordered at no cost to you by visiting <OnlineFormsPublications />.
      </p>
    </Article>
  );
}