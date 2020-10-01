import Article from '../../../../components/common/article'
import contactEDD from '../../../contact/edd_contact'
export default function sdi_form_1099g() {
  return (
    <Article h4="Copy of the Form 1099G">
      <p>
              If you were receiving Unemployment Insurance benefits at the time
              your disability began and you filed a claim for Disability
              Insurance benefits but did not receive a Form 1099G, you need to
              contact the Employment Development Department (EDD) Form 1099G
              Service Line at {contactEDD.form_1099g_service_line}. When calling
              via the California Relay Service (711), provide the EDD number (
        {contactEDD.form_1099g_service_line}) to the operator.
      </p>
    </Article>
  );
}