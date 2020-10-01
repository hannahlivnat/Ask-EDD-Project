import Article from '../../../../components/common/article'
import IndustrialRelations from '../../common_links/employee_rights/industrial_relations_faq'
import divOfLaborStandardsContact from '../../../contact/division_labor_standards_enforcement'
export default function employee_benefits_entitled() {
  return (
    <Article h4='When Is an Employee Entitled to Holiday Pay, Sick Leave, Vacation Or
          Any Other Benefits?'>
      <p>
          The California Department of Industrial Relations, Division of Labor
          Standards Enforcement, enforces labor laws in California. For
          information, go to <IndustrialRelations />{' '}
          on their Web site, or you can e-mail them at {divOfLaborStandardsContact.email}.
      </p>
    </Article>
  );
}