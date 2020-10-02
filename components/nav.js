import Link from "next/link";
import styles from "../styles/navstyle.module.scss";
import { navLinks, navRoutes } from "../constants/nav_links";
const { HELP_CENTER } = navRoutes;
export default function Nav() {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.brandLogo}>
        <img src="/assets/images/EDD.png" />
      </div>
      <ul>
        {navLinks.map((_o, idx) => {
          const { text, path, enabled } = _o;
          return (
            <li key={idx}>
              <Link href={path}>
                <a
                  className={
                    enabled && path == HELP_CENTER ? styles.active_link : ""
                  }
                >
                  {text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
