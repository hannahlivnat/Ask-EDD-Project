export default function payroll_enrollment_confirmation_email() {
  return (
    <div className="article-div">
      <h4>Enrollment Confirmation Email</h4>
      <p>
              If you did not receive an e-mail from the EDD confirming your
              enrollment, it may be for one of the following reasons:
      </p>
      <ul>
        <li>
                  The e-mail address you entered may have been mistyped, or the
                  incorrect e-mail provider was included (e.g. Yahoo was entered
                  when it should have been Hotmail, etc.). Note: When
                  undeliverable e-mail is sent back to the EDD, we have no way
                  of knowing what the correct e-mail address should be.
        </li>
        <li>
                  Your e-mail or Internet provider may have marked the message
                  from the EDD as SPAM.
        </li>
        <li>
                  The e-mail from the EDD is in your Junk or SPAM folder, and
                  not in your Inbox folder.
        </li>
        <li>
                  The e-mail may be delayed on your Internet provider&#39;s server.
        </li>
      </ul>
      <p>
              If you have verified the reasons above do not apply, call the
              Taxpayer Assistance Center at 888-745-3886.
      </p>
      <p>
              To complete the enrollment process, you must respond to the e-mail
              confirmation within 24 hours. If the 24 hour deadline is missed,
              your e-mail address will be deleted from our system. You can
              re-enroll on the next day using the same username and e-mail
              address. If you receive an error message &#34;Username is not
              available,&#34; it means someone has claimed your username since the
              time you first attempted to enroll and you must create a new
              username to continue the enrollment process.
      </p>
    </div>
  );
}