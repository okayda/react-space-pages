import { useState } from "react";
import { Route } from "react-router-dom";

import classes from "./styles/Technology.module.scss";

import TechImageRoute from "./technology/TechRoute/TechImageRoute";
import TechList from "./technology/TechList";
import TechDescripRoute from "./technology/TechRoute/TechDescripRoute";

const Technology = function () {
  const [content, setContent] = useState(0);

  return (
    <div className={classes.technology}>
      <div className={classes.technology__sub}>
        <span className={classes["technology__sub--num"]}>03</span>
        <span className={classes["technology__sub--title"]}>
          space launch 101
        </span>
      </div>

      <div className={classes.technology__images}>
        <TechImageRoute />
      </div>

      <ul className={classes.technology__list}>
        <TechList active={classes.active} />
      </ul>

      <div className={classes.technology__content}>
        <span>the terminology</span>
        <Route path="/technology/:techId" exact>
          <TechDescripRoute contentNum={content} />
        </Route>
      </div>
    </div>
  );
};

export default Technology;
