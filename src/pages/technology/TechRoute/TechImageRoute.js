import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ImgFade } from "../../../components/animation/Transitions";

import img1 from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import img2 from "../../../assets/technology/image-spaceport-landscape.jpg";
import img3 from "../../../assets/technology/image-space-capsule-landscape.jpg";

const TechImageRoute = function () {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route path="/launch">
            <ImgFade src={img1} alt="Launch Vehicle" />
          </Route>

          <Route path="/spaceport">
            <ImgFade src={img2} alt="Spaceport" />
          </Route>

          <Route path="/spacecapsule">
            <ImgFade src={img3} alt="Space Capsule" />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default TechImageRoute;
