import { NavLink } from "react-router-dom";
import classes from "./WideNav.module.scss";
import { linksData } from "../HeaderData";

// T = Transition
import * as T from "../../animation/HeaderNavAnimate/HeaderNavTransition";

const links = linksData.map(({ name, to, id }) => (
  <T.NavListStagger key={id} isMobile={false}>
    <NavLink to={to}>{name}</NavLink>
  </T.NavListStagger>
));

const WideNav = function () {
  return (
    <T.NavSlide className={classes.nav} isMobile={false}>
      <nav>
        <T.NavMainListStagger isMobile={false}>{links}</T.NavMainListStagger>
      </nav>
    </T.NavSlide>
  );
};

export default WideNav;
