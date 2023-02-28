import { useState } from "react";

import classes from "./styles/Destination.module.scss";

import smallBG from "../assets/destination/background-destination-mobile.jpg";
import mediumBG from "../assets/destination/background-destination-tablet.jpg";
import largeBG from "../assets/destination/background-destination-desktop.jpg";

import planetsVideo from "../assets/video/space2.mp4";

import RenderDest from "./destination/RenderDest";
import DestinationList from "./destination/Contents/DestinationList";
import { RouteFade } from "../components/animation/Transitions";

const Destination = function () {
  const [currPlanet, setPlanet] = useState("moon");

  return (
    <RouteFade className={classes.destination}>
      <picture>
        <source srcSet={largeBG} media="(min-width: 768px)" />
        <source srcSet={mediumBG} media="(min-width: 400px)" />

        <img
          src={smallBG}
          alt="Space"
          className={classes.destination__background}
        />
      </picture>

      <video
        autoPlay
        loop
        muted
        playsInline
        className={classes.destination__video}
      >
        <source src={planetsVideo} type="video/mp4" />
      </video>

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
