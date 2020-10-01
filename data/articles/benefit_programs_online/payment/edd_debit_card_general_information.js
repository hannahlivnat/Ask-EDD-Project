import Article from "../../../../components/common/article";
import EDDDebitCard from '../../common_links/bp_online/edd_debit_card'
import bankOfAmericaContact from '../../../contact/bank_of_america_contact'

export default function edd_debit_card_general_information() {
  return (
    <Article h4="EDD Debit Card: General Information">
      <p>
              The Employment Development Department (EDD) uses the EDD Debit
              CardSM from Bank of America to issue benefit payments for all EDD
              benefit programs including Disability Insurance (DI), Paid Family
              Leave (PFL), and Unemployment Insurance (UI) for which you are
              eligible.
      </p>
      <p>
              When you receive your card, you should carefully read all the
              information mailed to you with the card to ensure proper
              activation and use of the card. To learn more about the many
              benefits of the EDD Debit Card and how to activate and use your
              card visit <EDDDebitCard />.
      </p>
      <p>
              The EDD does not have access to EDD Debit Card Account information
              and cannot answer any banking related questions about your EDD
              Debit Card. If you have questions about your EDD Debit Card
              account such as your balance, EDD Debit CardSM fees, activation,
              use, direct deposit transfer, cash withdrawal, or general
              questions about the EDD Debit Card Service:
      </p>
      <ul>
        <li>
                  Bank of America’s EDD Debit Card Customer Service on-line:
                  www.bankofamerica.com/eddcard
        </li>
        <li>
                  Toll-Free Bank of America Customer Service:{" "}
          {bankOfAmericaContact.boa_customer_service}
        </li>
        <li>
                  TTY Users: {bankOfAmericaContact.boa_customer_service_tty}
        </li>
      </ul>
    </Article>
  );
}