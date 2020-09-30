import CallEDDLink from "../../common_links/call_edd_link";

export default function uio_made_mistake_on_claim() {
  return (
    <div className="article-div">
      <h4>I Made a Mistake on Claim While Filing Application</h4>
      <p>
              Within 10 days from filing your claim, the EDD will mail you
              information including the Notice of Unemployment Insurance Claim
              Filed. DE 1101CLMT, and Notice of Unemployment Insurance Award, DE
              429Z, for your review.
      </p>
      <p>
              If corrections need to be made to the application you may
        <CallEDDLink /> to make the corrections.
      </p>
    </div>
  );
}
 

