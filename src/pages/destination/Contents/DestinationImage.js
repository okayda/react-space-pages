import { DestData } from "../DestData";
import { ImgScale } from "../../../components/animation/Transitions";

const DestinationImage = DestData.map((content) => {
  const image = content.image;

  return (
    <ImgScale
      key={content.id}
      src={require(`../../../assets/destination/${image.url}`)}
      alt={image.alt}
    />
  );
});

export default DestinationImage;
