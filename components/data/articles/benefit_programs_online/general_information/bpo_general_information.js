import BPOLink from "../../common_links/benefits_program_link.js";

export default function bpo_general_information() {
  return (
    <div className="article-div">
      <h4>BPO General Information</h4>
      <p>
        <BPOLink /> is your single login to access the Employment
            Development Department&#39;s online benefit services.
      </p>
      <p>Your account will provide access to:</p>
      <ul>
        <li>
          <a href="https://edd.ca.gov/Disability/SDI_Online.htm">
                    SDI Online:
          </a>
                Apply for Disability Insurance(DI) and Paid Family Leave (PFL)
                benefits and manage your DI claim.
        </li>
        <li>
          <a href="https://edd.ca.gov/Unemployment/UI_Online.htm">
                    UI Online:
          </a>
                Certify for Unemployment Insurance (UI) benefits, reopen an
                existing claim, and manage your UI claim.
        </li>
      </ul>
    </div>
  );
}



