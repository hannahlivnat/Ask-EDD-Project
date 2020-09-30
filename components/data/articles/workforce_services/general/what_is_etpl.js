import AmericanJobCenterLink from "../../common_links/american_jobs_link";

export default function what_is_etpl() {
  return (
    <div className="article-div">
      <h4>What is the Eligible Training Provider List (ETPL)?</h4>
      <p>
              The{" "}
        <a href="https://www.edd.ca.gov/Jobs_and_Training/Eligible_Training_Provider_List.htm">
                  Eligible Training Provider List
        </a>
              (ETPL) is a list of qualified training providers eligible to
              receive Workforce Innovation and Opportunity Act funds for their
              services. The ETPL includes training locations, program costs,
              training occupations, and apprenticeship programs. You can{" "}
        <a href="http://etpl.edd.ca.gov/wiaetpltp.asp">
                  search training providers
        </a>{" "}
              or visit an{" "}
        <AmericanJobCenterLink />
              to help you identify potential sources for training.
      </p>
    </div>
  );
}