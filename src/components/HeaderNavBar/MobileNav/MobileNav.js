import { NavLink } from "react-router-dom";
import { AnimatePresence, useCycle } from "framer-motion";
import classes from "./MobileNav.module.scss";

import { linksData } from "../HeaderData";

import burgerIcon from "../../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../../assets/shared/icon-close.svg";

// T = Transition
import * as T from "../../animation/HeaderNavAnimate/HeaderNavTransition";

const links = linksData.map(({ name, to, id }) => (
  <T.NavListStagger key={id} isMobile={true}>
    <NavLink to={to}>
      <span>0{id}</span>
      {name}
    </NavLink>
  </T.NavListStagger>
));

const MobileNav = function () {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className={classes.nav}>
      <button className={classes.nav__burger}>
        <img src={burgerIcon} alt="" onClick={cycleOpen} />
      </button>

      <AnimatePresence>
        {open && (
          <T.NavSlide className={classes["nav__list-wrapper"]} isMobile={true}>
            <button className={classes.nav__close}>
              <img src={closeIcon} alt="" onClick={cycleOpen} />
            </button>

            <T.NavMainListStagger isMobile={true}>{links}</T.NavMainListStagger>
          </T.NavSlide>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
