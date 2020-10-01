import Articles from '../../../../components/common/article'
import DE88 from '../../common_links/tax/de88'
import BulkTransLink from '../../common_links/tax/bulk_trans_link'
import BulkTransFaq from '../../common_links/tax/bulk_trans_faq'
export default function bulk_transmission() {
  return (
    <Articles h4="Bulk Transmission (XML and Web Services)">
      <p>
              Information and instructions to file tax and wage report forms
              and/or make a <i>Payroll Tax Deposit</i> (<DE88 />)
              can be found at <BulkTransLink /> and <BulkTransFaq />.
      </p>
    </Articles>
  );
}