export default function unemployment_rate_for_city() {
  return (
    <div className="article-div">
      <h4>Where Can I Find the Unemployment Rate for my City?</h4>
      <p>
              The Labor Market Information Division prepares monthly estimates
              of labor force and unemployment rates for selected cities and
              towns in California. These data are available in the Labor Market
              Info{" "}
        <a href="http://www.labormarketinfo.edd.ca.gov/cgi/dataanalysis/AreaSelection.asp?tableName=Labforce">
          {" "}
                  Data Library
        </a>
              .
      </p>
    </div>
  );
}