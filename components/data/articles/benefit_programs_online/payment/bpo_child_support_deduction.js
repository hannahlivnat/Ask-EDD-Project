import Article from "../../../../common/article";
import ChildSupportLink from '../../common_links/child_support_agencies'
export default function bpo_child_support_deduction() {
  return (
    <Article h4="Child Support Deduction">
      <p>
              All court orders to begin or end child support obligations are
              submitted to EDD through the Department of Child Support Services.
              EDD does not accept any documents directly from the customer.
      </p>
      <p>
              If you have further questions, please contact Child Support
              Services in the county in which you reside. Addresses can be found
              by clicking on <ChildSupportLink />.
      </p>
    </Article>
  );
}

