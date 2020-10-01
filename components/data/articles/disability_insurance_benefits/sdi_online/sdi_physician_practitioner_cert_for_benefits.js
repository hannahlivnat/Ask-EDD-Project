import Article from "../../../../common/article";
import BPOLink from '../../common_links/benefits_program_link'
import SDIPhysicianTutorial from '../../common_links/sdi_tutorial_for_physician'
export default function sdi_physician_practitioner_cert_for_benefits(){
  return (
    <Article h4="Physician/Practitioner Certifying for Benefits">
      <p>
              To file a medical certification online, a physician/practitioner
              licensed through the California Department of Consumer Affairs
              must first complete a one-time registration in Benefit Programs
              Online (BPO) and complete your registration in SDI Online.
      </p>
      <p>
              After you have completed the registration process, you can file
              your certification by following these steps:
      </p>
      <ol>
        <li>
                  Log in to your <BPOLink /> account.
        </li>
        <li>
                  Select <b>SDI Online</b> which will direct you to your{" "}
          <b>Home</b> page.
        </li>
        <li>
                  Search for your patient’s information using one of the
                  following:
          <ol>
            <li>
                          The Receipt Number issued when they filed a claim
                          using SDI Online.
            </li>
            <li>The claim ID number.</li>
            <li>Claimant/patient’s last name and date of birth.</li>
            <li>
                          Claimant/patient’s last name and Social Security
                          number.
            </li>
          </ol>
        </li>
      </ol>
      <p>
              After locating your patient’s claim, you may complete your
              certification by answering the applicable questions, and providing
              the information requested. For more information, visit our{" "}
        <SDIPhysicianTutorial />.
      </p>
    </Article>
  );
} 