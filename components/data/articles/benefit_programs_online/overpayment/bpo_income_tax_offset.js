import Article from '../../../../common/article'

import TaxRefundLink from '../../common_links/tax/tax_refund_send_to_edd_link'
import TreasuryOffset from '../../common_links/tax/treasury_offset_link'
import IRSForm from '../../common_links/tax/irs_form_8379'
import IRSVisit from '../../common_links/tax/visit_irs_link'

import irsContact from '../../../contact/irs_contact'

export default function bpo_income_tax_offset () {
  return (
    <Article h4="Federal/State Income Tax Offset">
      <p>
              We can collect benefit overpayment debts from your federal and
              state tax refund. Allow four weeks for your offset to be applied.
      </p>
      <p>
              For more information, visit <TaxRefundLink /> or{" "}
        <TreasuryOffset />.
      </p>
      <p>
              If you are getting your portion of refund for a joint tax return.
              You must complete the <i>Injured Spouse Allocation</i>(IRS Form
              8379) and send it to the IRS for review. You may download{" "}
        <IRSForm />, call the IRS at {irsContact.phone}, or visit a{" "}
        <IRSVisit />. Contact the IRS if you have questions about the form
              or need help completing it.
      </p>
      <p>
              Federal/State offset can be avoided if you pay your debt in full
              prior to your taxes being offset.
      </p>
    </Article>
  );
}
