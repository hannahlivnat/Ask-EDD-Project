import Link from "next/link";
import styles from "../styles/navstyle.module.scss";
import { navLinks } from "../constants/nav_links";
import { useRouter } from "next/router";
export default function Nav() {
  const router = useRouter();
  const pageUrl = router.pathname;
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.brandLogo}>
        <img src='/assets/images/EDD.png' />
      </div>
      <ul>
        {navLinks.map((_o, idx) => {
          const { text, path, enabled } = _o;
          return (
            <li key={idx}>
              <Link href={path}>
                <a
                  className={
                    enabled && path == pageUrl ? styles.active_link : ""
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
