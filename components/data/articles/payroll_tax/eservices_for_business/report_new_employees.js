import EservicesLink from "../../common_links/eservices_for_business";

export default function report_new_employees() {
  return (
    <div className="article-div">
      <h4>Report of New Employees</h4>
      <p>
        You can file your Report of New Employees(s) (
        <a href="http://www.edd.ca.gov/pdf_pub_ctr/de34.pdf">DE 542</a>)
        by logging into our <EservicesLink />. After you are logged
        in, you must select the Account ID (aka Employer Payroll Tax
        Account Number) for which you want to file the report.
      </p>
    </div>
  );
}