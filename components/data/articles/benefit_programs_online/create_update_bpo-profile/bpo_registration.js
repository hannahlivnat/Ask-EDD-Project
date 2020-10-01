import Article from '../../../../common/article'
import BPOLink from '../../common_links/benefits_program_link'

export default function bpo_registration() {
  return (
    <Article h4="Benefits Program Online Registration">
      <p>
              To use UI Online, you must first complete a one-time registration
              in <BPOLink />
      </p>
      <ol>
        <li>Go to the BPO login page.</li>
        <li>Select Register to begin setting up a new account.</li>
      </ol>
      <p>
              Once you have registered in Benefit Programs Online, you can
              register for UI Online following these steps:
      </p>
      <ol>
        <li>Log in to Benefit Program Online.</li>
        <li>Select UI Online</li>
        <li>
                  Provide all required information, including EDD Customer
                  Account Number, to complete the process.
        </li>
      </ol>
      <p>
              Note: You must have filed an Unemployment Insurance (UI) claim to
              register for UI Online. All UI customers who file a new claim or
              reopen an existing claim will automatically receive the{" "}
        <i>
                  Employment Development Department Customer Account Number
                  Notification
        </i>{" "}
              (DE 5614) letter within 10 business days of filing or reopening a
              claim.
      </p>
    </Article>
  );
}


