import Article from "../../../../components/common/article";
import TaxSentToEDD from '../../common_links/tax/tax_refund_send_to_edd_link'
import eddContact from '../../../contact/edd_contact'

export default function bpo_property_lottery_winnings() {
  return (
    <Article h4="Why Did the EDD Take My Unclaimed Property/Lottery Winnings?">
      <p>
        We can collect benefit overpayment debts from your unclaimed
        property or lottery winnings. The EDD works with the IRS, the
        State of California Franchise Tax Board, the California State
        Lottery, and the California State Controller to collect any debt
        you owe from an Unemployment Insurance (UI) or State Disability
        Insurance (SDI) benefit overpayment.
      </p>
      <p>
        The EDD can collect unpaid debt by reducing or withholding the
        following:
      </p>
      <ul>
        <li>Federal income tax refunds</li>
        <li>State income tax refunds</li>
        <li>State lottery winnings</li>
        <li>Funds from unclaimed property</li>
      </ul>
      <p>
        If you believe the amount withheld was incorrect, call{' '}
        {eddContact.benefit_overpayment_collection} or write to us at:
      </p>
      <p>
        Employment Development <br/>
        Department Benefit Overpayment Collection Section <br/>
        PO Box 826218, MIC 91 <br/> 
        Sacramento, CA 94230-6218
      </p>
      <p>
        For more information, visit <TaxSentToEDD />.
      </p>
    </Article>
  );
}
