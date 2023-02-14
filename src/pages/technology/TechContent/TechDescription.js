import { ContentFade } from "../../../components/animation/Transitions";

import { TechInfo } from "../TechData";
import { TechContentExtract } from "../TechHelper";

const TechDescription = function () {
  const { title, information } = TechContentExtract(TechInfo);

  return (
    <ContentFade>
      <span>the terminology</span>
      <h2>{title}</h2>
      <p>{information}</p>
    </ContentFade>
  );
};

export default TechDescription;
