import { DestData } from "../DestData";
import { DiagonalList } from "../../../components/animation/Transitions";

const DestinationList = function ({ classes, currPlanet, setPlanet }) {
  const btnHandler = function (str) {
    if (currPlanet === str) return;

    setPlanet(str);
  };

  return (
    <ul className={classes["destination__link-list"]}>
      {DestData.map((data, i) => (
        <DiagonalList delay={i} key={i}>
          <button
            className={data.id === currPlanet ? classes["active"] : ""}
            onClick={btnHandler.bind(null, data.id)}
          >
            {data.id}
          </button>
        </DiagonalList>
      ))}
    </ul>
  );
};

export default DestinationList;
