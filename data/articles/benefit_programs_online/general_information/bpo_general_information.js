import BPOLink from "../../common_links/bp_online/benefits_program_link.js";
import SDILink from '../../common_links/sdi_information/sdi_online_link'
import UILink from '../../common_links/uionline/ui_online_link'

export default function bpo_general_information() {
  return (
    <div className="article-div">
      <h4>BPO General Information</h4>
      <p>
        <BPOLink /> is your single login to access the Employment
        Development Department&#39;s online benefit services.
      </p>
      <p>Your account will provide access to:</p>
      <ul>
        <li>
          <SDILink />: Apply for Disability Insurance(DI) and Paid Family Leave (PFL)
          benefits and manage your DI claim.
        </li>
        <li>
          <UILink />:
          Certify for Unemployment Insurance(UI) benefits, reopen an
          existing claim, and manage your UI claim.
        </li>
      </ul>
    </div>
  );
}



