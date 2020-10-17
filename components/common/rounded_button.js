import style from "../../styles/common/roundedbuttonstyle.module.scss";
import PropTypes from "prop-types";
export const RoundedButton = ({ ctaText, handleClick }) => {
  return (
    <button type='button' onClick={handleClick} className={style.roundedBtn}>
      {ctaText}
    </button>
  );
};

RoundedButton.propTypes = {
  ctaText: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.string,
};
