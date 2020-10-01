import OccupationProfile from '../../common_links/wage_data/occ_profile_labor_data'
import OccupationWageData from '../../common_links/wage_data/occ_wage_data'
export default function wage_data_by_occ() {
  return (
    <div className="article-div">
      <h4>Where can I find wage data by occupation? </h4>
      <p>
              You can find information about a particular occupation through the{' '}
        <OccupationProfile />. Or if you want information on several occupations, areas, or
              time periods go to <OccupationWageData />.
      </p>
    </div>
  );
}