import { NavLink } from "react-router-dom";

const TechList = function ({ active }) {
  return (
    <>
      <li>
        <NavLink to="/technology/t1" activeClassName={active}>
          1
        </NavLink>
      </li>

      <li>
        <NavLink to="/technology/t2" activeClassName={active}>
          2
        </NavLink>
      </li>

      <li>
        <NavLink to="/technology/t3" activeClassName={active}>
          3
        </NavLink>
      </li>
    </>
  );
};

export default TechList;
