import Article from '../../../../common/article';
import ContactEDD from '../../common_links/bp_online/call_edd_link';

export default function bpo_personalimage_or_caption() {
  return (
    <Article h4="I Don&#39;t Recognize my Personal Image or Personal Caption">
      <p>
        You selected your personal image and caption when you registered
        for Benefit Programs Online as part of the security on your
        account. If you do not recognize your personal image or caption DO
        NOT enter your password.
      </p>
      <p>
        Before you contact the EDD, be sure you have done the following:
      </p>
      <ul>
        <li>
          Enter your email in Benefit Programs Online again, ensuring
          you have entered it accurately and select Log In to review
          your Personal Image and Caption once more.
        </li>
        <li>
          If you are new to Benefit Programs Online, be sure that you
          have completed the registration process by selecting your
          unique link in the “Benefit Programs Online - Registration”
          email.
        </li>
      </ul>
      <p>
        <ContactEDD /> immediately if you entered the correct email and have
        completed registration, but the wrong personal image and/or
        caption is displayed. Call UI Online Technical Support at 1-800-300-5616, select option
        6 from the Main Menu.
      </p>
    </Article>
  );
}
