import { TechData } from "../TechData";

const TechList = function ({ classes, currTech, setTech }) {
  const btnHandler = function (str) {
    if (currTech === str) return;

    setTech(str);
  };

  return (
    <ul className={classes.technology__list}>
      {TechData.map((data, i) => (
        <li key={data.id}>
          <button
            className={data.id === currTech ? classes["active"] : ""}
            onClick={btnHandler.bind(null, data.id)}
          >
            {i + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TechList;
