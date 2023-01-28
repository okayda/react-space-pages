import { Route, Switch, useLocation, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const TechRoute = function ({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Switch location={location} key={location.pathname}>
        <Route path="/technology/:techId" exact>
          {children}
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export const TechContentExtract = function (contentArr) {
  const params = useParams();
  const techId = params.techId;
  const [content] = contentArr.filter((obj) => obj.id === techId);

  return content;
};
