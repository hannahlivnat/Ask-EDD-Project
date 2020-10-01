import Article from '../../../../common/article'
import taxAssistanceContact from '../../../contact/tax_assistance'
export default function payroll_electronic_transfer(){
  return (
    <Article h4="Electronic Funds Transfer Payment">
      <p>
              For questions about a specific Electronic Funds Transfer (EFT)
              payment and/or billing statement on an EFT payment, call the
              Taxpayer Assistance Center at {taxAssistanceContact.phone}.
      </p>
    </Article>
  );
}