import { useNavigate } from "react-router-dom";

import styles from './Form.module.scss'

const ProfilePage = () => {
    const navigate = useNavigate();
    return (<div className={styles.container}>
        <div className={styles.layoutContent}>
            <div className={styles.mainInfo}>
                <button type='button' className={styles.buttonBack} onClick={() =>navigate("/landing")}>Назад</button>

            </div>
        </div>
    </div>)
}

export { ProfilePage }