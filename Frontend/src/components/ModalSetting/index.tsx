import { PropsWithChildren } from "react";

import ReactDOM from "react-dom";

import style from "./style.module.scss";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalSetting = ({ isOpen, onClose }: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={style.modal}>
      <div className={style.modalContent}>
        <button type="button"
                className={style.closeButton}
                onClick={(e) => {
          e.stopPropagation(); // Останавливаем всплытие
          onClose();
        }}>
          &times;
        </button>
        <span className={style.title}>Settings</span>
        <div className={style.settingMenu}>
          <div className={style.menuAvatar}>
            <span className={style.avatarTitle}>Change avatar</span>
            <div className={style.avatarCircle}>
              <span className={style.circlePlus}>+</span>
            </div>
          </div>
          <div className={style.menuName}>
            <span className={style.nameTitle}>Change Nickname</span>
            <input type="text" className={style.nameInput}/>
          </div>
        </div>
        <div className={style.settingButton}>
          <button type="button" className={style.buttonConfirm}>
            <span className={style.confirmTitle}>Confirm</span>
          </button>
        </div>
      </div>
      <div className={style.modalOverlay} onClick={(e) => {
        e.stopPropagation(); // Останавливаем всплытие
        onClose();
      }}></div>
    </div>,
    document.body
  );
};

export default ModalSetting;
