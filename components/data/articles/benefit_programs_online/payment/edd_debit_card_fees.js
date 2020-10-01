import Article from "../../../../common/article";
import EDDDebitCardLink from '../../common_links/edd_debit_card'

export default function edd_debit_card_fees() {
  return (
    <Article h4="Will I Be Charged Fees to Use My EDD Debit Card?">
      <p>
              There is no fee to activate your Employment Development Department
              (EDD) Debit CardSM. Other fees can be avoided with careful use of
              your card. Most merchants do not charge a fee when you make a
              purchase. Many grocery stores also offer cash back when you make a
              purchase, without a fee. You can get cash from ATMs and from
              tellers at banks and credit unions that accept Visa® cards;
              however, fees may apply after you exceed the number of free
              transactions.
      </p>
      <p>There are no fees for the following:</p>
      <ul>
        <li>
                  Cash-back with purchases at grocery stores, drug stores, and
                  U.S. Post Office locations.
        </li>
        <li>ATM withdrawals at domestic Bank of America ATMs.</li>
        <li>
                  Two free ATM withdrawals per deposit at non-Bank of America
                  ATMs.
        </li>
        <li>
                  Unlimited teller cash access at any bank or credit union that
                  accepts Visa® cards.
        </li>
        <li>
                  Unlimited direct deposit transfers to a checking or savings
                  account.
        </li>
        <li>
                  Unlimited balance inquiries at ATMs and online customer
                  service
        </li>
        <li>Unlimited automated and live customer service inquiries.</li>
        <li>Free domestic card replacement.</li>
      </ul>
      <p>
              When you receive your welcome packet, thoroughly read your
              California EDD Debit Card Deposit Agreement and refer to the
              Schedule of Bank Fees section to ensure you understand any
              transaction and service fees that may apply to your card. For more
              information, visit <EDDDebitCardLink /> page.
      </p>
      <p>
        <b>Avoid Fraud. Protect yourself from phishing scams:</b> Neither
              the EDD nor Bank of America will contact you under any
              circumstances to request your EDD Debit Card account number and/or
              PIN. If you are contacted by phone or email and asked for the
              information, DO NOT respond. Any direct deposit transfer request
              must be initiated by you through Bank of America.
      </p>
    </Article>
  );
}
