import CallEDDLink from "../../common_links/call_edd_link";

export default function uio_worked_or_lived_outside_ca() {
  return(
    <div className="article-div">
      <h4>I Worked or Lived Outside California</h4>
      <p>In the last 18 months...</p>
      <ul>
        <li>
        If you worked in California only, regardless of where you
        reside,{" "}
          <a href="https://www.edd.ca.gov/unemployment/Filing_a_Claim.htm">
        Click here
          </a>{" "}
        to file your claim.
        </li>
        <li>
        If the one state you worked in is not California, regardless of
        where you reside, you need to file a claim in that state.{" "}
          <a href="https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/find-unemployment-benefits.aspx">
          Click here{" "}
          </a>
        for a list of state unemployment insurance programs.
        </li>
        <li>
        If you worked in two or more states, and reside in California,
        you must <CallEDDLink /> to file your claim as additional
        information is required.
        </li>
        <li>
        If you worked in two or more states, and do not reside in
        California, you must contact your resident state.{" "}
          <a href="http://www.servicelocator.org/OWSLinks.asp">
          Click here
          </a>{" "}
        for a list of state unemployment insurance programs.
        </li>
      </ul>
    </div>
  )
}
