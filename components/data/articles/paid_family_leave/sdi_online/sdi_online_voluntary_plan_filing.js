import BPOLink from '../../common_links/benefits_program_link'
export default function sdi_online_voluntary_plan_filing() {
  return (
    <div className="article-div">
      <h4>Online Voluntary Plan Filing</h4>
      <p>
              Employers: To file your Voluntary Plan (VP) employer reports using
              SDI Online, you must first complete a one-time registration in
              Benefit Programs Online (BPO).
      </p>
      <ol>
        <li>
                  Go to <BPOLink /> login page.
        </li>
        <li>
                  Select <b>Register</b> to set up a new account.
        </li>
      </ol>
      <p>
              For additional BPO registration information, watch the{" "}
        <a href="https://www.youtube.com/watch?v=l0O37hyLU5Y&feature=youtu.be">
                  BPO registration video
        </a>
              .
      </p>
      <p>You can register 24 hours a day, 7 days a week.</p>
      <p>
              Once you have registered in BPO, call the VP Group at 916-653-6839
              to complete the set up process for SDI Online. For more
              information about VP, visit the{" "}
        <a href="https://www.edd.ca.gov/Disability/Employer_Voluntary_Plans.htm">
                  Voluntary Plans
        </a>
              page or call the VP Group at 916-653-6839.
      </p>
      <p>
        <b>Note</b>: If you are a VP claimant, contact your employer to
              file your Paid Family Leave claim.
      </p>
    </div>
  );
}