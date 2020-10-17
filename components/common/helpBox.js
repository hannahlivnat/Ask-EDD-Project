import style from "../../styles/common/helpbox.module.scss";
import PropTypes from "prop-types";
import { RoundedButton } from "../common/rounded_button";
export const HelpBox = ({ icon, mainText, subText, ctaText, handleClick }) => {
  return (
    <div className={style.helpBox}>
      <div>
        <img src={icon} />
        <div>
          <h4>{mainText}</h4>
          <p>{subText}</p>
        </div>
      </div>
      <RoundedButton ctaText={ctaText} handleClick={handleClick} />
    </div>
  );
};

HelpBox.propTypes = {
  icon: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
