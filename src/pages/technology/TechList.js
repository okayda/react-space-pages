import { NavLink } from "react-router-dom";

const TechList = function ({ active }) {
  return (
    <>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? active : "")}
          to="/technology/t1"
        >
          1
        </NavLink>
      </li>

      <li>
        <NavLink
          className={(navData) => (navData.isActive ? active : "")}
          to="/technology/t2"
        >
          2
        </NavLink>
      </li>

      <li>
        <NavLink
          className={(navData) => (navData.isActive ? active : "")}
          to="/technology/t3"
        >
          3
        </NavLink>
      </li>
    </>
  );
};

export default TechList;
