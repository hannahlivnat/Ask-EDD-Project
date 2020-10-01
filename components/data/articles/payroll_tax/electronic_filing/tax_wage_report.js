import Article from '../../../../common/article'
import EservicesLink from '../../common_links/employer_resources/eservices_for_business'
import EfileMandate from '../../common_links/tax/efilemandate'
export default function tax_wage_report() {
  return (
    <Article h4="Tax and Wage Report Forms">
      <p>
              The <i>Quarterly Contribution Return and Report of Wages</i> (DE
              9) reconciles reported wages and paid taxes for each quarter. The{' '}
        <i>
                  Quarterly Contribution Return and Report of Wages
                  (Continuation)
        </i>
              (DE 9C) reports individual employee wages for each quarter.
      </p>
      <p>
              All employers are required to electronically submit employment tax
              returns, wage reports, and payroll tax deposits. You can use{' '}
        <EservicesLink /> to comply with the <EfileMandate />.
      </p>
    </Article>
  );
}