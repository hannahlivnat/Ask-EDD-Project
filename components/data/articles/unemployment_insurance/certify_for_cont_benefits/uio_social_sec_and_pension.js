import Article from '../../../../common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import RegisterLink from '../../common_links/uionline/register_link'
import CallEDDLink from '../../common_links/bp_online/call_edd_link'

export default function uio_social_sec_and_pension() {
  return (
    <Article h4="Social Security and Pensions">
      <p>
              Social Security Benefits are not deducted from your weekly
              Unemployment Insurance benefits, however, some other pensions may
              be deductible. If you have additional questions, <CallEDDLink />
      </p>
      <p>
        <b>
          <UIOnlineLink />
        </b>
              : Manage your claim 24 hours a day, seven days a week through UI
              OnlineSM. <RegisterLink /> or log in to your <UIOnlineLink />{' '} 
              account to:
      </p>
      <ul>
        <li>Certify for continued benefits.</li>
        <li>View payment information for all processed payments.</li>
        <li>
                  View all scheduled appointments and reschedule a phone
                  interview appointment.
        </li>
        <li>Update your contact information.</li>
        <li>Reopen an existing claim.</li>
        <li>
                  Access UI information by subcategory and topic under Contact
                  Us.
        </li>
        <li>Send EDD a question on many topics under Contact Us.</li>
      </ul>
    </Article>
  );
}

