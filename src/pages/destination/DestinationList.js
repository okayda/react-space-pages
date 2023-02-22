import { NavLink } from "react-router-dom";
import { DiagonalList } from "../../components/animation/Transitions";

const DestinationList = function ({ classes }) {
  const links = [
    <NavLink to="/destination/moon">moon</NavLink>,

    <NavLink to="/destination/mars">mars</NavLink>,

    <NavLink to="/destination/europa">europa</NavLink>,

    <NavLink to="/destination/titan">titan</NavLink>,
  ];

  return (
    <ul className={classes["destination__link-list"]}>
      {links.map((link, i) => (
        <DiagonalList delay={i} key={i}>
          {link}
        </DiagonalList>
      ))}
    </ul>
  );
};

export default DestinationList;
