import Article from '../../../../components/common/article'
import EfundsLink from '../../common_links/tax/efunds_transfer'
export default function vendor_payments() {
  return (
    <Article h4="endor Payments for Payroll Tax Deposit">
      <p>
              For instructions on how to make a <i>Payroll Tax Deposit </i>(DE
              88) payment by Electronic Funds Transfer (EFT), cash, or credit
              card, visit <EfundsLink />.
      </p>
    </Article>
  );
}