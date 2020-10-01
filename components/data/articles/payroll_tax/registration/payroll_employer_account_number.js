import Article from '../../../../common/article'
import EmployerRegistration from '../../common_links/tax/employer_required_to_register'
export default function payroll_employer_account_number() {
  return (
    <Article h4="Employer Payroll Tax Account Number">
      <p>
              Information and instructions to obtain an employer payroll tax
              account number can be found at: <EmployerRegistration />?
      </p>
    </Article>
  );
}