import BPOLink from '../../common_links/benefits_program_link'
export default function registration() {
  return (
    <div className="article-div">
      <h4>Register for SDI Online</h4>
      <p>
              To register for SDI Online, you must have first completed a
              one-time registration in Benefit Programs Online (BPO).
      </p>
      <p>
              Once you have registered in BPO, you can register for SDI Online
              by following these steps:
      </p>
      <ol>
        <li>
                  Log in to your <BPOLink /> account.
        </li>
        <li>Select SDI Online.</li>
        <li>
                  Select your registration type on the SDI Online Registration
                  Instruction page (Claimants, Physician/Practitioners,
                  Physician/Practitioner Representative, Employers, or Voluntary
                  Plans.)
        </li>
        <li>
                  Provide all required information, including California Driver
                  License number, to complete the process.
        </li>
      </ol>
      <p>
              Once your SDI Online registration is complete, an Employment
              Development Department Customer Account Number (EDDCAN) will be
              assigned as a reference number.
      </p>
      <p>For assistance with registration, refer to:</p>
      <ul>
        <li>
          <a href="https://www.edd.ca.gov/pdf_pub_ctr/de8515.pdf">
                      SDI Online Tips for Claimants.
          </a>
        </li>
        <li>
          <a href="https://www.edd.ca.gov/pdf_pub_ctr/de8518.pdf">
                      SDI Online Tips for Employers{" "}
          </a>
        </li>
        <li>
          <a href="https://www.edd.ca.gov/pdf_pub_ctr/de8516.pdf">
                      SDI Online Tips for Physicians and Practitioners.
          </a>
        </li>
        <li>
          <a href="https://www.edd.ca.gov/Disability/SDI_Online_Tutorials.htm">
                      SDI Online Tutorial.
          </a>
        </li>
      </ul>
      <p>
              You may also contact the EDD to speak to a representative by
              calling 1-800-480-3287 or TTY 1-800-563-2441 Monday-Friday, 8 a.m.
              to 5 p.m. (Pacific time), except{" "}
        <a href="https://www.edd.ca.gov/Payroll_Taxes/State_Holidays.htm">
                  state holidays
        </a>
              . Employers and physicians/practitioners may call 1-855-342-3645.
      </p>
      <p>
              When calling via the California Relay Service (711), provide the
              Disability Insurance number (1-800-480-3287) to the operator.
      </p>
    </div>
  );
}