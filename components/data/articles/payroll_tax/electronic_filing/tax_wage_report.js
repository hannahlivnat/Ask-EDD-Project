import EservicesLink from '../../common_links/eservices_for_business'
export default function tax_wage_report() {
  return (
    <div className="article-div">
      <h4>Tax and Wage Report Forms</h4>
      <p>
              The <i>Quarterly Contribution Return and Report of Wages</i> (DE
              9) reconciles reported wages and paid taxes for each quarter. The
        <i>
                  Quarterly Contribution Return and Report of Wages
                  (Continuation)
        </i>
              (DE 9C) reports individual employee wages for each quarter.
      </p>
      <p>
              All employers are required to electronically submit employment tax
              returns, wage reports, and payroll tax deposits. You can use
        <EservicesLink /> to comply with the{" "}
        <a href="https://edd.ca.gov/Payroll_Taxes/E-file_and_E-pay_Mandate_for_Employers.htm">
                  e-file and e-pay mandate
        </a>
              .
      </p>
    </div>
  );
}