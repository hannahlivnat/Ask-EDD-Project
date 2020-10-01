import Article from '../../../../common/article'
import CalJobsLink from '../../common_links/jobs_resources/caljobs_link'
import USJobCenter from '../../common_links/jobs_resources/american_jobs_link'
export default function uio_school_or_training() {
  return (
    <Article h4="School Or Training Support">
      <p>
        Employment and training services are provided through{" "}
        <USJobCenter /> locations, formerly known as One-Stop Career
        Centers, throughout California. These locations provide access to
        numerous government agencies that can assist you with your
        employment and training needs. For additional information, visit{" "}
        <CalJobsLink />.
      </p>
    </Article>
  );
}
