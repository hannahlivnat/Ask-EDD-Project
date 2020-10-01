import Article from "../../../../common/article";
import SDILink from '../../common_links/sdi_online_link'
import BPOLink from '../../common_links/benefits_program_link'
export default function sdi_check_status_of_di_claim() {
  return (
    <Article h4='Can I Check on the Status of My Disability Insurance Claim Online?'>
      <p>
          Yes, you can get information about your claim using <SDILink /> if you
          have established an SDI Online account. To use SDI Online, you must
          first complete a one-time registration through <BPOLink />.
      </p>
      <p>
          File your claim and submit forms 24 hours a day, 7 days a week through
          SDI Online. Manage your claim through SDI Online.
      </p>
      <p>Use SDI Online to:</p>
      <ul>
        <li>Certify for continued Disability Insurance (DI) benefits.</li>
        <li>View payment information for all processed DI payments.</li>
        <li>Update your contact information.</li>
      </ul>
    </Article>
  )
}