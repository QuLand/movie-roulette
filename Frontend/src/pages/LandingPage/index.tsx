import Navigation from "../../components/Navigation";

import style from "./style.module.scss";
import ContentCategory from "../../components/ContentCategory";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <Navigation />
        <div className={style.mainContent}>
          <ContentCategory/>
        </div>
    </div>
  )
};

export default LandingPage;
