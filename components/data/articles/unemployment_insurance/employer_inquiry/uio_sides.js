import Article from '../../../../common/article'
import UIClaimNotice from '../../common_links/uionline/notice_ui_claim_filed'
import UISidesHomepage from '../../common_links/uionline/sides_homepage'

export default function uio_sides() {
  return (
    <Article h4="State Information Data Exchange System (SIDES)">
      <p>
        The State Information Data Exchange System (SIDES) is a secure and
        timely way for employers and third party administrators (TPAs) to
        electronically receive and respond to the Employment Development
        Department’s (EDD) <i> <UIClaimNotice /></i>.
      </p>
      <p>
        The DE 1101CZ is sent to the last employer, identified by the
        claimant, when a new Unemployment Insurance (UI) claim is filed,
        or when an existing UI claim is reopened. The EDD relies on the
        last employer’s timely and complete response to help determine the
        claimant’s eligibility for benefits and accurately charge an
        employer’s UI reserve account.
      </p>
      <p>
        Using SIDES helps to quickly exchange information between the
        employer and the EDD to save time, save mailing costs, and reduce
        improper payments.
      </p>
      <p>
        For more information, visit the <UISidesHomepage />.
      </p>
    </Article>
  );
}
