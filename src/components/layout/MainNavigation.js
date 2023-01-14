import classes from "./MainNavigation.module.scss";

import Logo from "../../assets/shared/logo.svg";
import burgerIcon from "../../assets/shared/icon-hamburger.svg";

const MainNavigation = function () {
  return (
    <div className={classes.header__wrapper}>
      <a href="#" className={classes.header__logo}>
        <img src={Logo} alt="Logo" />
      </a>

      <nav>
        <button className={classes.header__burger}>
          <img src={burgerIcon} alt="" />
        </button>

        <ul className={classes.header__list}>
          <li>
            <a href="#">
              <span>00</span> Home
            </a>
          </li>

          <li>
            <a href="#">
              <span>01</span> Destination
            </a>
          </li>

          <li>
            <a href="#">
              <span>02</span> Crew
            </a>
          </li>

          <li>
            <a href="#">
              <span>03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
