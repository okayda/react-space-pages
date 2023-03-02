import { DestData } from "./DestData";
import { AnimatePresence } from "framer-motion";

import DestinationImage from "./Contents/DestinationImage";
import DestinationInformation from "./Contents/DestinationInformation";
import DestinationDescription from "./Contents/DestinationDescription";

const contentImage = DestinationImage;
const contentDescription = DestinationDescription;
const contentInformation = DestinationInformation;

const RenderDest = function ({ children, currPlanet, classes }) {
  const targetData = DestData.map((el) => el.id).indexOf(currPlanet);

  const image = contentImage[targetData];
  const description = contentDescription[targetData];
  const information = contentInformation[targetData];

  return (
    <div className={classes.destination__content}>
      <div className={classes["destination__img-container"]}>
        <AnimatePresence mode="wait" initial={true}>
          {image}
        </AnimatePresence>
      </div>

      <div className={classes["destination__sub-content"]}>
        <nav>{children}</nav>

        <AnimatePresence mode="wait" initial={true}>
          {description}
        </AnimatePresence>

        <div className={classes.destination__information}>
          <AnimatePresence mode="wait" initial={true}>
            {information}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RenderDest;
