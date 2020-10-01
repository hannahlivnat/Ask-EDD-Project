import Article from '../../../../components/common/article'
import UIOnlineLink from "../../common_links/uionline/ui_online_link";
import CallEDDLink from "../../common_links/bp_online/call_edd_link";
import UIApplication from '../../common_links/uionline/ui_application'
import ReopenUIClaim from '../../common_links/uionline/reopen_ui_claim'

export default function uio_file_or_reopen_claim() {
  return (
    <Article h4="How Do I File a New Claim or Reopen a Claim?">
      <p>To file a new claim, use one of the following options:</p>
      <ul>
        <li>
          <b>Online:</b> <UIOnlineLink /> is the fastest and most
          convenient way to file your claim.
        </li>
        <li>
          <b>By Phone:</b> <CallEDDLink /> and speak to a customer
          service representative to file your claim.
        </li>
        <li>
          <b>By Fax or Mail:</b> Access the <UIApplication /> Complete
          and fax or mail as directed on the form. Allow additional time
          for processing.
        </li>
      </ul>
      <p>
        You can reopen your existing claim any time during the benefit
        year of your claim. If your benefit year has ended, you must file
        a new claim. For more information, visit <ReopenUIClaim />.
      </p>
    </Article>
  );
}
