import classes from "./styles/Destination.module.scss";

import mobileBG from "../assets/destination/background-destination-mobile.jpg";
import tabletBG from "../assets/destination/background-destination-tablet.jpg";
import desktopBG from "../assets/destination/background-destination-desktop.jpg";

import DestinationList from "./destination/DestinationList";

import { DestRoute } from "./destination/DestHelper";
import DestImage from "./destination/PlanetsContent/DestImage";
import DestDescription from "./destination/PlanetsContent/DestDescription";
import DestInformation from "./destination/PlanetsContent/DestInformation";

const Destination = function () {
  return (
    <div className={classes.destination}>
      <picture>
        <source srcSet={tabletBG} media="(min-width: 660px)" />
        <source srcSet={desktopBG} media="(min-width: 1100px)" />

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

      <div className={classes.destination__content}>
        <div className={classes["destination__img-container"]}>
          <DestRoute>
            <DestImage />
          </DestRoute>
        </div>

        <div className={classes["destination__sub-content"]}>
          <nav>
            <DestinationList classes={classes} />
          </nav>

          <DestRoute>
            <DestDescription />
          </DestRoute>

          <div className={classes.destination__information}>
            <DestRoute>
              <DestInformation />
            </DestRoute>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
