import Link from "next/link";
import style from "../styles/footerstyle.module.scss";
import { footerLinks } from "../constants/footer_links";
import { Dropdown } from "semantic-ui-react";
export default function Footer() {
  return (
    <footer>
      <div className={style.footerWrapper}>
        <div>
          {footerLinks?.socialLinks?.map(({ iconPath, url }, idx) => (
            <Link href={url} key={idx}>
              <img src={iconPath} />
            </Link>
          ))}
        </div>
        <div>
          <p>RESOURCES</p>
          {footerLinks?.resources?.map(({ label, url }, idx) => (
            <Link href={url} key={idx}>
              <p>{label}</p>
            </Link>
          ))}
        </div>
        <div>
          <p>STATE PROGRAMS</p>
          {footerLinks?.statePrograms?.map(({ label, url }, idx) => (
            <Link href={url} key={idx}>
              <p>{label}</p>
            </Link>
          ))}
        </div>
        <div>
          <p>LEADERSHIP</p>
          {footerLinks?.leadership?.map(({ label, url }, idx) => (
            <Link href={url} key={idx}>
              <p>{label}</p>
            </Link>
          ))}
        </div>
        <div>
          <Dropdown
            className={style.selectLanguageDropdown}
            placeholder='Select Language'
            fluid
            selection
            options={languageOptions}
          />
        </div>
      </div>
      <div className={style.copyrightFooterSection}>
        <p>Copyright &copy; 2020 Employment Department</p>
        <div>
          {footerLinks?.copyrightLinks?.map(({ label, url }, idx) => (
            <Link href={url} key={idx}>
              <p>{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

const languageOptions = [
  {
    key: "eng",
    text: "English",
    value: "eng",
  },
];
