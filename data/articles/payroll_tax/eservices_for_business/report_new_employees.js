import Article from '../../../../components/common/article'
import EservicesLink from "../../common_links/employer_resources/eservices_for_business";
import DE542 from '../../common_links/tax/DE542'

export default function report_new_employees() {
  return (
    <Article h4="Report of New Employees">
      <p>
              You can file your Report of New Employees(s) (<DE542 />) by
              logging into our <EservicesLink />. After you are logged in, you
              must select the Account ID (aka Employer Payroll Tax Account
              Number) for which you want to file the report.
      </p>
    </Article>
  );
}