import Article from '../../../../common/article'
import UILink from '../../common_links/uionline/ui_online_link'
import UIMobileLink from '../../common_links/uionline/ui_online_mobile'
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import eddContact from '../../../contact/edd_contact'

export default function bpo_where_is_payment() {
  return (
    <Article h4="Where is My Payment?">
      <p>
              The EDD makes every effort to process your unemployment insurance
              (UI) payment within ten days of receiving your certification.
      </p>
      <p>
        <UILink />: The easiest way to check on the status of your unemployment insurance
              (UI) payment is through the EDD’s new UI OnlineSM service. UI
              OnlineSM is a fast, convenient, and secure way for UI customers to
              reopen a current claim, certify for benefits, access claim
              information, and manage your claim 24 hours a day, seven days a
              week.
      </p>
      <p>
        <UIMobileLink />: For added convenience, is available for smartphone and tablet users. 
              To access, you must first register for <BPOLink /> and select UI Online 
              Mobile.
      </p>
      <p>OR</p>
      <p>
              Automated Telephone System:
              You may also check on the status of your UI payment by calling the
              Automated Self-Service Toll-free Number at {eddContact.self_service}.
      </p>
    </Article>
  );
}