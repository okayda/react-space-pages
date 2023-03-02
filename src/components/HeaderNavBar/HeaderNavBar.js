import { Link } from "react-router-dom";

import classes from "./HeaderNavBar.module.scss";
import Logo from "../../assets/shared/logo.svg";
import MobileNav from "./MobileNav/MobileNav";
import WideNav from "./WideNav/WideNav";

const HeaderNavBar = function () {
  return (
    <div className={classes.header__wrapper}>
      <Link to="/" className={classes.header__logo}>
        <img src={Logo} alt="Logo" />
      </Link>

      {/* their display will be determine through scss modules itself */}
      <MobileNav />
      <WideNav />
    </div>
  );
};

export default HeaderNavBar;
