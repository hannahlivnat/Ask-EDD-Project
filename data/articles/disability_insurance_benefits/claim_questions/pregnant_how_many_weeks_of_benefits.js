import Article from '../../../../components/common/article'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import SDILink from '../../common_links/sdi_information/sdi_online_link'
import PFLEligibility from '../../common_links/pregancy/pfl_eligibility'
import PregnancyFAQ from '../../common_links/pregancy/pregnancy_faq'
export default function sdi_how_many_weeks_of_benefits_while_pregnant() {
  return (
    <Article h4="I Am Pregnant, How Many Weeks of Benefits Will I Receive?">
      <p>
              The usual disability period for a normal pregnancy is up to four
              weeks before the expected delivery date and up to six weeks (for
              normal delivery) or eight weeks (for Cesarean section) after the
              actual delivery. However, your physician/practitioner may certify
              to a longer disability period prior to or after delivery if there
              are medical complications and if you are unable to perform your
              regular or customary job duties.
      </p>
      <p>
              For additional information regarding pregnancy disability and Paid
              Family Leave (PFL), visit <PFLEligibility /> and <PregnancyFAQ />.
      </p>
      <p>
              If you think you qualify, complete a one-time registration with{' '}
        <BPOLink /> and visit <SDILink /> to file a claim.
      </p>
    </Article>
  );
}