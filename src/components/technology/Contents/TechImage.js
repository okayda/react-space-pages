import { TechData } from "../TechData";
import { ImgFade } from "../../../components/animation/Transitions";

const TechImage = TechData.map((content) => {
  return (
    <picture key={content.id}>
      <source
        srcSet={require(`../../../assets/technology/${content.urlTwo}`)}
        media="(min-width: 1100px)"
      />

      <ImgFade
        src={require(`../../../assets/technology/${content.url}`)}
        alt={content.alt}
      />
    </picture>
  );
});

export default TechImage;
