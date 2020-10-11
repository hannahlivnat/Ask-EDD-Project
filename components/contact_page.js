import style from "../styles/contactusstyle.module.scss";
import { HelpBox } from "../components/common/helpBox";
export default function HelpCenter() {
  return (
    <div className={style.helpcenterWrapper}>
      <p className={style.titleText}>Contact Us</p>
      <HelpBox
        icon='/assets/icons/wheel.svg'
        mainText='HELP CENTER'
        subText='Find the answers to your questions'
        ctaText='Visit Help Center'
        handleClick={() => null}
      />
      <HelpBox
        icon='/assets/icons/chat.svg'
        mainText='CHAT'
        subText='Discover information quickly'
        ctaText='Chat with Us'
        handleClick={() => null}
      />
      <HelpBox
        icon='/assets/icons/phone.svg'
        mainText='PHONE'
        subText='Speak with an EDD Representative'
        ctaText='Talk with Us'
        handleClick={() => null}
      />
      <HelpBox
        icon='/assets/icons/email.svg'
        mainText='EMAIL'
        subText='Typical reply time: within 5 days'
        ctaText='Email Us'
        handleClick={() => null}
      />
    </div>
  );
}
