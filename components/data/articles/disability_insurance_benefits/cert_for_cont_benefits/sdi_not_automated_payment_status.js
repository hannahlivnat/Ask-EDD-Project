import SDILink from '../../common_links/sdi_online_link'
export default function sdi_not_automated_payment_status(){
  return (
    <div className="article-div">
      <h4>Not Automatic Payment Status</h4>
      <p>
              If you are not on automatic payment, you will receive a{" "}
        <i>Claim for Continued Disability Benefits</i> (DE 2500A) every
              two weeks to certify that your disability continues. If you do not
              return the DE 2500A, your benefits will stop.
      </p>
      <p>
              If you have an SDI Online account, you may submit this form online
              by selecting the link “2500A claim for Continued Disability
              Benefits” in your SDI Online inbox. You will receive an email
              instructing you to access your SDI Online account when the form is
              available to complete.
      </p>
      <p>
              The DE 2500A must be returned online or by mail within 20 days
              from the mailing date. If this form is submitted late, you may
              lose benefits. If you have an SDI Online account and selected
              “electronic” as your preferred communication, you will not receive
              the DE 2500A in the mail.
      </p>
      <p>
              To submit the DE 2500A by mail, complete the form and mail to the
              Department using the self-addressed envelope provided. If you
              misplaced the DE 2500A, you may request the form via your{" "}
        <SDILink />
              or by calling 1-800-480-3287.
      </p>
      <p>
              If you are eligible for benefits, allow 10 business days to
              process your payment after the Department receives the DE 2500A.
      </p>
    </div>
  );
}