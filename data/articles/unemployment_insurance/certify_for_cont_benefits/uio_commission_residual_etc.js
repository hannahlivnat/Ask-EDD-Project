import Article from '../../../../components/common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import RegisterLink from '../../common_links/uionline/register_link'

export default function uio_commission_residual_etc() {
  return (
    <Article h4="Commission, Residual and Other Pay">
      <p>
              All work and/or earnings must be reported on your Continued Claim
              Form, DE 4581, including:
      </p>
      <div className="article-div-row">
        <ul>
          <li>Commission</li>
          <li>Paid sick leave</li>
          <li>Severance pay</li>
          <li>Back pay award</li>
          <li>Idle time pay</li>
          <li>Strike benefits</li>
        </ul>
        <ul>
          <li>Residual pay</li>
          <li>Bonuses</li>
          <li>Vacation pay</li>
          <li>Tips</li>
          <li>Jury fees</li>
          <li>Witness fees</li>
        </ul>
        <ul>
          <li>Pension</li>
          <li>Self-employment</li>
          <li>Holiday pay</li>
          <li>In lieu of notice</li>
          <li>Piece work</li>
          <li>Other</li>
        </ul>
      </div>
      <p>On question 6a: report the earnings before deductions.</p>
      <p>
              If you received any type of payments listed above, on question 6b:
      </p>
      <ul>
        <li>Report the total hours worked.</li>
        <li>Report employer name and mailing address.</li>
        <li>
                  In the Reason No Longer Working column, report the type of
                  payment (e.g. commission, bonus, residual, etc.).
        </li>
      </ul>
      <p>
        <a>
          <b>
            <UIOnlineLink />
          </b>
        </a>
              : Manage your claim 24 hours a day, seven days a week through UI
              Onlinesm. <RegisterLink /> or log in to your <UIOnlineLink /> account to:
      </p>
      <ul>
        <li>Certify for continued benefits.</li>
        <li>View payment information for all processed payments.</li>
        <li>
                  View all scheduled appointments and reschedule a phone
                  interview appointment.
        </li>
        <li>Update your contact information.</li>
        <li>Reopen an existing claim.</li>
        <li>
                  Access UI information by subcategory and topic under Contact
                  Us.
        </li>
        <li>Send EDD a question on many topics under Contact Us.</li>
      </ul>
    </Article>
  );
}