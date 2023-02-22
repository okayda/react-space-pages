import classes from "./styles/Destination.module.scss";

import mobileBG from "../assets/destination/background-destination-mobile.jpg";
import tabletBG from "../assets/destination/background-destination-tablet.jpg";
import desktopBG from "../assets/destination/background-destination-desktop.jpg";

import RenderData from "./destination/RenderData";
import DestinationList from "./destination/DestinationList";

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
          {RenderData("Image")}
        </div>

        <div className={classes["destination__sub-content"]}>
          <nav>
            <DestinationList classes={classes} />
          </nav>

          {RenderData("Description")}

          <div className={classes.destination__information}>
            {RenderData("Information")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
