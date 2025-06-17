import style from "./style.module.scss";

import CoffeeLogo from "../../common/assets/icons/coffee.svg";
import SettingLogo from "../../common/assets/icons/sliders.svg";
import LogoutLogo from "../../common/assets/icons/LogoutSolid.svg";
import CalendarLogo from "../../common/assets/icons/calendar.svg";
import UsersLogo from "../../common/assets/icons/users.svg";
import TrendingLogo from "../../common/assets/icons/trending-up.svg";
import FilmLogo from "../../common/assets/icons/film.svg";
import HeartLogo from "../../common/assets/icons/heart.svg";
import MessageLogo from "../../common/assets/icons/message-circle.svg";

const Navigation = () => {
  return (
    <div className={style.container}>
      <div className={style.logoIcon}>
        <img className={style.logoImg} src={CoffeeLogo} alt="" />
        <span className={style.logoTitle}>WATCH</span>
      </div>
      <div className={style.optionMenu}>
        <div className={style.optionFilm}>
          <span className={style.optionItem}>
            <img src={FilmLogo} alt="" />
            Home
          </span>
          <span className={style.optionItem}>
            <img src={HeartLogo} alt="" />
            Favourites
          </span>
          <span className={style.optionItem}>
            <img src={TrendingLogo} alt="" />
            Trending
          </span>
          <span className={style.optionItem}>
            <img src={CalendarLogo} alt="" />
            Coming soon
          </span>
        </div>
        <div className={style.optionCommunity}>
          <span className={style.optionItem}>
            <img src={UsersLogo} alt="" />
            Community
          </span>
          <span className={style.optionItem}>
            <img src={MessageLogo} alt="" />
            Social
          </span>
        </div>
        <div className={style.optionLogout}>
          <span className={style.optionItem}>
            <img src={SettingLogo} alt="" />
            Setting
          </span>
          <span className={style.optionItem}>
            <img src={LogoutLogo} alt="" />
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
