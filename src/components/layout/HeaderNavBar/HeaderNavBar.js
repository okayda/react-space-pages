import classes from "./HeaderNavBar.module.scss";
import Logo from "../../../assets/shared/logo.svg";
import MobileNav from "./MobileNav/MobileNav";

const HeaderNavBar = function () {
  return (
    <div className={classes.header__wrapper}>
      <a href="#" className={classes.header__logo}>
        <img src={Logo} alt="Logo" />
      </a>

      {/* their renderation will be determine through scss modules itself */}
      <MobileNav />
    </div>
  );
};

export default HeaderNavBar;
