import classes from "./styles/Technology.module.scss";

import TechList from "./technology/TechList";
import RenderData from "./technology/RenderData";

const Technology = function () {
  return (
    <div className={classes.technology}>
      <div className={classes.technology__sub}>
        <span className={classes["technology__sub--num"]}>03</span>
        <span className={classes["technology__sub--title"]}>
          space launch 101
        </span>
      </div>

      <div className={classes.technology__content}>
        <div className={classes.technology__images}>{RenderData("Image")}</div>

        <ul className={classes.technology__list}>
          <TechList active={classes.active} />
        </ul>

        <div className={classes.technology__information}>
          {RenderData("Description")}
        </div>
      </div>
    </div>
  );
};

export default Technology;
