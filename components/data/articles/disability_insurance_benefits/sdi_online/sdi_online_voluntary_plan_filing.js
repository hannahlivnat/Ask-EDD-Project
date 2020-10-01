import Article from '../../../../common/article'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import BPORegistratin from '../../common_links/video_links/bpo_registration_link'
import SDIVoluntaryPlan from '../../common_links/sdi_information/sdi_voluntary_plans'
import eddContact from '../../../contact/edd_contact'
export default function sdi_online_voluntary_plan_filing(){
  return (
    <Article h4="Online Voluntary Plan Filing">
      <p>
              Employers: To file your Voluntary Plan (VP) employer reports using
              SDI Online, you must first complete a one-time registration in
              Benefit Programs Online (BPO).
      </p>
      <ol>
        <li>
                  Go to the <BPOLink /> login page.
        </li>
        <li>
                  Select <b>Register</b> to set up a new account.
        </li>
      </ol>
      <p>
              For additional BPO registration information, watch the{" "}
        <BPORegistratin />.
      </p>
      <p>You can register 24 hours a day, 7 days a week.</p>
      <p>
              Once you have registered in BPO, call the VP Group at 916-653-6839
              to complete the set up process for SDI Online. For more
              information about VP, visit the <SDIVoluntaryPlan />{' '}
              page or call the VP Group at {eddContact.sdi_voluntary_plan_group}.
      </p>
      <p>
        <b>Note</b>: If you are a VP claimant, contact your employer to
              file your Disability Insurance claim.
      </p>
    </Article>
  );
}