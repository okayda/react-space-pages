import { ImgFade } from "../../../components/animation/Transitions";

import { TechImgs } from "../TechData";
import { TechContentExtract } from "../TechHelper";

const TechImage = function () {
  const { url, alt } = TechContentExtract(TechImgs);

  return (
    <ImgFade src={require(`../../../assets/technology/${url}`)} alt={alt} />
  );
};

export default TechImage;
