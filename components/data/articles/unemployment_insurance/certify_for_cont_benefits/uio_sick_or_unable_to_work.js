import Article from '../../../../common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import RegisterLink from '../../common_links/uionline/register_link'

export default function uio_sick_or_unable_to_work() {
  return (
    <Article h4="Sick or Unable to Work">
      <p>
              Eligibility for Unemployment Insurance requires that you be
              physically able, available and searching for full-time employment
              in your usual occupation.
      </p>
      <p>
              If you are ill or injured for less than seven days, be sure to
              report the information on your Continued Claim Form, DE 4581
              question #1. Your weekly benefits will be reduced by one seventh
              for every day you are unable to work. If you are unable to work
              due to illness or injury for more than seven days, be sure to
              report this on your claim form and consider filing for Disability
              Insurance benefits.
      </p>
      <p>
              It may be necessary for EDD to contact you for further information
              regarding Unemployment Insurance benefits and Disability Insurance
              benefits.
      </p>
      <p>
        <UIOnlineLink />: Manage your claim 24 hours a day, seven days a
              week through UI OnlineSM. <RegisterLink /> or log in to your{" "}
        <UIOnlineLink /> to:
      </p>
      <ul>
        <li>Certify for continued benefits.</li>
        <li>View payment information for all processed payments.</li>
        <li>
                  View all scheduled appointments and reschedule a phone
                  interview appointment.
        </li>
        <li>Update your contact information.</li>
        <li>
                  Access UI information by subcategory and topic under Contact
                  Us.
        </li>
        <li>Send EDD a question on many topics under Contact Us.</li>
      </ul>
    </Article>
  );
}
