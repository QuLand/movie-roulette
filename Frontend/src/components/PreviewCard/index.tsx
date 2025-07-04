import styles from "./style.module.scss";

interface MainCardProps {
  title: string;
  description: string;
}

const PreviewCard: React.FC<MainCardProps> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cardInfo}>
          <span>{title}</span>
          <span>{description}</span>
          <div>
            <button type="button">
              <span>Watch now</span>
            </button>
            <button type="button">❤️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
