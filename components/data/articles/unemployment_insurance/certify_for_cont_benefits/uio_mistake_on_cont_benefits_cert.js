import Article from '../../../../common/article'
import CallEDDLink from '../../common_links/bp_online/call_edd_link'

export default function uio_mistake_on_cont_benefits_cert() {
  return (
    <Article h4="Claim Filing Application Mistakes">
      <p>
              Within 10 days from filing your claim, the EDD will mail you
              information including the Notice of Unemployment Insurance Claim
              Filed, DE 1101CLMT, and Notice of Unemployment Insurance Award, DE
              429Z, for your review.
      </p>
      <p>
              If corrections need to be made to the application you may{" "}
        <CallEDDLink /> to make the corrections.
      </p>
    </Article>
  );
}
