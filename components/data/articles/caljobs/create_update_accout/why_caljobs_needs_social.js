import JobsLinks from "../../common_links/jobs_resources/caljobs_link";
import Article from "../../../../common/article";

export default function why_caljobs_needs_social(){
  return (
    <Article h4="Why Does CalJOBS Need My Social Security Number?">
      <p>
        <JobsLinks /> uses the Social Security number to ensure that no
              individual&#39;s record is confused with another and to prevent
              identity fraud.
      </p>
      <p>
              In order to safeguard confidential information, the EDD has
              installed sophisticated encryption software and firewall
              technology into CalJOBSSM. Furthermore, the EDD has taken every
              precautionary measure to ensure that all information received is
              secure and confidential.
      </p>
    </Article>
  );
}