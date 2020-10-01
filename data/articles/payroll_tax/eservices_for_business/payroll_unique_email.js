import Article from '../../../../components/common/article'
import EServicesLink from '../../common_links/employer_resources/eservices_for_business'
import taxpayerAssistance from '../../../contact/tax_assistance'

export default function payroll_unique_email() {
  return (
    <Article h4="Unique Email Address">
      <p>
              When enrolling for <EServicesLink />, your e-mail must be unique:
              i.e., your e-mail address can only exist on the EDD&#39;s system
              once. Please verify that you have not already created another
              account on e-Services for Business using the same e-mail address.
      </p>
      <ul>
        <li>
                  If you have created another account using the same e-mail
                  address, log in to e-Services for Business with your username
                  and password.
        </li>
        <li>
                  If you cannot remember creating another account with the same
                  e-mail address, call the Taxpayer Assistance Center at
          {taxpayerAssistance.phone}.
        </li>
      </ul>
      <p>
              Payroll Agents: To access multiple client accounts, only one
              enrollment (unique e-mail address, username, and password) is
              needed. You will add access to your clients&#39; EDD employer
              payroll tax account numbers after the enrollment process.
      </p>
    </Article>
  );
}