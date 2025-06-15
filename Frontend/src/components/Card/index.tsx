import styles from "./Form.module.scss";

type CardProps = {
  title: string;
  imgSrc: string;
};

const Card = ({ title, imgSrc }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="" />
      <span className={styles.cardTitle}>{title}</span>
    </div>
  );
};
export default Card;
