import UIOnlineLink from "../../common_links/ui_online_link";
import CallEDD from "../../common_links/call_edd_link";
import BPOnlineLink from "../../common_links/benefits_program_link";

export default function uio_reschedule_phone_interview() {
  return(
    <div className="article-div">
      <h4>Can I Reschedule My Phone Interview Eligibility Interview?</h4>
      <p>
            Telephone interviews may be rescheduled based on the date of the
            original telephone interview and the availability of new interviews.
            Telephone interviews are scheduled at the earliest date we have
            available. If you request to reschedule a telephone interview, it
            will be rescheduled to a later date, based upon the availability of
            interview appointments.
      </p>
      <p>There are several ways to reschedule your telephone interview:</p>
      <ol>
        <li>
          <UIOnlineLink />: The quickest and easiest way to reschedule
                your telephone interview appointment is through UI OnlineSM
                available 24 hours a day, 7 days a week.
        </li>
        <li>
          <a>UI Online MobileSM</a>: available for smartphone and tablet
                users for added convenience. To access, you must first register
                for <BPOnlineLink /> and select UI Online MobileSM.
        </li>
        <li>
                Phone: You may <CallEDD /> to reschedule your telephone
                interview. Due to heavy call volumes, it may be difficult to get
                through. Individuals are encouraged to use UI OnlineSM.
        </li>
      </ol>
    </div>
  )
}