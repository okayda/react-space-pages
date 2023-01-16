import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MoonInformation } from "./PlanetsContent/Moon";
import { MarsInformation } from "./PlanetsContent/Mars";
import { EuropaInformation } from "./PlanetsContent/Europa";
import { TitanInformation } from "./PlanetsContent/Titan";

const PlanetInformationRoute = function () {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Redirect to="/moon" />
        </Route>

        <Route path="/moon">
          <MoonInformation />
        </Route>

        <Route path="/mars">
          <MarsInformation />
        </Route>

        <Route path="/europa">
          <EuropaInformation />
        </Route>

        <Route path="/titan">
          <TitanInformation />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default PlanetInformationRoute;
