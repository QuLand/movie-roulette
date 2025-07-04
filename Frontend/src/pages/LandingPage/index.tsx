import Navigation from "../../components/Navigation";

import style from "./style.module.scss";
import ContentCategory from "../../components/ContentCategory";
import PreviewCard from "../../components/PreviewCard";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <div className={style.layout}>
        <ContentCategory />
        <PreviewCard title="aboba" description="aboba" />
      </div>
    </div>
  );
};

export default LandingPage;
