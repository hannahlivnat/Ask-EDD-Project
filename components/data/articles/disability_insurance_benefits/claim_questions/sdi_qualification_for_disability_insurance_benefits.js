import Article from "../../../../common/article"
import BPOLink from '../../common_links/bp_online/benefits_program_link'
import DIEligibility from '../../common_links/tax/di_eligibility'
import StateDILink from '../../common_links/sdi_information/state_disability_insurance_page'
import BasePeriodLink from '../../common_links/sdi_information/base_period_link'
export default function sdi_qualification_for_dib() {
  return (
    <Article h4='Do I Qualify for Disability Insurance Benefits?'>
      <p>
          To qualify for Disability Insurance (DI) benefits you must meet all of
          the following requirements:
      </p>
      <ul>
        <li>
              You must be unable to do your regular or customary work for at
              least eight consecutive days due to a physical or mental illness,
              injury, pregnancy, or childbirth.
        </li>
        <li>
              You must be employed or actively looking for work at the time your
              disability begins.
        </li>
        <li>
              You must have lost wages because of your disability or, if
              unemployed, have been actively seeking employment.
        </li>
        <li>
              You must have earned at least $300 from which State Disability
              Insurance deductions were withheld during the <BasePeriodLink />.
        </li>
        <li>
              You must be under the care and treatment of a licensed
              physician/practitioner. A nurse practitioner may certify to
              disabilities after examination and collaboration with a physician
              and/or surgeon. In addition, a nurse practitioner, a licensed
              midwife or nurse-midwife may complete the medical certification
              for disabilities related to normal pregnancy or childbirth.
        </li>
        <li>
              You and your physician/practitioner must complete and submit a
              claim within 49 days of the date your disability began.
        </li>
      </ul>
      <p>
          For eligibility information, visit <DIEligibility />
          For additional information about base period earnings and other
          eligibility requirements for DI, visit the <StateDILink />.
      </p>
      <p>
          If you think you may qualify, complete a one-time registration through
        <BPOLink />, register in SDI Online, and file a claim for
          DI using SDI Online.
      </p>
    </Article>
  )
}