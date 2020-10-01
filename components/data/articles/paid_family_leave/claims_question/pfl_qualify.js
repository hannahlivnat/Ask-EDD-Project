import BPOLink from '../../common_links/bp_online/benefits_program_link'
import Article from '../../../../common/article'
import BaseLink from '../../common_links/sdi_information/base_period_link'
import StateDisabilityInsurance from '../../common_links/sdi_information/sdi_link_site'
export default function pfl_qualify() {
  return (
    <Article h4="Do I Qualify For Paid Family Leave Benefits?">
      <p>
              To qualify for Paid Family Leave (PFL) benefits you must meet all
              of the following requirements:
      </p>
      <ul>
        <li>
                  You must be unable to do your regular or customary work for at
                  least eight days due to the need to provide care to a
                  seriously ill family member or to bond with a new child.
        </li>
        <li>
                  You must be employed or actively looking for work at the time
                  your family leave begins.
        </li>
        <li>
                  You must have lost wages because you were caring for a
                  seriously ill family member or bonding with a new child.
        </li>
        <li>
                  You must have earned at least $300 from which State Disability
                  Insurance deductions were withheld during the <BaseLink />.
        </li>
        <li>
                  You must complete and submit a claim no earlier than the first
                  day of your family leave, but no later than 41 days after your
                  family leave begins.
        </li>
        <li>
                  You must provide a medical certificate on your care claim for
                  a seriously ill family member from the care recipient’s
                  physician/practitioner.
        </li>
      </ul>
      <p>
              For additional information about base period earnings and other
              eligibility requirements for PFL, visit the <StateDisabilityInsurance />{' '}
              page.
      </p>
      <p>
              If you think you may qualify, complete a one-time registration in{' '}
        <BPOLink />, register in SDI Online, and then file a
              claim for PFL using SDI Online.
      </p>
    </Article>
  );
}