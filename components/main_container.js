import React, { useState } from 'react';
import HelpCenter from './help_center'
import ArticlePaths from './article_paths_container'
import ContactPage from './contact_page'

export default function MainContainer() {
  const [displayedPage, changeDisplayedPage] = useState('ArticlePaths');

  // eslint-disable-next-line no-unused-vars
  const changeRoute = route => {
    changeDisplayedPage(route);
  };

  return (
    <div className="main-container">
      {
        (displayedPage === 'ContactPage') ?
          <ContactPage />

          : (displayedPage === 'ArticlePaths') ?
            <ArticlePaths />
            :
            <HelpCenter />
      }
    </div>
  )
}