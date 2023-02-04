import { AnimatePresence, useCycle } from "framer-motion";

import classes from "./HeaderNavBar.module.scss";

import Logo from "../../../assets/shared/logo.svg";

import burgerIcon from "../../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../../assets/shared/icon-close.svg";

import {
  MenuSlide,
  ListStagger,
  LinkStagger,
} from "../../animation/Transitions";

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

const HeaderNavBar = function () {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className={classes.header__wrapper}>
      <a href="#" className={classes.header__logo}>
        <img src={Logo} alt="Logo" />
      </a>

      <nav>
        <button
          className={`${classes.header__burger} ${
            open ? classes["header__burger-active"] : ""
          }`}
        >
          <img src={open ? closeIcon : burgerIcon} alt="" onClick={cycleOpen} />
        </button>

        <AnimatePresence>
          {open && (
            <MenuSlide className={classes["header__list-container"]}>
              <ListStagger>{links}</ListStagger>
            </MenuSlide>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default HeaderNavBar;
