import EservicesLink from '../../common_links/eservices_for_business'

export default function report_independent_contractors() {
  return (
    <div className="article-div">
      <h4>Report of Independent Contractors</h4>
      <p>
              If your business has no employees, you do not need to register for
              an employer payroll tax account number to submit the Report of
              Independent Contractor(s) (
        <a href="http://www.edd.ca.gov/pdf_pub_ctr/de34.pdf">DE 542</a>);
              however, you must enroll in the <EservicesLink /> to file your DE
              542 electronically.
      </p>
    </div>
  );
}