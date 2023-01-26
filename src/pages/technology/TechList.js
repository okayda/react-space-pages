import { NavLink } from "react-router-dom";

const TechList = function ({ active }) {
  return (
    <>
      <li>
        <NavLink to="/launch" activeClassName={active}>
          1
        </NavLink>
      </li>

      <li>
        <NavLink to="/spaceport" activeClassName={active}>
          2
        </NavLink>
      </li>

      <li>
        <NavLink to="/spacecapsule" activeClassName={active}>
          3
        </NavLink>
      </li>
    </>
  );
};

export default TechList;
