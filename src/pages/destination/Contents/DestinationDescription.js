import { DestData } from "../DestData";
import { ContentSlide } from "../../../components/animation/Transitions";

const DestinationDescription = DestData.map((content) => {
  return (
    <ContentSlide key={content.id}>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </ContentSlide>
  );
});

export default DestinationDescription;
