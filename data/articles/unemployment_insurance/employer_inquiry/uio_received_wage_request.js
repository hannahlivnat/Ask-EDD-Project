import Article from "../../../../components/common/article";
import EDDWeb from '../../common_links/bp_online/edd_web'
import contactEdd from '../../../contact/edd_contact'

export default function uio_received_wage_request() {
  return (
    <Article h4="I Received a Request for Wages (DE 1919)">
      <p>
            A <b>Request for Wages</b> (DE 1919) has been mailed to you
            because an individual filing an unemployment insurance claim or
            disability insurance claim has listed your company as a base
            period employer, and the employer wage information does not appear
            in the EDD database. If you receive a DE 1919, pursuant to State
            law, you must provide wage information related to the specific
            quarters listed on the form within 10 calendar days from the mail
            date on the form. Receipt of a DE 1919 does not relieve you of
            your separate requirements to submit your quarterly wage reports.
      </p>
      <p>
              If the DE 1919 is not returned and/or wage information is not
              received from you within 10 days, pursuant to State law, the EDD
              may use an affidavit or other information from the employee as
              proof of wages to establish the claim.
      </p>
      <p>
              If the wage information is being requested to establish an
              unemployment insurance claim using the Alternate Base Period, and
              if the claim is overpaid due to untimely receipt of wage
              information from you, your reserve account may not be relieved of
              charges. For additional information regarding California’s
              Alternate Base Period program, visit the <EDDWeb />.
      </p>
      <p>
              If you have questions about this form and would like to speak to
              an EDD representative, call {contactEdd.edd_representative} during 
              regular business hours.
      </p>
    </Article>
  );
}
