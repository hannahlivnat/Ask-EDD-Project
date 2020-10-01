import Article from '../../../../common/article'
import SocialSecLink from '../../common_links/sdi_information/social_security_link'
import SDILink from '../../common_links/sdi_information/sdi_online_link'
import eddContact from '../../../contact/edd_contact'
export default function ExtendBenefits() {
  return (
    <Article h4="Extend SDI Benefits">
      <p>
              You are eligible to receive benefits up until the date your
              physician/practitioner provided to the Employment Development
              Department (EDD) as your release or possible return to work date.
              With your final payment, you will receive a{' '}
        <i>Physician/Practitioner’s Supplementary Certificate</i> (DE
              2525XX) by mail.
      </p>
      <p>
              If you have not fully recovered and want to extend your disability
              period to continue benefits, you must have your
              physician/practitioner complete the DE 2525XX and return the form
              to the EDD to certify your continued disability.
      </p>
      <p>
              If your physician/practitioner has an SDI Online account, they may
              search for this form using your last name and Claim ID number or
              last four digits of your Social Security number, date of birth,
              and last name to submit the certification online.
      </p>
      <p>
              The DE 2525XX must be returned to the EDD online or by mail within
              20 days from the mailing date. If this form is submitted late, you
              may lose benefits. If you are eligible to receive continued
              benefits, allow 10 business days to process your payment after the
              EDD receives the DE 2525XX.
      </p>
      <p>
              If you misplaced the DE 2525XX, you may request the form via your{' '}
        <SDILink /> account or by calling {eddContact.sdi_representative}.
      </p>
      <p>
              If you have exhausted your available SDI benefits but your
              disability is continuing, you may want to consider applying for
              disability benefits through <SocialSecLink />.
      </p>
    </Article>
  );
}