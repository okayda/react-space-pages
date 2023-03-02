import { ContentFade } from "../../../components/animation/Transitions";
import { CrewInfo } from "../CrewData";
import { AnimatePresence } from "framer-motion";

const content = CrewInfo.map((el) => {
  return (
    <ContentFade key={el.id}>
      <span>{el.position}</span>
      <h2>{el.name}</h2>
      <p>{el.information}</p>
    </ContentFade>
  );
});

const CrewDescription = function ({ contentNum }) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      {content[contentNum]}
    </AnimatePresence>
  );
};

export default CrewDescription;
