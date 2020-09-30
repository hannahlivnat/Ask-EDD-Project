import CallEDDLink from '../../common_links/call_edd_link'

export default function uio_won_appeal() {
  return(
    <div className="article-div">
      <h4>I Won My Appeal</h4>
      <p>
            If you are a claimant and you received a California Unemployment
            Insurance Appeals Board (CUIAB) letter following an appeal hearing
            or Board Appeal indicating a decision in your favor, the EDD will
            implement the decision in the order it was received. You will only
            be paid UI benefits for the weeks for which EDD received continued
            claim forms and you met all other eligibility requirements.
      </p>
      <p>
            The volume of appeal decisions received by EDD is high; we are doing
            our best to implement them as quickly as possible and ask for your
            patience. If more than 10 business days have passed from the date
            you received the decision letter and you have not received an
            expected payment and wish to contact the Department, please{" "}
        <CallEDDLink />
      </p>
      <p>
            If you are an Employer and have a question about your appeal, please
        <CallEDDLink /> or select the subcategory: &#34;Other&#34; and the topic: &#34;Employer
            Inquiries&#34; to submit your question. This topic: &#34;I Won my Appeal&#34;
            should only be used by claimants.
      </p>
    </div>
  )
}