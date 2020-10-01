import Article from '../../../../components/common/article'
import CalJobsLink from '../../common_links/jobs_resources/caljobs_link'
import calJobsContact from '../../../contact/caljobs_contact'
export default function forgot_password_or_userid() {
  return (
    <Article h4="I Forgot My Password and/or User-ID">
      <ol>
        <li>
                  Remember that your <CalJobsLink /> username and password are
                  unique to this system and this same information will not allow
                  you to log into any other EDD system (i.e. Unemployment
                  Insurance, Disability Insurance, etc).
        </li>
        <li>Log on to the New CalJOBSSM site.</li>
        <li>
                  In top right corner, click on the link titled &#39;Forgot
                  Username/Password.&#39;
        </li>
        <li>Select the option that best describes your situation.</li>
        <li>
                  Select &#39;Individual&#39; or &#39;Employer&#39; and follow
                  on-screen instructions.
        </li>
        <li>
                  If this method fails, contact:
          <ul>
            <li>
                          CalJOBSSM Customer Support Desk at{" "}
              {calJobsContact.customer_support_desk}
            </li>
            <li>
                          CalJOBSSM Spanish toll-free number at
              {calJobsContact.customer_support_spanish}.
            </li>
          </ul>
        </li>
      </ol>
    </Article>
  );
}
