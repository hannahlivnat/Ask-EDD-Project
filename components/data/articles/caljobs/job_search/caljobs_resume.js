import CalJobsLink from '../../common_links/caljobs_link'
import Article from "../../../../common/article";

export default function caljobs_resume() {
  return (
    <Article h4="CalJOBS Résumé">
      <p>
            To upload, remove, or update your CalJOBs résumé, login to{" "}
        <CalJobsLink />. Select the &#34;Résumé Builder&#34; tab on the left side
            navigation pane in the quick menu or locate it under the
            &#34;Individual Options&#34;section.
      </p>

      <h5>Remove Résumé</h5>
      <ul>
        <li>
                  If any of the résumés displayed in the &#34;Résumé&#34; tab
                  need to be removed, select the empty box in the select column
                  next to the résumé you want removed. Select &#34;Delete&#34;
                  at the bottom of the column. The page will be refreshed and
                  the selected résumé will be removed.
        </li>
      </ul>
      <h5>Upload Résumé</h5>
      <ul>
        <li>Select &#34;Create New Résumé.&#34;</li>
        <li>
                  In the Résumé Information section, choose the radio button
                  &#34;External Résumé&#34; from the &#34;Résumé Creation
                  Method&#34; area.
        </li>
        <li>
                  Give the résumé a title and select &#34;Next&#34; to proceed.
        </li>
      </ul>
      <h5>Change Résumé</h5>
      <ul>
        <li>
                  Find the résumés you wish to edit displayed in the
                  &#34;Résumé&#34; tab. Choose the edit link in the
                  &#34;Action&#34; column. Make your changes and select
                  &#34;Save.&#34;
        </li>
      </ul>
    </Article>
  );
}