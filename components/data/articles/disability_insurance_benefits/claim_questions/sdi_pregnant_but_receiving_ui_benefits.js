import SDIOnline from '../../common_links/sdi_online_link'
import BPOLink from '../../common_links/benefits_program_link'
import OnlineFormsPublications from '../../common_links/online_forms_publications'

export default function sdi_pregnant_receiving_ui_benefits() {
  return (
    <div className="article-div">
      <h4>
              I’m Pregnant, But I’m Receiving UI Benefits, Do I File DI or PFL?
      </h4>
      <p>
              If your physician/practitioner certifies that you are unable to
              work due to your pregnancy, you have the option to file a claim
              for Disability Insurance (DI) for your pregnancy-related
              disability and recovery from delivery.
      </p>
      <p>
              You must first notify Unemployment Insurance (UI) that you are no
              longer able and available for work. UI must suspend your claim
              because an individual cannot receive DI benefits for the same
              period of time in which UI benefits are paid.
      </p>
      <p>
              You may file a disability claim using <SDIOnline />. To use SDI
              Online, you must first complete a one-time registration through
        <BPOLink />.
      </p>
      <p>
              If you choose to file by mail, using a paper form, you can order a
        <i>Claim for Disability Insurance (DI) Benefits</i> (DE 2501), on
              the
        <OnlineFormsPublications /> page.
      </p>
      <p>
              Once you have recovered from your pregnancy-related disability and
              your physician/practitioner has released you to return to work,
              you have the option to file a claim for Paid Family Leave (PFL)
              benefits. PFL pays up to eight weeks of benefits to workers who
              wish to bond with a new child.
      </p>
      <p>
              When your last DI benefit check is issued, a{" "}
        <i>Claim for Paid Family Leave (PFL) Benefits - New Mother</i> (DE
              2501FP) will automatically be mailed to you and can be used to
              file a PFL claim by mail or you may file your PFL claim online
              using <SDIOnline />.
      </p>
    </div>
  );
}