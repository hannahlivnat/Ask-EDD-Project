import style from "../../styles/common/custominputstyle.module.scss";
export const CustomInput = (props) => {
  const { icon, ...inputProps } = props;
  return (
    <div className={style.inputWrapper}>
      <input {...inputProps} />
      {icon && <span>{icon}</span>}
    </div>
  );
};
