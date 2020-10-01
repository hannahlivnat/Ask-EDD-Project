import Article from '../../../../common/article'
import EservicesLink from '../../common_links/employer_resources/eservices_for_business'
import DE542 from '../../common_links/tax/DE542'

export default function report_independent_contractors() {
  return (
    <Article h4="Report of Independent Contractors">
      <p>
              If your business has no employees, you do not need to register for
              an employer payroll tax account number to submit the Report of
              Independent Contractor(s) (<DE542 />
              ); however, you must enroll in the <EservicesLink /> to file your
              DE 542 electronically.
      </p>
    </Article>
  );
}