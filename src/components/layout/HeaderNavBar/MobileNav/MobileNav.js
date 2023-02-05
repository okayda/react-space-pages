import { AnimatePresence, useCycle } from "framer-motion";
import classes from "./MobileNav.module.scss";

import burgerIcon from "../../../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../../../assets/shared/icon-close.svg";

import {
  MenuSlide,
  ListStagger,
  LinkStagger,
} from "../../../animation/Transitions";

const linkArr = [
  { name: "Home", to: "#", id: 0 },
  { name: "Destination", to: "#", id: 1 },
  { name: "Crew", to: "#", id: 2 },
  { name: "Technology", to: "#", id: 3 },
];

const links = linkArr.map(({ name, to, id }) => (
  <LinkStagger key={id} href={to}>
    <span>0{id}</span>
    {name}
  </LinkStagger>
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
          <MenuSlide className={classes["nav__list-wrapper"]}>
            {/* <ul> */}
            <button className={classes.nav__close}>
              <img src={closeIcon} alt="" onClick={cycleOpen} />
            </button>
            <ListStagger>
              {/* <li> */}
              {links}
            </ListStagger>
          </MenuSlide>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
