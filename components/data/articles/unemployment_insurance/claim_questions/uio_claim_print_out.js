import UIOnlineLink from '../../common_links/ui_online_link'
import CallEDDLink from '../../common_links/call_edd_link'

export default function uio_claim_print_out() {
  return(
    <div className="article-div">
      <h4>Claim Print Out</h4>
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
        <a href="http://www.edd.ca.gov/Unemployment/Ways_to_File.htm">
        file a claim
        </a>{" "}
      before a claim print out of your Unemployment Insurance claim can be
      issued to you.
      </p>
    </div>
  )
}
