import { CrewData } from "./CrewData";

const CrewDescription = function ({ classes, currentContent }) {
  const dataObj = CrewData[currentContent];

  return (
    <div className={classes.crew__description}>
      <span>{dataObj.position}</span>
      <h2>{dataObj.name}</h2>
      <p>{dataObj.information}</p>
    </div>
  );
};

export default CrewDescription;
