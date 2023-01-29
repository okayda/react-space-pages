import classes from "./styles/Destination.module.scss";
import background from "../assets/destination/background-destination-mobile.jpg";

import DestinationList from "./destination/DestinationList";

import PlanetDescriptionRoute from "./destination/PlanetsRoute/PlanetDescriptionRoute";
import PlanetInformationRoute from "./destination/PlanetsRoute/PlanetInformationRoute";

import { DestRoute } from "./destination/DestHelper";
import DestImage from "./destination/PlanetsRoute/PlanetsContent/DestImage";

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

        <div className={classes["destination__img-container"]}>
          <DestRoute>
            <DestImage />
          </DestRoute>
        </div>

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
