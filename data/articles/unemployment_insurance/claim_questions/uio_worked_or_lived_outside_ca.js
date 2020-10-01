import Article from '../../../../components/common/article'
import CallEDDLink from "../../common_links/bp_online/call_edd_link";
import FileClaimLink from '../../common_links/uionline/file_ui_claim'
import UIProgramsLink from '../../common_links/uionline/list_of_ui_programs'

export default function uio_worked_or_lived_outside_ca() {
  return (
    <Article h4="I Worked or Lived Outside California">
      <ul>
        <li>
                  If you worked in California only, regardless of where you
                  reside, you may <FileClaimLink />.
        </li>
        <li>
                  If the one state you worked in is not California, regardless
                  of where you reside, you need to file a claim in that state.{" "}

                  for a list of state unemployment insurance programs.
        </li>
        <li>
                  If you worked in two or more states, and reside in California,
                  you must <CallEDDLink /> to file your claim as additional
                  information is required.
        </li>
        <li>
                  If you worked in two or more states, and do not reside in
                  California, you must contact your resident state. View a{' '}
          <UIProgramsLink />.
        </li>
      </ul>
    </Article>
  );
}
