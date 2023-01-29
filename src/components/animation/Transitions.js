import { motion } from "framer-motion";
import AddTrans from "./AddTrans";

import { scaleAnimation } from "./Animation";
import { fadeAnimation } from "./Animation";

export const ImgSlide = function ({ src, alt }) {
  return <motion.img {...AddTrans(scaleAnimation)} src={src} alt={alt} />;
};

export const ImgFade = function ({ src, alt }) {
  return <motion.img {...AddTrans(fadeAnimation)} src={src} alt={alt} />;
};

export const ContentFade = function ({ children }) {
  return <motion.div {...AddTrans(fadeAnimation)}>{children}</motion.div>;
};
