import Article from '../../../../components/common/article'
import PFLFacts from '../../common_links/pfl_links/pfl_fact_sheet'
import PFLFaq from '../../common_links/pfl_links/pfl_faq'
export default function pfl_what_is() {
  return (
    <Article h4="What is Paid Family Leave?">
      <p>
              Paid Family Leave (PFL) provides benefits for individuals who lose
              wages when they need time off from work to care for a seriously
              ill child, parent, parent-in-law, grandparent, grandchild,
              sibling, spouse, or registered domestic partner, or to bond with a
              new child entering the family by birth, adoption, or foster care
              placement.
      </p>
      <p>
              To learn more about PFL, visit the <PFLFacts />{" "}
              or the <PFLFaq />.
      </p>
    </Article>
  );
}