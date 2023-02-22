import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { DestData } from "./DestData";

import {
  ImgScale,
  ContentSlide,
  ContentFade,
} from "../../components/animation/Transitions";

const contentImage = DestData.map((content) => {
  const image = content.image;

  return (
    <ImgScale
      key={content.id}
      src={require(`../../assets/destination/${image.url}`)}
      alt={image.alt}
    />
  );
});

const contentDescription = DestData.map((content) => {
  return (
    <ContentSlide key={content.id}>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </ContentSlide>
  );
});

const contentInformation = DestData.map((content) => {
  const list = content.information.map((list) => {
    return (
      <li key={list.id}>
        <span>{list.point}</span>
        <h3>{list.calculation}</h3>
      </li>
    );
  });

  return (
    <ContentFade key={content.id}>
      <ul>{list}</ul>
    </ContentFade>
  );
});

const RenderData = function (retrieve) {
  let element;
  const params = useParams();
  const destId = params.destId;
  const targetData = DestData.map((el) => el.id).indexOf(destId);

  if (retrieve === "Image") element = contentImage[targetData];
  if (retrieve === "Description") element = contentDescription[targetData];
  if (retrieve === "Information") element = contentInformation[targetData];

  return (
    <AnimatePresence mode="wait" initial={true}>
      {element}
    </AnimatePresence>
  );
};

export default RenderData;
