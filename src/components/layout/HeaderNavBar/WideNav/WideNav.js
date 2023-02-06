import classes from "./WideNav.module.scss";

import {
  NavSlide,
  NavListStagger,
  NavLinkStagger,
} from "../../../animation/WideMenuAnimate/WideMenuTransition";

const linkArr = [
  { name: "Home", to: "#", id: 0 },
  { name: "Destination", to: "#", id: 1 },
  { name: "Crew", to: "#", id: 2 },
  { name: "Technology", to: "#", id: 3 },
];

const links = linkArr.map(({ name, to, id }) => (
  <NavLinkStagger key={id} href={to}>
    <span>0{id}</span>
    {name}
  </NavLinkStagger>
));

const WideNav = function () {
  return (
    <NavSlide className={classes.nav}>
      <nav>
        <NavListStagger>{links}</NavListStagger>
      </nav>
    </NavSlide>
  );
};

export default WideNav;
