import { AnimatePresence, useCycle } from "framer-motion";
import classes from "./MobileNav.module.scss";

import burgerIcon from "../../../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../../../assets/shared/icon-close.svg";

// T = Transition
import * as T from "../../../animation/HeaderNavAnimate/HeaderNavTransition";

const linkArr = [
  { name: "Home", to: "#", id: 0 },
  { name: "Destination", to: "#", id: 1 },
  { name: "Crew", to: "#", id: 2 },
  { name: "Technology", to: "#", id: 3 },
];

const links = linkArr.map(({ name, to, id }) => (
  <T.NavLinkStagger key={id} href={to} isMobile={true}>
    <span>0{id}</span>
    {name}
  </T.NavLinkStagger>
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

            <T.NavListStagger isMobile={true}>{links}</T.NavListStagger>
          </T.NavSlide>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
