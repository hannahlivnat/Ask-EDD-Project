import Article from '../../../../components/common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import RegisterLink from '../../common_links/uionline/register_link'

export default function uio_reporting_wages() {
  return (
    <Article h4="Reporting Wages While Certifying for Continued Benefits">
      <p>
        You may be able to work part-time and receive reduced Unemployment
        Insurance (UI) benefits. It is important to report your wages
        accurately to prevent an overpayment. The EDD has a fraud
        detection system. If you do not report all earnings for a week
        when you worked, and you received benefits, you will be
        investigated. If the EDD determines that you were at fault for not
        reporting your earnings, you will be required to repay any
        benefits overpaid and you could face administrative and/or
        criminal penalties and interest.
      </p>
      <p>
        Report the gross wages (earnings before deductions) you earned
        from employment, residuals, commissions and self-employment
        earnings regardless of the method you use to certify for your
        benefits. The EDD will calculate the deductions. Remember to
        report your wages during the week you earn them, NOT WHEN THEY ARE
        PAID TO YOU.
      </p>
      <p>
        If your gross earnings for the week are $100.00 or less, you are
        allowed to keep the first $25.00 and the balance is deducted from
        your weekly UI benefit amount. If you earn more than $100.00 from
        your weekly employment, you are allowed to keep the first 25% and
        the balance is deducted from your weekly UI benefit amount.
      </p>
      <p>
        <UIOnlineLink />: Manage your claim 24 hours a day, seven days a
        weekly through UI OnlineSM. <RegisterLink /> or log in to your{" "}
        <UIOnlineLink /> account to:
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
