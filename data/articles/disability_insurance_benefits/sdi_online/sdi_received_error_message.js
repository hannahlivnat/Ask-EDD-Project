import Article from '../../../../components/common/article'
import eddContact from '../../../contact/edd_contact'
export default function sdi_received_error_message(){
  return (
    <Article h4='I Received an Error Message'>
      <p>
          If you received an E311, E313, or E318 error message, check your
          California Driver License (CDL) or Identification (ID) card to ensure
          you are using your name as it appears on the CDL or ID, correct date
          of birth; and CDL or ID number as it appears on these cards, then
          complete all required fields.
      </p>
      <p>
          If you have had a name change since you last applied for benefits,
          please contact the EDD to update your information at {eddContact.sdi_representative}.
      </p>
    </Article>
  )
}