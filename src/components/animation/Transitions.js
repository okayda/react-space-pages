import { motion } from "framer-motion";
import AddTrans from "./AddTrans";

import { fadeAnimation } from "./Animation";

export const ImgFade = function ({ src, alt }) {
  return <motion.img {...AddTrans(fadeAnimation)} src={src} alt={alt} />;
};

export const ContentFade = function ({ children }) {
  return <motion.div {...AddTrans(fadeAnimation)}>{children}</motion.div>;
};
