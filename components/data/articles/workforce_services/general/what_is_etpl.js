import Article from "../../../../common/article";
import AmericanJobCenterLink from "../../common_links/jobs_resources/american_jobs_link";
import EligibleTraining from '../../common_links/jobs_resources/eligible_training'
import TrainingProviders from '../../common_links/jobs_resources/training_providers'

export default function what_is_etpl() {
  return (
    <Article h4='What is the Eligible Training Provider List (ETPL)?'>
      <p>
        The <EligibleTraining /> (ETPL) is a list of qualified training providers eligible to
        receive Workforce Innovation and Opportunity Act funds for their
        services. The ETPL includes training locations, program costs,
        training occupations, and apprenticeship programs. You can <TrainingProviders />
        or visit an <AmericanJobCenterLink /> to help you identify potential sources for training.
      </p>
    </Article>
  );
}