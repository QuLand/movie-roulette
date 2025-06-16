import styles from "./style.module.scss";

interface MainCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const MainCard: React.FC<MainCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardInfo}>
        <span className={styles.infoTitle}>{title}</span>
        <span className={styles.infoDescription}>{description}</span>
        <div className={styles.infoButtons}>
          <button type="button" className={styles.buttonFavorite}>
            <span className={styles.favoriteTitle}>favorite ❤</span>
          </button>
          <button type="button" className={styles.buttonTicket}>
            <span className={styles.ticketTitle}>Buy ticket 📩</span>
          </button>
          <button type="button" className={styles.buttonWatch}>
            <span className={styles.watchTitle}>Watch 👀</span>
          </button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="" className={styles.imageCard} />
      </div>
    </div>
  );
};

export { MainCard };
