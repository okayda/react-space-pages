import { useState } from "react";
import classes from "./styles/Technology.module.scss";

import nightVideo from "../assets/video/space4.mp4";
import Video from "../components/Video";
import medium from "../assets/technology/background-technology-tablet.jpg";
import small from "../assets/technology/background-technology-mobile.jpg";

import TechList from "./technology/Contents/TechList";
import RenderTech from "./technology/RenderTech";
import { RouteFade } from "../components/animation/Transitions";

const Technology = function () {
  const [currTech, setTech] = useState("t1");

  return (
    <RouteFade className={classes.technology}>
      <Video classes={classes.technology__video} video={nightVideo} />

      <picture>
        <source srcSet={medium} media="(min-width: 650px)" />

        <img
          src={small}
          alt="Space"
          className={classes.technology__background}
        />
      </picture>

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
