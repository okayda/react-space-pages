import { Route, Redirect, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { ImageTrans } from "../PlanetTransitions";

import imgMoon from "../../../assets/destination/image-moon.webp";
import imgMars from "../../../assets/destination/image-mars.webp";
import imgEuropa from "../../../assets/destination/image-europa.webp";
import imgTitan from "../../../assets/destination/image-titan.webp";

const PlanetImageRoute = function ({ classes }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Redirect to="/moon" />
        </Route>

        <Route path="/moon">
          <ImageTrans src={imgMoon} classes={classes} alt="Moon" />
        </Route>

        <Route path="/mars">
          <ImageTrans src={imgMars} classes={classes} alt="Mars" />
        </Route>

        <Route path="/europa">
          <ImageTrans src={imgEuropa} classes={classes} alt="Europa" />
        </Route>

        <Route path="/titan">
          <ImageTrans src={imgTitan} classes={classes} alt="Titan" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default PlanetImageRoute;
