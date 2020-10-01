import Article from '../../../../common/article'
import SDILink from '../../common_links/sdi_information/sdi_online_link'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
export default function sdi_automated_payment_status() {
  return (
    <Article h4="Automatic Payment Status">
      <p>
              If your claim is on automatic payment, after 10 weeks of payment,
              you will receive a{" "}
        <i>Disability Claim Continuing Eligibility Certification</i>{' '}
              (DE 2593). Return this form to the Employment Development
              Department (EDD) to certify that your disability continues. If you
              do not return the DE 2593, your benefits will stop. The DE 2593
              must be returned to the EDD online or by mail within 20 days from
              the mailing date. If this form is submitted late, you may lose
              benefits.
      </p>
      <p>
        <SDILink />: Manage your claim.
      </p>
      <ul>
        <li>Certify for continued benefits.</li>
        <li>Check for messages and forms to be submitted from EDD.</li>
        <li>View forms submitted.</li>
        <li>Check status on your claim.</li>
        <li>View your claim history.</li>
        <li>View payment information for all processed payments.</li>
        <li>Update your contact information.</li>
      </ul>
      <p>
        <b>Note</b>: To use SDI Online or SDI Online Mobile, you must
              register and log in using <BPOLink />.
      </p>

      <p>
              You may submit your DE 2593 form online by selecting the link
              “2593 DI Claim Status/Eligibility” in your SDI Online inbox.
      </p>
      <p>
              To submit the DE 2593 by mail, complete the form and mail to the
              EDD using the self-addressed envelope provided.
      </p>
      <p>
              If you are eligible for benefits, allow 10 business days to
              process your payment after the EDD receives the DE 2593.
      </p>
    </Article>
  );
} 