import { useState } from "react";

import classes from "./styles/Technology.module.scss";

import smallBG from "../assets/technology/background-technology-mobile.jpg";
import mediumBG from "../assets/technology/background-technology-tablet.jpg";
import largeBG from "../assets/technology/background-technology-desktop.jpg";

import nightVideo from "../assets/video/space4.mp4";

import TechList from "./technology/Contents/TechList";
import RenderTech from "./technology/RenderTech";
import { RouteFade } from "../components/animation/Transitions";

const Technology = function () {
  const [currTech, setTech] = useState("t1");

  return (
    <RouteFade className={classes.technology}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={classes.technology__video}
      >
        <source src={nightVideo} type="video/mp4" />
      </video>

      <picture>
        <source srcSet={largeBG} media="(min-width: 768px)" />
        <source srcSet={mediumBG} media="(min-width: 400px)" />

        <img
          src={smallBG}
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
