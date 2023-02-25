import { useState } from "react";

import classes from "./styles/Destination.module.scss";

import mobileBG from "../assets/destination/background-destination-mobile.jpg";
import tabletBG from "../assets/destination/background-destination-tablet.jpg";
import desktopBG from "../assets/destination/background-destination-desktop.jpg";

import RenderDest from "./destination/RenderDest";
import DestinationList from "./destination/Contents/DestinationList";
import { RouteFade } from "../components/animation/Transitions";

const Destination = function () {
  const [currPlanet, setPlanet] = useState("moon");

  return (
    <RouteFade className={classes.destination}>
      <picture>
        <source srcSet={desktopBG} media="(min-width: 768px)" />
        <source srcSet={tabletBG} media="(min-width: 400px)" />

        <img
          src={mobileBG}
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

      <RenderDest classes={classes} planet={currPlanet}>
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
