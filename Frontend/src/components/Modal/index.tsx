import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import ReactDOM from "react-dom";

import styles from "./style.module.scss";

import GitHub from "../../common/assets/icons/icons8-github.svg";
import Google from "../../common/assets/icons/icons8-google.svg";
import Facebook from "../../common/assets/icons/icons8-facebook.svg";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: PropsWithChildren<ModalProps>) => {
  const navigate = useNavigate();
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalForm}>
          <div className={styles.formField}>
            <input
              type="text"
              className={styles.fieldInput}
              placeholder="Enter login"
            />
          </div>
          <div className={styles.formField}>
            <input
              type="password"
              className={styles.fieldInput}
              placeholder="Enter password"
            />
          </div>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => navigate("/landing")}
          >
            <span className={styles.buttonTitle}>Log in</span>
          </button>
          <div className={styles.formLinks}>
            <img src={GitHub} alt="github" className={styles.linksIcon} />
            <img src={Google} alt="google" className={styles.linksIcon} />
            <img src={Facebook} alt="facebook" className={styles.linksIcon} />
          </div>
        </div>
      </div>
      <div className={styles.modalOverlay} onClick={onClose}></div>
    </div>,
    document.body
  );
};

export default Modal;
