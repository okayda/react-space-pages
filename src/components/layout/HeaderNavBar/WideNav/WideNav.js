import classes from "./WideNav.module.scss";

// T = Transition
import * as T from "../../../animation/HeaderNavAnimate/HeaderNavTransition";

const linkArr = [
  { name: "Home", to: "#", id: 0 },
  { name: "Destination", to: "#", id: 1 },
  { name: "Crew", to: "#", id: 2 },
  { name: "Technology", to: "#", id: 3 },
];

const links = linkArr.map(({ name, to, id }) => (
  <T.NavLinkStagger key={id} href={to} isMobile={false}>
    <span>0{id}</span>
    {name}
  </T.NavLinkStagger>
));

const WideNav = function () {
  return (
    <T.NavSlide className={classes.nav} isMobile={false}>
      <nav>
        <T.NavListStagger isMobile={false}>{links}</T.NavListStagger>
      </nav>
    </T.NavSlide>
  );
};

export default WideNav;
