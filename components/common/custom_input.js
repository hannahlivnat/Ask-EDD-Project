import PropTypes from 'prop-types';
import style from "../../styles/common/custominputstyle.module.scss";
export const CustomInput = props => {
  const { inputIcon,...inputProps } = props;
  return (
    <div className={style.inputWrapper}>
      <input {...inputProps} />
      {inputIcon && <span>{inputIcon}</span>}
    </div>
  );
};
CustomInput.propTypes = {
  inputIcon: PropTypes.element,
  inputProps: PropTypes.shape({
    className: PropTypes.string,
    placeholder:PropTypes.string,
    onKeyDown:PropTypes.func
  })
};

