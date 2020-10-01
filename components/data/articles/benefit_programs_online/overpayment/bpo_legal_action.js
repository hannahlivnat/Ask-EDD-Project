import Article from "../../../../common/article";
import eddContact from '../../../contact/edd_contact'

export default function bpo_legal_action () {
  return (
    <Article h4="Legal Action">
      <p>
              The EDD may pursue legal action such as the filing of a Summary
              Judgement, recording of a lien on real or personal property, serve
              a wage garnishment and/or bank levy.
      </p>
      <p>
              A Summary Judgement is a civil action filed with the superior
              court against the liable person for the recovery of Unemployment
              Insurance or Disability Insurance benefit overpayment debt,
              pursuant to Sections 1379 and 2739 of the California Unemployment
              Insurance Code.
      </p>
      <p>
              The EDD issues a wage garnishment on debts with a Summary
              Judgment. The EDD will garnish up to 25 percent of your wages. You
              can pay the debt in full to avoid the wage garnishment.
      </p>
      <p>
              A lien is the legal claim of one person upon the property of
              another person to secure the payment of a debt or the satisfaction
              of an obligation. It is the recording of an Abstract of Judgement
              with the County Recorder&#39;s office which places a legal claim
              on real and personal property. In order to release the lien, the
              balance of the overpayment amount, including any filing fees and
              interest accrued, will need to be paid in full.
      </p>
      <p>
              When refinancing or selling property, you must have all liens
              cleared. The escrow or title company can contact the EDD at
        {eddContact.benefit_overpayment_collection} for instructions on how to clear the lien.
      </p>
    </Article>
  );
}