import style from "../../styles/common/chatbuttonstyle.module.scss";
export const ChatButton = () => {
  return (
    <button type='button' className={style.chatBtn}>
      <img src='/assets/icons/chat-icon.svg' />
      Chat
    </button>
  );
};
