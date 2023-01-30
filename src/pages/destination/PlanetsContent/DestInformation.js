import { ContentFade } from "../../../components/animation/Transitions";

import { DestInfo } from "../DestData";
import { DestContentExtract } from "../DestHelper";

const DestInformation = function () {
  const { data } = DestContentExtract(DestInfo);

  const contents = data.map(({ point, calculation, id }) => {
    return (
      <li key={id}>
        <span>{point}</span>
        <h3>{calculation}</h3>
      </li>
    );
  });

  return (
    <ContentFade>
      <ul>{contents}</ul>
    </ContentFade>
  );
};

export default DestInformation;
