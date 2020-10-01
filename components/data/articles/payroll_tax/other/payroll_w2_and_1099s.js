import Article from '../../../../common/article'
import W2Form from '../../common_links/tax/form_w2'
import Form1099 from '../../common_links/tax/form_1099'
export default function payroll_w2_and_1099s() {
  return (
    <Article h4="W-2s and 1099s">
      <p>
              State copies of <W2Form /> are not sent to California. The
              Internal Revenue Service provides the W-2 information directly to
              the Franchise Tax Board (FTB).
      </p>
      <p>
              State copies of <Form1099 /> may need to be sent to FTB.
      </p>
    </Article>
  );
}