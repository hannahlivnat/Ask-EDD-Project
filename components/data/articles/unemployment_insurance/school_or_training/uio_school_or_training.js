import CalJobsLink from '../../common_links/caljobs_link'
export default function uio_school_or_training() {
  return(
    <div className="article-div">
      <h4>School Or Training Support</h4>
      <p>
            Employment and training services are provided through{" "}
        <a href="http://www.edd.ca.gov/Office_Locator/">
                America&#38;s Job Center of CaliforniaSM
        </a>{" "}
            locations, formerly known as One-Stop Career Centers, throughout
            California. These locations provide access to numerous government
            agencies that can assist you with your employment and training
            needs. For additional information, visit
        <CalJobsLink />/
      </p>
    </div>
  )
}
