import CalJobsLink from '../../common_links/caljobs_link'
export default function caljobs_resume() {
  return (
    <div className="article-div">
      <h4>CalJOBS Resume</h4>
      <ol>
        <li>
                  Login to <CalJobsLink />
        </li>
        <li>
                  Select the &#34;Résumé Builder&#34; tab on the left side navigation
                  pane in the quick menu or locate it under the &#34;Individual
                  Options&#34;section.
        </li>
      </ol>
      <h6>Remove Resume</h6>
      <ul>
        <li>
                  If any of the résumés displayed in the &#34;Résumé&#34; tab need to be
                  removed, select the empty box in the select column next to the
                  résumé you want removed. Select &#34;Delete&#34; at the bottom of the
                  column. The page will be refreshed and the selected résumé
                  will be removed.
        </li>
      </ul>
      <h6>Upload Resume</h6>
      <ul>
        <li>Select &#34;Create New Résumé.&#34;</li>
        <li>
                  In the Résumé Information section, choose the radio button
                  &#34;External Résumé&#34; from the &#34;Résumé Creation Method&#34; area.
        </li>
        <li>Give the résumé a title and select &#34;Next&#34; to proceed.</li>
      </ul>
      <h6>Change Resume</h6>
      <ul>
        <li>
                  Find the résumés you wish to edit displayed in the &#34;Résumé&#34;
                  tab. Choose the edit link in the &#34;Action&#34; column. Make your
                  changes and select &#34;Save.&#34;
        </li>
        <li>
                  If any résumés are displayed in the &#34;Résumé&#34; tab that you want
                  removed, select the empty box in the select column next to the
                  résumé you want removed. Select &#34;Delete&#34; at the bottom of the
                  column. The page will be refreshed and the selected résume
                  will be removed.
        </li>
      </ul>
    </div>
  );
}