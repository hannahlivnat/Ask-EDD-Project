import BPOLink from '../../common_links/benefits_program_link'
import OnlineFormsPublications from '../../common_links/online_forms_publications'
import SDILink from '../../common_links/sdi_online_link'

export default function sdi_pregnant_di_or_family_leave() {
  return (
    <div className="article-div">
      <h4>
              I’m Pregnant, Do I File for Disability Insurance or Paid Family
              Leave?
      </h4>
      <p>
              If your physician/practitioner certifies that you are unable to
              work due to your pregnancy, you have the option to file a claim
              for Disability Insurance (DI) for your pregnancy-related
              disability and recovery from delivery.
      </p>
      <p>
              You may file a disability claim using SDI Online. To use SDI
              Online, you must first complete a one-time registration through
        <BPOLink />.
      </p>
      <p>
              You can request a claim form on our website to file by mail by
              visiting <OnlineFormsPublications />.
      </p>
      <p>
              For more information, visit our{" "}
        <a href="https://www.edd.ca.gov/disability/FAQs.htm">
                  Frequently Asked Questions (FAQs)
        </a>
              and review the{" "}
        <a href="https://www.edd.ca.gov/disability/FAQ_DI_Pregnancy.htm">
                  Pregnancy FAQ
        </a>
              .
      </p>
      <p>
              Once you have recovered from your pregnancy-related disability,
              and your physician/practitioner has released you to return to
              work, you have the option to file a claim for Paid Family Leave
              (PFL) benefits. PFL pays up to eight weeks of benefits to workers
              who wish to bond with a new child. When your last DI benefit check
              is issued, a{" "}
        <i>Claim for Paid Family Leave (PFL) Benefits - New Mother</i> (DE
              2501FP) will automatically be mailed to you or you may file your
              PFL claim using <SDILink />.
      </p>
    </div>
  )
}