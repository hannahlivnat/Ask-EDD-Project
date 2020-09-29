import Breadcrumb from './breadcrumb'
import APCMain from './article_paths_container_main'
import SideNavigation from './sidenav'

export default function ArticlePathsContainer() {
  return (
    <div className="article-paths-container">
      <Breadcrumb />
      <SideNavigation />
      <APCMain />
    </div>
  );

}
