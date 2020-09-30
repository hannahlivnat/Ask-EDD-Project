import CalJobsLink from '../../common_links/caljobs_link'
export default function forgot_password_or_userid() {
  return (
    <div className="article-div">
      <h4>I Forgot My Password and/or User-ID</h4>
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
                  Select &#39;Individual&#39; or &#39;Employer&#39; and follow on-screen
                  instructions.
        </li>
        <li>
                  If this method fails, contact CalJOBSSM Customer Support Desk
                  at 1-800-758-0398 or the Spanish toll-free number at
                  1-855-716-3518.
        </li>
      </ol>
    </div>
  )
}
