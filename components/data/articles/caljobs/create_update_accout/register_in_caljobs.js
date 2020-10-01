import JobsLinks from "../../common_links/caljobs_link";
import Article from "../../../../common/article";

export default function caljobs_register(){
  return (
    <Article h4="How to Register in CalJOBs">
      <ol>
        <li>
                  Log in to <JobsLinks />
        </li>
        <li>
                  Under sign in boxes, click on &#34;Not Registered Yet&#34;.
        </li>
        <li>
                  Choose &#34;Option 2 - Create a User Account&#34; and click on
                  the user that fits your status. (The &#34;Individual&#34;
                  option is for jobseekers.)
        </li>
        <li>
                  Review the entire privacy statement and choose &#34;I
                  Agree&#34; when finished. (If you choose &#34;I Disagree&#34;
                  you will not be granted access to the CalJOBSSM site.)
        </li>
        <li>
                  Complete all the &#34;Login Information&#34; and follow any
                  special instructions highlighted in each individual section.
        </li>
      </ol>
    </Article>
  );
}