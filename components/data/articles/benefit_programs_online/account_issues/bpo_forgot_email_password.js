import BPOLink from "../../common_links/benefits_program_link.js";
import Article from "../../../../common/article"

export default function bpo_forgot_email_password() {
  return (
    <Article h4="Forgot Email or Password">
      <p>
        If you forgot the email you used to register for Benefit Programs
        Online, Contact UI by phone to speak to an Unemployment Insurance
        (UI) representative.
      </p>
      <p>If you forgot your password:</p>
      <ol>
        <li>
          Go to the <BPOLink /> login page.
        </li>
        <li>Enter your email.</li>
        <li>Select Log in.</li>
        <li>
          Select Forgot Password to begin the process of setting your
          new password.
        </li>
      </ol>
      <p>
        <b>Note</b>: If you forgot your password and are unable to answer
        two of your security questions, you should Contact UI by phone to
        speak to an Unemployment Insurance (UI) representative.
      </p>
    </Article>
  );
}
