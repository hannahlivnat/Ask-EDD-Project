import Article from '../../../../components/common/article'
import De231z from '../../common_links/tax/de231z'

export default function payroll_reserve_account() {
  return (
    <Article h4="Reserve Account Information">
      <p>
              To obtain information on how the UI Reserve Account works and how
              your UI rate is determined, refer to the Information Sheet:{' '}
        <i>California System of Experience Rating</i> ( <De231z /> ).
      </p>
    </Article>
  );
}