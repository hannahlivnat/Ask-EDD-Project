import Article from '../../../../components/common/article'
import BusinessChanges from '../../common_links/tax/payroll_taxes_business_changes'
export default function payroll_changes_to_business() {
  return (
    <Article h4="Changes to My Business">
      <p>
              Information and instructions for change of address or telephone
              number can be found at: <BusinessChanges />.
      </p>
    </Article>
  );
}
