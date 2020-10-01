import Article from "../../../../common/article";
import USAJobsLink from '../../common_links/jobs_resources/usa_jobs'
import calHR from '../../../contact/cal_hr'
export default function find_state_or_fed_job() {
  return (
    <Article h4="How to Find a State or Federal Job">
      <h4></h4>
      <h5>To Find a State Job</h5>
      <p>
              The EDD and most other state agencies list open positions and
              establish hiring lists through the California Department of Human
              Resources (CalHR). To obtain a list of upcoming state examinations
              and your eligibility, contact CalHR at:
      </p>
      <p>
              1515 S Street, North Bldg, Suite 400
        <br />
              Sacramento, CA 95811
        <br />
        {calHR.phone}
        <br />
        {calHR.website}
      </p>
      <h5>To Find a Federal Job</h5>
      <p>
              To apply for a position with the federal government, visit the{' '}
        <USAJobsLink />.
      </p>
    </Article>
  );
}
