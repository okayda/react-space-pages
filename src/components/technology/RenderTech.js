import { TechData } from "./TechData";
import { AnimatePresence } from "framer-motion";

import TechImage from "./Contents/TechImage";
import TechDescription from "./Contents/TechDescription";

const contentImage = TechImage;
const contentDescription = TechDescription;

const RenderTech = function ({ children, currTech, classes }) {
  const targetData = TechData.map((el) => el.id).indexOf(currTech);

  const image = contentImage[targetData];
  const description = contentDescription[targetData];

  return (
    <div className={classes.technology__content}>
      <div className={classes.technology__images}>
        <AnimatePresence mode="wait" initial={false}>
          {image}
        </AnimatePresence>
      </div>

      <ul className={classes.technology__list}>{children}</ul>

      <div className={classes.technology__information}>
        <AnimatePresence mode="wait" initial={false}>
          {description}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RenderTech;
