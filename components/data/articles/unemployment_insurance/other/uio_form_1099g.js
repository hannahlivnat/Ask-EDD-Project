import Article from "../../../../common/article";
import UIOnlineLink from '../../common_links/uionline/ui_online_link'
import UIOnlineInformational from '../../common_links/uionline/uionline_information_page'
import Form1099gFaq from '../../common_links/tax/form_1099g_faq'

export default function uio_form_1099g() {
  return (
    <Article h4="Form 1099 G (for Taxes)">
      <p>
              There are two ways to print or request a copy of your 1099G form:
      </p>
      <ol>
        <li>
          <UIOnlineLink />: Through UI OnlineSM you may print or request
                  a copy of your 1099 G form regarding any unemployment
                  insurance (UI) benefits you have received for the last
                  completed year or for any prior five years. To learn more,
                  visit the <UIOnlineInformational />.
        </li>
        <li>
                  Visit the <Form1099gFaq />{' '}
                  for more information about your 1099G and taxes.
        </li>
      </ol>
    </Article>
  );
}