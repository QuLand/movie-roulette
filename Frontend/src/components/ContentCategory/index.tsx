import style from "./style.module.scss";

import BellIcon from "../../common/assets/icons/bell.svg";
import EllipsisIcon from "../../common/assets/icons/ellipsis.svg";
import SearchIcon from "../../common/assets/icons/search.svg";

const ContentCategory = () => {
  return (
    <div className={style.container}>
      <div className={style.category}>
        <span className={style.categoryTitle}>Movies</span>
        <span className={style.categoryTitle}>Series</span>
        <span className={style.categoryTitle}>Documentaries</span>
      </div>
      <div className={style.optionProfile}>
        <img src={SearchIcon} alt=""/>
        <img src={BellIcon} alt=""/>
        <div className={style.profileIcon}>
          <img src={EllipsisIcon} alt=""/>
          <span className={style.profileName}>Nickname</span>
        </div>
      </div>
    </div>
  )
}

export default ContentCategory;