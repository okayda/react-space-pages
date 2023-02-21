import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { TechData } from "./TechData";
import { ImgFade, ContentFade } from "../../components/animation/Transitions";

const contentImage = TechData.map((content) => {
  return (
    <picture key={content.id}>
      <source
        srcSet={require(`../../assets/technology/${content.urlTwo}`)}
        media="(min-width: 1100px)"
      />

      <ImgFade
        src={require(`../../assets/technology/${content.url}`)}
        alt={content.alt}
      />
    </picture>
  );
});

const contentDescription = TechData.map((content) => {
  return (
    <ContentFade key={content.id}>
      <span>the terminology</span>
      <h2>{content.title}</h2>
      <p>{content.information}</p>
    </ContentFade>
  );
});

const RenderData = function (retrieve) {
  let element;
  const params = useParams();
  const techId = params.techId;
  const targetData = TechData.map((el) => el.id).indexOf(techId);

  if (retrieve === "Image") element = contentImage[targetData];
  if (retrieve === "Description") element = contentDescription[targetData];

  return (
    <AnimatePresence mode="wait" initial={true}>
      {element}
    </AnimatePresence>
  );
};

export default RenderData;
