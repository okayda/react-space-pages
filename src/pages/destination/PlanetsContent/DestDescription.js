import { ContentSlide } from "../../../components/animation/Transitions";

import { DestDesc } from "../DestData";
import { DestContentExtract } from "../DestHelper";

const DestDescription = function () {
  const { title, description } = DestContentExtract(DestDesc);

  return (
    <ContentSlide>
      <h2>{title}</h2>
      <p>{description}</p>
    </ContentSlide>
  );
};

export default DestDescription;
