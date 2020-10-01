import Article from "../../../../components/common/article";
import UIOnlineLink from '../../common_links/uionline/ui_online_link';
import eddContact from '../../../contact/edd_contact'

export default function uio_edd_telecert() {
  return (
    <Article h4="What is EDD Tele-Cert?">
      <p>
        UI OnlineSM is now available to all Unemployment Insurance (UI)
        customers. UI OnlineSM offers more comprehensive features than
        Tele-CertSM including the ability to report work and wages when
        you submit your certification. You can also update your contact
        information and provide additional information to clarify your
        answers when certifying for continuing benefits. To learn more, go
        to <UIOnlineLink />.
      </p>
      <p>
        For added convenience, UI OnlineSM is available for smartphone and
        tablet users.
      </p>
      <p>
        <b>EDD Tele-CertSM </b>allows you to certify for your UI benefits
        over the phone by calling the UI Self-Service Phone Line,
        <b>
          {eddContact.self_service}. It is recommended that you call after 12 noon
          and before 8:00 a.m., Monday through Friday, Pacific Time, or
          anytime on Saturday and Sunday.
        </b>
      </p>
      <p>
        The questions asked when using UI OnlineSM are the same questions
        on the paper Continued Claim Form (DE 4581).
      </p>
    </Article>
  );
}