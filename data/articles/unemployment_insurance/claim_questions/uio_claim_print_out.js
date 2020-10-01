import Article from '../../../../components/common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import CallEDDLink from '../../common_links/bp_online/call_edd_link'
import FileUIClaim from '../../common_links/uionline/file_ui_claim'

export default function uio_claim_print_out() {
  return(
    <Article h4="Claim Print Out">
      <p>
        You must have a current claim on file in order for the EDD to
        provide you with a claim print out of your unemployment insurance
        (UI) benefits.
      </p>
      <p>There are three ways to obtain a print out of your claim:</p>
      <ul>
        <li>
          <UIOnlineLink />: The quickest and easiest way to view your
          claim history is through the EDD&#39;s new UI OnlineSM service
          that is available 24 hours a day, any day of the week. To learn
          more visit the <UIOnlineLink /> Informational page.
        </li>
        <li>
          <CallEDDLink />: Due to heavy call volumes, it may be difficult
          to get through. Individuals are encouraged to obtain a print out
          of their claim by using the <UIOnlineLink /> Services.
        </li>
      </ul>
      <p>
        If you have not filed a new claim in the past 12 months, you must{" "}
        <FileUIClaim /> before a claim print out of your Unemployment Insurance 
        claim can be issued to you.
      </p>
    </Article>
  )
}
