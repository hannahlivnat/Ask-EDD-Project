import styles from "../styles/headerstyle.module.scss";
import { CustomInput } from "./common/custom_input";
// import IosSearchOutline from "react-ionicons/lib/IosSearchOutline";
export default function Header() {
  const handleKeyDown = e => {
    // we can consider debounce here on basis of what we are trying to achieve
    const { key } = e;
    if (key == "Enter") {
      // console.log("Search on enter works");
    }
  };
  return (
    <div className="header">
      <div className={styles.headerWrapper}>
        <h1>Help Center</h1>
        <p>What can we help you with?</p>
        <CustomInput
          className={styles.helpsearchInput}
          placeholder="Search Help Center"
          onKeyDown={handleKeyDown}
          // icon={<IosSearchOutline />}
        />
      </div>
    </div>
  );
}
