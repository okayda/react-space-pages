import { TechData } from "../TechData";

const TechDescripRoute = function () {
  const content = TechData[0];

  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.information}</p>
    </>
  );
};

export default TechDescripRoute;
