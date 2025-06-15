import styles from './Form.module.scss'

// @ts-ignore
import coffeeIcon from '../../common/assets/icons/coffee.svg';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperLogo}>
                  <div className={styles.logoIcon}>
                    <img className={styles.logoImg} src={coffeeIcon} alt=""/>
                    <span className={styles.logoTitle}>WATCH</span>
                  </div>
                  <p className={styles.wrapperDescription}>Enjoy the newest movies</p>
                </div>
                <div className={styles.control}>
                  <button type="button" className={styles.controlButton}>
                    <span className={styles.buttonTitle}>
                      Log in
                    </span>
                  </button>
                  <span>No account?  <a className={styles.controlSign}>Sign up</a></span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;