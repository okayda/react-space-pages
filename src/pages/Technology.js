import classes from "./styles/Technology.module.scss";
import { TechRoute } from "./technology/TechHelper";

import TechImage from "./technology/TechContent/TechImage";
import TechList from "./technology/TechList";
import TechDescription from "./technology/TechContent/TechDescription";

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
        <div className={classes.technology__images}>
          <TechRoute>
            <TechImage />
          </TechRoute>
        </div>

        <ul className={classes.technology__list}>
          <TechList active={classes.active} />
        </ul>

        <div className={classes.technology__information}>
          <TechRoute>
            <TechDescription />
          </TechRoute>
        </div>
      </div>
    </div>
  );
};

export default Technology;
