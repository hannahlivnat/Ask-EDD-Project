import style from "../../styles/common/maintopiccard.module.scss";
import PropTypes from "prop-types";
export const MainTopicCard = ({ icon, mainText, handleClick }) => {
  return (
    <div className={style.mainTopicCard} onClick={handleClick}>
      <p>{mainText}</p>
      <img src={icon} alt={mainText} />
    </div>
  );
};

MainTopicCard.propTypes = {
  icon: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
