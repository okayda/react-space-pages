import classes from "./pagesStyles/Destination.module.scss";
import { motion } from "framer-motion";
import background from "../assets/destination/background-destination-mobile.jpg";
import imgMoon from "../assets/destination/image-moon.webp";

import DestinationList from "./destination/DestinationList";

import PlanetImageRoute from "./destination/PlanetsRoute/PlanetImageRoute";
import PlanetDescriptionRoute from "./destination/PlanetsRoute/PlanetDescriptionRoute";
import PlanetInformationRoute from "./destination/PlanetsRoute/PlanetInformationRoute";

const Destination = function () {
  return (
    <div className={classes.destination}>
      <img
        src={background}
        alt="Space"
        className={classes.destination__background}
      />

      <div className={classes.destination__content}>
        <div className={classes.destination__sub}>
          <span className={classes["destination__sub--num"]}>01</span>
          <span className={classes["destination__sub--title"]}>
            pick your destination
          </span>
        </div>

        <PlanetImageRoute classes={classes} />

        <nav>
          <DestinationList classes={classes} />
        </nav>

        <PlanetDescriptionRoute />
      </div>

      <div className={classes.destination__information}>
        <ul className={classes["destination__list-travel"]}>
          <PlanetInformationRoute />
        </ul>
      </div>
    </div>
  );
};

export default Destination;
