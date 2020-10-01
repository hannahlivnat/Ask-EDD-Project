import Article from "../../../../common/article";
import DataLibraryLink from "../../common_links/wage_data/data_library";
export default function unemployment_rate_for_city() {
  return (
    <Article h4="Where Can I Find the Unemployment Rate for My City?">
      <p>
        The Labor Market Information Division prepares monthly estimates
        of labor force and unemployment rates for selected cities and
        towns in California. These data are available in the Labor
        Market Info <DataLibraryLink />.
      </p>
    </Article>
  );
}
