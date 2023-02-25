import { useState } from "react";

import classes from "./styles/Technology.module.scss";

import TechList from "./technology/Contents/TechList";
import RenderTech from "./technology/RenderTech";
import { RouteFade } from "../components/animation/Transitions";

const Technology = function () {
  const [currTech, setTech] = useState("t1");

  return (
    <RouteFade className={classes.technology}>
      <div className={classes.technology__sub}>
        <span className={classes["technology__sub--num"]}>03</span>
        <span className={classes["technology__sub--title"]}>
          space launch 101
        </span>
      </div>

      <RenderTech classes={classes} currTech={currTech}>
        <TechList classes={classes} currTech={currTech} setTech={setTech} />
      </RenderTech>
    </RouteFade>
  );
};

export default Technology;
