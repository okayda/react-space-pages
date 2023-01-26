import { NavLink } from "react-router-dom";

const TechList = function ({ active }) {
  return (
    <>
      <li>
        <NavLink to="/technology/launch" activeClassName={active}>
          1
        </NavLink>
      </li>

      <li>
        <NavLink to="/technology/spaceport" activeClassName={active}>
          2
        </NavLink>
      </li>

      <li>
        <NavLink to="/technology/spacecapsule" activeClassName={active}>
          3
        </NavLink>
      </li>
    </>
  );
};

export default TechList;
