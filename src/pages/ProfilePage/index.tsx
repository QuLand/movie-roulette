import { useNavigate } from "react-router-dom";

import styles from './Form.module.scss'

const ProfilePage = () => {
    const navigate = useNavigate();
    return (<div className={styles.container}>
        <div className={styles.layoutContent}>
            <div className={styles.backgroundStart}></div>
            <div className={styles.mainInfo}>
                <img className={styles.infoAvatar} src="https://i.pinimg.com/736x/ce/1a/3c/ce1a3c6e263dfda5e6aa711bc7c777c5.jpg" alt=""/>
                <button type='button' className={styles.buttonBack} onClick={() =>navigate("/landing")}>Назад</button>
                <div className={styles.bio}>
                    <span className={styles.bioFio}>Котик Котович</span>
                    <span className={styles.floor}>Пол: Кот</span>
                </div>
            </div>
            <div className={styles.favoriteMovies}>
                <span className={styles.title}>Любимые фильмы:</span>
                <span>Спанч боб</span>
                <span>Кот леопольд</span>
            </div>
        </div>
    </div>)
}

export { ProfilePage }