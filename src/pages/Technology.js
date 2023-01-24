import classes from "./styles/Technology.module.scss";

import TechSliders from "./technology/TechSliders";
import TechBtn from "./technology/TechBtn";
import TechDescription from "./technology/TechDescription";

const Technology = function () {
  return (
    <div className={classes.technology}>
      <div className={classes.technology__content}>
        <div className={classes.technology__sub}>
          <span className={classes["technology__sub--num"]}>03</span>
          <span className={classes["technology__sub--title"]}>
            space launch 101
          </span>
        </div>
      </div>

      <TechSliders />
      <TechBtn />
      <TechDescription />
    </div>
  );
};

export default Technology;
