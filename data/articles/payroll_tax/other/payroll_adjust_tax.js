import Article from '../../../../components/common/article'
import DE9ADJ from '../../common_links/tax/DE9ADj'
import DE9ADJI from '../../common_links/tax/DE-9ADJI'
import AdjustTaxReturn from '../../common_links/video_links/adjust_tax_return'
import EServicesLink from '../../common_links/employer_resources/eservices_for_business'
import TaxWageAdjustmentForm from '../../common_links/tax/tax_and_wage_adjustment_form'
import AdjustmentFormInstructions from '../../common_links/tax/instructions_for_tax_wage_adjustment'
export default function payroll_adjust_tax() {
  return (
    <Article h4="Adjust Tax and Wage Reports">
      <p>
            Use <EServicesLink /> to make a correction to wage information you
            already submitted, or file a <DE9ADJ />
            . The DE 9ADJ is used to make corrections to the Quarterly
            Contribution Return and Report of Wages (DE 9) and the Quarterly
            Contribution Return and Report of Wages (Continuation) (DE 9C).
            For how to complete the DE 9ADJ, refer to <DE9ADJI /> or view{" "}
        <AdjustTaxReturn />.
      </p>
      <p>
      Annual household employers can also use e-Services for Business or
      the <TaxWageAdjustmentForm />{' '}
      to make corrections to the Employer of Household Worker(s)
      Quarterly Report of Wages and Withholdings (DE 3BHW) and the
      Employer of Household Worker(s) Annual Payroll Tax Return (DE
      3HW). For how to complete the DE 678, refer to{" "}
        <AdjustmentFormInstructions />.
      </p>
    </Article>
  );
}