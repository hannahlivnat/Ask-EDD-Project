import Article from "../../../../components/common/article";
import calJobsContact from "../../../contact/caljobs_contact";

export default function report_caljobs_systems_problem() {
  return (
    <Article h4='Report a CalJOBS System Problem'>
      <p>
        You can report the problem by calling the CalJOBSSM Customer
        Support Desk at {calJobsContact.customer_support_desk} (Spanish toll-free number is{' '}
        {calJobsContact.customer_support_spanish}) between 8 a.m. and 5 p.m., Monday through Friday,
        except on State holidays. E-mail your inquiries to{' '}
        {calJobsContact.email}.
      </p>
    </Article>
  );
}
