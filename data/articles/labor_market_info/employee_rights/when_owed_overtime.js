import Article from '../../../../components/common/article'
import OvertimeLink from '../../common_links/employee_rights/overtime'
import divisionOfLaborContact from '../../../contact/division_labor_standards_enforcement'
export default function when_owed_overtime() {
  return (
    <Article h4="When Does My Employer Have to Pay Overtime">
      <p>
        Labor laws in California are enforced by the California Department
        of Industrial Relations, Division of Labor Standards Enforcement.
        See their information page on <OvertimeLink />, or you
        can e-mail them at {divisionOfLaborContact.email}.
      </p>
    </Article>
  );
}