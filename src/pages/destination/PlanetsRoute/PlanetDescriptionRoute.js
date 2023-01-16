import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MoonDescription } from "./PlanetsContent/Moon";
import { MarsDescription } from "./PlanetsContent/Mars";
import { EuropaDescription } from "./PlanetsContent/Europa";
import { TitanDescription } from "./PlanetsContent/Titan";

const PlanetDescriptionRoute = function () {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Redirect to="/moon" />
        </Route>

        <Route path="/moon">
          <MoonDescription />
        </Route>

        <Route path="/mars">
          <MarsDescription />
        </Route>

        <Route path="/europa">
          <EuropaDescription />
        </Route>

        <Route path="/titan">
          <TitanDescription />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default PlanetDescriptionRoute;
