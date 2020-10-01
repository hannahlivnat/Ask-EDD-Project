import Article from '../../../../components/common/article'
import MinWageLink from '../../common_links/employee_rights/min_wage'
import DepOfIndustrialContact from '../../../contact/division_labor_standards_enforcement'
export default function min_wage_cali() {
  return (
    <Article h4="What is the minimum wage in California? ">
      <p>
              Labor laws in California are enforced by the California Department
              of Industrial Relations, Division of Labor Standards Enforcement.
              Visit their Web page <MinWageLink /> for more information, or you
              can e-mail them at
        {DepOfIndustrialContact.email}.
      </p>
    </Article>
  );
}