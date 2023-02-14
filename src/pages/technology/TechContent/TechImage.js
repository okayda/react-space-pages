import { ImgFade } from "../../../components/animation/Transitions";

import { TechImgs } from "../TechData";
import { TechContentExtract } from "../TechHelper";

const TechImage = function () {
  const { url, urlTwo, alt } = TechContentExtract(TechImgs);

  return (
    <picture>
      <source
        srcSet={require(`../../../assets/technology/${urlTwo}`)}
        media="(min-width: 1100px)"
      />

      <ImgFade src={require(`../../../assets/technology/${url}`)} alt={alt} />
    </picture>
  );
};

export default TechImage;
