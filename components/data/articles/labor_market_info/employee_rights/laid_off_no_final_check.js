import Article from '../../../../common/article'
import WaitingTimeSite from '../../common_links/employee_rights/waiting_time_penalty'
export default function laid_off_no_final_check() {
  return (
    <Article
      h4="My Employer Laid me Off But Has not Given me my Final Paycheck.
              What Should I Do?"
    >
      <p>
              The California Department of Industrial Relations, Division of
              Labor Standards Enforcement, adjudicates wage claims filed by an
              employee and the assessment of a waiting time penalty. See their{" "}
        <WaitingTimeSite /> for more information.
      </p>
    </Article>
  );
}