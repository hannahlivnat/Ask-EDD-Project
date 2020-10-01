import Article from '../../../../common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'

export default function uio_claim_claim () {
  return (
    <Article h4="How Do I Cancel a Claim?">
      <p>
              You can cancel your claim if you have not collected benefits, you
              have not been issued a written notice of disqualification, your do
              not have an overpayment on your claim, and the benefit year of
              your claim has not ended.
      </p>
      <p>
        <b>IMPORTANT</b>: Once you are paid benefits, the law does not
              allow you to cancel your claim. If you decide you want to cancel
              this claim, <b>do not certify for benefits by any method</b>. Do
              not return the Continued Claim DE 4581 or use the EDD Tele-CertSM
              or the <UIOnlineLink /> to certify for benefits. Once a claim has
              been cancelled, it cannot be reestablished with the same beginning
              date.
      </p>
    </Article>
  );
}

