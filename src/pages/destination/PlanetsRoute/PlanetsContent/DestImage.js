import { ImgScale } from "../../../../components/animation/Transitions";

import { DestImgs } from "../../DestData";
import { DestContentExtract } from "../../DestHelper";
const DestImage = function () {
  const { url, alt } = DestContentExtract(DestImgs);

  return (
    <ImgScale
      src={require(`../../../../assets/destination/${url}`)}
      alt={alt}
    />
  );
};

export default DestImage;
