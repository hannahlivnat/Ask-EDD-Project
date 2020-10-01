import Article from '../../../../common/article'
import UIOnlineLink from '../../common_links/uionline/ui_online_link'

export default function uio_what_is_ui_online() {
  return (
      <Article h4="What is UI Online?">
          <p>
              <UIOnlineLink /> makes it faster and easier for you to get
              detailed claim and payment information about your existing
              Unemployment Insurance (UI) claim. It also provides a convenient
              and secure method to certify for benefits and reopen an existing
              claim online.
          </p>
          <p>
              <b>Note</b>: You must have filed an Unemployment Insurance (UI)
              claim to register for UI Online. All UI customers who file a new
              claim or reopen an existing claim will automatically receive the
              Employment Development Department Customer Account Number
              Notification (DE 5614) letter within 10 business days of filing or
              reopening a claim.
          </p>
      </Article>
  );
}