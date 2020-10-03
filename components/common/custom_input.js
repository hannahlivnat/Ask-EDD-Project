import style from "../../styles/common/custominputstyle.module.scss";
export const CustomInput = props => {
  // const { icon,...inputProps } = props;
  return (
    <div className={style.inputWrapper}>
      <input {...props} />
      {/* {icon && <span>{icon}</span>} */}
    </div>
  );
};
