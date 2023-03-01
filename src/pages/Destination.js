import { useState } from "react";
import classes from "./styles/Destination.module.scss";

import planetsVideo from "../assets/video/space2.mp4";
import Video from "../components/Video";
import large from "../assets/destination/background-destination-desktop.jpg";
import medium from "../assets/destination/background-destination-tablet.jpg";
import small from "../assets/destination/background-destination-mobile.jpg";

import RenderDest from "./destination/RenderDest";
import DestinationList from "./destination/Contents/DestinationList";
import { RouteFade } from "../components/animation/Transitions";

const Destination = function () {
  const [currPlanet, setPlanet] = useState("moon");

  return (
    <RouteFade className={classes.destination}>
      <Video classes={classes.destination__video} video={planetsVideo} />

      <picture>
        <source srcSet={large} media="(min-width: 768px)" />
        <source srcSet={medium} media="(min-width: 400px)" />

        <img
          src={small}
          alt="Space"
          className={classes.destination__background}
        />
      </picture>

      <div className={classes.destination__sub}>
        <span className={classes["destination__sub--num"]}>01</span>
        <span className={classes["destination__sub--title"]}>
          pick your destination
        </span>
      </div>

      <RenderDest classes={classes} currPlanet={currPlanet}>
        <DestinationList
          classes={classes}
          currPlanet={currPlanet}
          setPlanet={setPlanet}
        />
      </RenderDest>
    </RouteFade>
  );
};

export default Destination;
