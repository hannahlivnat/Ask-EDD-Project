import style from "../../styles/common/populartopiccard.module.scss";
import PropTypes from "prop-types";
export const PopularTopicCard = ({ questionText, answerText, handleClick }) => {
  return (
    <div className={style.popularTopicCard} onClick={handleClick}>
      <p>{questionText}</p>
      <div>{answerText}</div>
    </div>
  );
};

PopularTopicCard.propTypes = {
  questionText: PropTypes.string.isRequired,
  answerText: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
