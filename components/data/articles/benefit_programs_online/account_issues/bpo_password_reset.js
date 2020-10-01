import Article from '../../../../common/article';
import BPOLink from '../../common_links/bp_online/benefits_program_link'

export default function bpo_password_reset() {
  return (
    <Article h4="Reset My Password">
      <p>To reset your Benefit Programs Online password:</p>
      <ol>
        <li>
          Log in to <BPOLink />.
        </li>
        <li>
          Select the <b>My Profile</b> link located at the top of the
          page.
        </li>
        <li>
          Select <b>Update Password</b> and follow the instructions to
          complete your update.
        </li>
      </ol>
      <p>
        After your password has been successfully updated, you are required
        to log in to Benefit Programs Online.
      </p>
      <p>
        Password updates you make through Benefit Programs Online take
        effect immediately. You can update your information 24 hours a day,
        7 days a week.
      </p>
    </Article>
  )
}
