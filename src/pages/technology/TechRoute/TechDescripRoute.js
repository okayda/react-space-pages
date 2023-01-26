import { useParams } from "react-router-dom";
import { TechData } from "../TechData";

const TechDescripRoute = function ({ contentNum }) {
  const params = useParams();
  const techId = params.techId;
  let num;

  if (techId === "launch") num = 0;
  if (techId === "spaceport") num = 2;
  if (techId === "spacecapsule") num = 1;

  const content = TechData[num];

  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.information}</p>
    </>
  );
};

export default TechDescripRoute;
