import classes from "./styles/Destination.module.scss";
import background from "../assets/destination/background-destination-mobile.jpg";

import DestinationList from "./destination/DestinationList";

import { DestRoute } from "./destination/DestHelper";
import DestImage from "./destination/PlanetsContent/DestImage";
import DestDescription from "./destination/PlanetsContent/DestDescription";
import DestInformation from "./destination/PlanetsContent/DestInformation";

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

        <DestRoute>
          <DestDescription />
        </DestRoute>
      </div>

      <div className={classes.destination__information}>
        <DestRoute>
          <DestInformation />
        </DestRoute>
      </div>
    </div>
  );
};

export default Destination;
