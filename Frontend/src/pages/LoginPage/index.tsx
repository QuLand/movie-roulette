import coffeeIcon from "../../common/assets/icons/coffee.svg";
import { useState } from "react";
import AuthForm from "../../components/AuthForm";

import styles from "./style.module.scss";
const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<"login" | "register">("login");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperLogo}>
          <div className={styles.logoIcon}>
            <img className={styles.logoImg} src={coffeeIcon} alt="" />
            <span className={styles.logoTitle}>WATCH</span>
          </div>
          <p className={styles.wrapperDescription}>Enjoy the newest movies</p>
        </div>
        <div className={styles.control}>
          <button
            type="button"
            className={styles.controlButton}
            onClick={() => {
              setFormType("login");
              setIsOpen(true);
            }}
          >
            <span className={styles.buttonTitle}>Log in</span>
          </button>
          <AuthForm
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            type={formType}
          />
          <span className={styles.controlTitle}>
            No account?{" "}
            <a
              className={styles.controlSign}
              onClick={() => {
                setFormType("register");
                setIsOpen(true);
              }}
            >
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
