import classes from "./WideNav.module.scss";

const WideNav = function () {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Destination</a>
        </li>
        <li>
          <a href="#">Crew</a>
        </li>
        <li>
          <a href="#">Technology</a>
        </li>
      </ul>
    </nav>
  );
};

export default WideNav;
