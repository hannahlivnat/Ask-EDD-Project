import Article from "../../../../common/article";
import SDILink from '../../common_links/sdi_online_link'
import BPOLink from '../../common_links/benefits_program_link'
import OnlineFormPublications from '../../common_links/online_forms_publications'
import DIEligibility from '../../common_links/di_eligibility'
export default function sdi_collecting_ui_benefits() {
  return (
    <Article
      h4="I Was Collecting UI Benefits But Now Have a Disability, Can I
              Still File for DI Benefits?"
    >
      <p>
              If your physician/practitioner certifies that your disability
              prevents you from working, you may file a claim for Disability
              Insurance (DI) benefits. You must first contact Unemployment
              Insurance (UI) to suspend your claim because an individual cannot
              receive DI benefits for the same period of time in which UI
              benefits are paid.
      </p>
      <p>
              You may file a DI claim using <SDILink />. To use SDI Online, you
              must first complete a one-time registration with <BPOLink />, if
              you have not already done so for UI Online.
      </p>
      <p>
              You may order a Claim for Disability Insurance (DI) Benefits (DE
              2501) paper form to file by mail by visiting the{" "}
        <OnlineFormPublications />.
      </p>
      <p>
              For information about DI eligibility, visit <DIEligibility />?
      </p>
    </Article>
  );
}