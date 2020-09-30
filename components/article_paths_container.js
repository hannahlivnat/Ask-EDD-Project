import Breadcrumb from './breadcrumb'
import APCMain from './article_paths_container_main'
import SideNavigation from './sidenav'
// eslint-disable-next-line no-unused-vars
import EDDFullData from './data/edd_full_data'

export default function ArticlePathsContainer() {
  return (
    <div className="article-paths-container">
      <Breadcrumb />
      <SideNavigation />
      <APCMain />
      {
        EDDFullData["Benefit Programs Online (BPO)"][
                  "BPO Account Issues"
        ]["Forgot Email or Password"]
      }
    </div>
  );

}
