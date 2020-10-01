import Article from "../../../../common/article";
import IRSContact from '../../../contact/irs_contact'
import eddContact from '../../../contact/edd_contact'
export default function sdi_disability_last_year_are_benefits_taxable(){
  return (
    <Article
      h4="I Was on Disability Last Year, Are My Disability Insurance
              Benefits Taxable?"
    >
      <p>
              Your Disability Insurance (DI) benefits are not reported to the
              Internal Revenue Service (IRS) for tax purposes, with one
              exception. If you are receiving Unemployment Insurance (UI)
              benefits, become unable to work due to a disability and begin
              receiving DI benefits, the IRS considers the DI benefits to be a
              substitute for UI benefits, which are taxable.
      </p>
      <p>
              If DI benefits are reportable, a notice will accompany the first
              benefit payment sent to you advising that the benefits are being
              reported to the IRS. Each January, a 1099G Form is sent to each
              claimant whose benefits were reported to the IRS.
      </p>
      <p>
              If you received UI benefits prior to filing a claim for DI
              benefits and did not receive a 1099G, you need to contact the
              Employment Development Department (EDD) 1099G Service Line at
        {eddContact.form_1099g_service_line}. If you have further questions or concerns you may
              contact the IRS at {IRSContact.phone} or TDD: {IRSContact.tdd}. When
              calling via the California Relay Service (711), provide the IRS
              number ({IRSContact.phone}) to the operator.
      </p>
      <p>
              DI benefits are not reported to the California Franchise Tax
              Board.
      </p>
    </Article>
  );
}