import { CrewImgs } from "../CrewData";

const CrewBullets = function ({ classes, change, content }) {
  return CrewImgs.map((el, i) => {
    return (
      <button
        key={el.id}
        onClick={change.bind(null, i)}
        className={i === content ? classes["crew__buttons--active"] : ""}
      >
        &nbsp;
      </button>
    );
  });
};

export default CrewBullets;
