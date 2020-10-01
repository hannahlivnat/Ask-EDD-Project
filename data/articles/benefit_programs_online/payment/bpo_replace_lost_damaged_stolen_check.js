import Article from "../../../../components/common/article";
import CallEdd from "../../common_links/bp_online/call_edd_link"
export default function bpo_replace_lost_damaged_stolen_check() {
  return (
    <Article h4="Replace a Lost, Damaged, or Stolen Check">
      <h5>Damaged Check</h5>
      <p>
              Write &#34;VOID&#34; across the face of the check in large
              letters. Mail the damaged check to the address printed on the face
              of the check and include your name, address, telephone number and
              social security number in the letter. It will take EDD
              approximately two weeks to replace your check.
      </p>
      <h5>Lost or Stolen Check</h5>
      <p>
              If the check has been lost or stolen, and you require a
              replacement, <CallEdd />.
      </p>
    </Article>
  );
}