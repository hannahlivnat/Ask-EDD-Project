import Article from "../../../../common/article";
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import BenefitProgramLink from '../../common_links/bp_online/benefits_program_link'

export default function uio_update_information() {
  return (
    <Article h4="Update Address and Phone Number">
      <p>
              The fastest and easiest way to update your address or telephone
              number is through <UIOnlineLink />.
      </p>
      <p>
              You can update your contact information using <UIOnlineLink /> 24
              hours a day.
      </p>
      <p>
              To update your contact information (address, phone numbr, e-mail
              address) using <UIOnlineLink />
      </p>
      <ol>
        <li>
                  Log in to <BenefitProgramLink /> and navigate to UI Online.
        </li>
        <li>Select Personal Profile from the main menu.</li>
        <li>Select Contact Information to update your information.</li>
      </ol>
    </Article>
  );
}