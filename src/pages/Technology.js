import classes from "./styles/Technology.module.scss";

import TechImageRoute from "./technology/TechRoute/TechImageRoute";
import TechList from "./technology/TechList";
import TechDescripRoute from "./technology/TechRoute/TechDescripRoute";

const Technology = function () {
  return (
    <div className={classes.technology}>
      <div className={classes.technology__sub}>
        <span className={classes["technology__sub--num"]}>03</span>
        <span className={classes["technology__sub--title"]}>
          space launch 101
        </span>
      </div>

      <TechImageRoute classes={classes} />

      <TechList classes={classes} />

      <div className={classes.technology__content}>
        <span>the terminology</span>

        <TechDescripRoute />
      </div>
    </div>
  );
};

export default Technology;
