import Article from "../../../../components/common/article";
import contactEdd from "../../../contact/edd_contact";

export default function sdi_stop_benefits_for_deceased_claimants(){
  return (
    <Article h4="Stop Benefits for Deceased Claimants">
      <p>
              For Disability Insurance Benefits, you may contact {' '}
        {contactEdd.sdi_representative} (English),{' '}
        {contactEdd.sdi_spanish} (en español), or TTY{" "}
        {contactEdd.tty_number}. When calling via the California Relay
              Service (711), provide the Disability Insurance number (
        {contactEdd.sdi_representative}) to the operator.
      </p>
      <p>
              If you are unable to reach an EDD representative at the phone
              number listed above, contact the Employment Development Department
              in writing at the PO Box address printed on the payment notice and
              include a short explanation along with the date of the
              beneficiary’s death. Be sure to provide your name, address, and
              phone number so we can contact you with additional instructions.
      </p>
    </Article>
  );
}