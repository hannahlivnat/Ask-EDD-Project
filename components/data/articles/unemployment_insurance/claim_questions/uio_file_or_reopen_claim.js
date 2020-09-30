import UIOnlineLink from "../../common_links/ui_online_link";
import CallEDDLink from "../../common_links/call_edd_link";

export default function uio_file_or_reopen_claim() {
  return(
    <div className="article-div">
      <h4>How Do I File a New Claim or Reopen a Claim?</h4>
      <p>To file a new claim, use one of the following options:</p>
      <ul>
        <li>
          <b>Online:</b> <UIOnlineLink /> is the fastest and most
        convenient way to file your claim.
        </li>
        <li>
          <b>By Phone:</b> <CallEDDLink /> and speak to a customer service
        representative to file your claim.
        </li>
        <li>
          <b>By Fax or Mail:</b> Access the{" "}
          <a href="https://www.edd.ca.gov/unemployment/Forms_and_Publications.htm#de1101i">
            Unemployment Insurance Application.
          </a>
        Complete and fax or mail as directed on the form. Allow
        additional time for processing.
        </li>
      </ul>
      <p>
      You can reopen your existing claim any time during the benefit year
      of your claim. If your benefit year has ended, you must file a new
      claim. For more information, visit{" "}
        <a href="https://www.edd.ca.gov/Unemployment/Reopen-A-Claim.htm">
          Reopen an Unemployment Insurance Claim
        </a>
      .
      </p>
    </div>
  )
}
