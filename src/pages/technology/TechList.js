import { NavLink } from "react-router-dom";

const TechList = function ({ classes }) {
  return (
    <ul className={classes.technology__list}>
      <li>
        <NavLink to="/launch">1</NavLink>
      </li>

      <li>
        <NavLink to="/spaceport" className={classes.active}>
          2
        </NavLink>
      </li>

      <li>
        <NavLink to="/spacecapsule">3</NavLink>
      </li>
    </ul>
  );
};

export default TechList;
