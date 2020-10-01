import AmericanJobCenterLink from "../../common_links/jobs_resources/american_jobs_link";
import Article from '../../../../common/article'
export default function get_training(){
  return (
    <Article h4='Where can I Find Employment Opportunities?'>
      <p>
          Contact the nearest <AmericanJobCenterLink />for job
          search assistance or visit CalJOBSSM, California’s online employment
          resource, to browse job openings.
      </p>
    </Article>
  )
}