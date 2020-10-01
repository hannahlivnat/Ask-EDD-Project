/* eslint-disable indent */
import Article from "../../../../common/article";
import BPOLink from "../../common_links/benefits_program_link";

export default function bpo_update_my_profile() {
  return (
      <Article h4="Update My BPO Profile">
          <p>
              To start the update process for your Benefit Programs Online
              account, follow these steps:
          </p>
          <ol>
              <li>
                  Log in to <BPOLink />.
              </li>
              <li>Select the My Profile link at the top of the page.</li>
              <li>
                  Select the item which you wish to begin the update process.
                  The update options on the My Profile page are:
                  <ol>
                      <li>Update Email</li>
                      <li>Update Password</li>
                      <li>Update Security Questions</li>
                      <li>Update Personal Image and Caption</li>
                  </ol>
              </li>
          </ol>
      </Article>
  );
}
