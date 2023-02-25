import { DestData } from "../DestData";
import { ContentFade } from "../../../components/animation/Transitions";

const DestinationInformation = DestData.map((content) => {
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

export default DestinationInformation;
