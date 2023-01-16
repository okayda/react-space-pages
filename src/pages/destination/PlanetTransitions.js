import { motion } from "framer-motion";

import { imgAnimation } from "../../components/animation/Animation";
import { contentAnimation } from "../../components/animation/Animation";
import { listAnimation } from "../../components/animation/Animation";

const addTrans = function (animation) {
  return {
    variants: animation,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
  };
};

export const ImageTrans = function ({ src, classes, alt }) {
  return (
    <motion.img
      src={src}
      className={classes.destination__img}
      alt={alt}
      {...addTrans(imgAnimation)}
    />
  );
};

export const ContentTrans = function (props) {
  return (
    <motion.div {...addTrans(contentAnimation)}>{props.children}</motion.div>
  );
};

export const ListTrans = function (props) {
  return <motion.li {...addTrans(listAnimation)}>{props.children}</motion.li>;
};
