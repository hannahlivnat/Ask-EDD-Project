import Article from "../../../../components/common/article";

import JobsLinks from '../../common_links/jobs_resources/caljobs_link'
export default function how_to_change_name() {
  return (
    <Article h4="How Can I Change My Name?">
      <ol>
        <li>
                  Log in to <JobsLinks />
        </li>
        <li>
                  Select the &#34;My Portfolio&#34; tab on the left side
                  navigation pane in the quick menu.
        </li>
        <li>
                  Select the &#34;My Individual Profiles&#34; tab and then
                  select &#34;Personal Profile&#34; folder.
        </li>
        <li>Locate the &#34;Name&#34; section and make changes.</li>
        <li>
                  Select the &#34;Save&#34; button at the bottom of the screen
                  when finished.
        </li>
      </ol>
    </Article>
  );
}