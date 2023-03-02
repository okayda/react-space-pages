import { TechData } from "../TechData";
import { ContentFade } from "../../../components/animation/Transitions";

const TechDescription = TechData.map((content) => {
  return (
    <ContentFade key={content.id}>
      <span>the terminology</span>
      <h2>{content.title}</h2>
      <p>{content.information}</p>
    </ContentFade>
  );
});

export default TechDescription;
