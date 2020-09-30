import CallEDDLink from "../../common_links/call_edd_link";

export default function uio_missing_wages_from_claim() {
  return (
    <div className="article-div">
      <h4>I&#39;m Missing Wages From My Claim</h4>
      <p>
              It is important to check the Notice of Unemployment Insurance
              Award, DE 429z. carefully to make sure that all employers you
              worked for during the quarters shown are listed.
      </p>
      <p>
              If you told EDD that you worked for a federal agency or in another
              state when you filed your claim, your wage information is being
              requested from that agency or state. You will receive an amended
              notice when the federal wages or other state&#39;s wages have been
              added.
      </p>
      <p>
              If an employer is missing, or an employer is shown that you did
              not work for, or the earnings appear to be incorrect{" "}
        <CallEDDLink />.
      </p>
    </div>
  );
}


