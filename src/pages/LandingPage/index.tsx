import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/index";
import styles from "./Form.module.scss";

const cardImages = [
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/cb/0a/9f/cb0a9fe10baa99b932d1939bf461363d.jpg",
  "https://i.pinimg.com/736x/b3/93/33/b393334531cb90edda14dcb49c7dcbf5.jpg",
];

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.layoutContent}>
        <div className={styles.contentHeader}>
          <h1 onClick={() => navigate(0)} className={styles.headerTitle}>
            Movie-roulette
          </h1>
          <div className={styles.headerButtons}>
            <button
              type="button"
              className={styles.buttonLogout}
              onClick={() => navigate("/profile")}
            >
              Профиль
            </button>
            <button
              type="button"
              className={styles.buttonProfile}
              onClick={() => navigate("/")}
            >
              Выйти
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          {cardImages.map((src, index) => (
            <Card key={index} imgSrc={src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
