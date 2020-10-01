import Article from '../../../../components/common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import CalTrainingBenefitsLink from '../../common_links/jobs_resources/caljobs_link'
import EDDTelecertLink from '../../common_links/bp_online/edd_telecert'

export default function uio_ctb() {
  return (
    <Article h4="California Traning Benefits (CTB)">
      <h5>Program Information</h5>
      <p>
        CTB allows eligible Unemployment Insurance (UI) customers to
        further their education, upgrade their skills, and/or learn a new
        trade to be more competitive in today’s labor market while
        receiving UI benefits.
      </p>
      <p>
        If approved for CTB, you will be exempt from the requirements to
        be available for work, actively seek work, and accept work, while
        you complete your training. You may also be eligible for
        additional weeks of benefits while completing training or school.
      </p>
      <p>
        <b>Note</b>: The EDD does not cover any educational or
        training-related expenses such as tuition, fees, books, supplies,
        or transportation. However, there are state, federal, or employer
        programs that may fund your school or training.
      </p>
      <p>
        Visit the EDD <CalTrainingBenefitsLink /> web page to complete CTB 
        program information, including training extension requirements.

      </p>
      <h5>Signature No Longer Required</h5>
      <p>
        California Training Benefits (CTB) participants are no longer
        required to obtain a signature from the training provider or
        authorized representative when certifying for continued benefits.
        CTB participants are still required to be enrolled in and
        satisfactorily attend the approved training or retraining. The EDD
        may periodically require a CTB participant to obtain verification
        of the training from the training provider or school.
      </p>
      <p>
        For faster processing, CTB participants may now submit their
        certifications using <UIOnlineLink /> or <EDDTelecertLink />.

      </p>
    </Article>
  );
}