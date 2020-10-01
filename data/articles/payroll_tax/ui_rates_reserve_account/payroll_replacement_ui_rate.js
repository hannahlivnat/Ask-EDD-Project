import Article from "../../../../components/common/article";
import taxpayerAssistanceContact from "../../../contact/tax_assistance";

export default function replacement_ui_rate() {
  return (
    <Article h4="Replacement Copy of UI Rate Notice">
      <p>
              To obtain a copy of your{" "}
        <i>
                  Notice of Contribution Rates and Statement of UI Reserve
                  Account
        </i>{" "}
              (DE 2088), call the Taxpayer Assistance Center at{" "}
        {taxpayerAssistanceContact.phone}.
      </p>
    </Article>
  );
}