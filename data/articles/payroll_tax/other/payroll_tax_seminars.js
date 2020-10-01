import Article from '../../../../components/common/article'
import PayrollSeminars from '../../common_links/tax/payroll_tax_seminars'
export default function payroll_tax_seminars() {
  return (
    <Article h4="Payroll Tax Seminars">
      <p>
              The EDD offers no fee State payroll tax seminars, either classroom
              style or online. Both are designed to help employers comply with
              State payroll tax laws. Additional information can be found at{" "}
        <PayrollSeminars />.
      </p>
    </Article>
  );
}