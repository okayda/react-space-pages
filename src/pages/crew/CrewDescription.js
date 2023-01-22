import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation } from "../../components/animation/Animation";

import { CrewData } from "./CrewData";

const CrewDescription = function ({ classes, currentContent }) {
  const addTrans = function (animation) {
    return {
      variants: animation,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
    };
  };

  const contents = CrewData.map((el) => {
    return (
      <motion.div
        key={el.id}
        className={classes.crew__description}
        {...addTrans(fadeAnimation)}
      >
        <span>{el.position}</span>
        <h2>{el.name}</h2>
        <p>{el.information}</p>
      </motion.div>
    );
  });

  return (
    <AnimatePresence mode="wait" initial={true}>
      {contents[currentContent]}
    </AnimatePresence>
  );
};

export default CrewDescription;
