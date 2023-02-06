import { motion } from "framer-motion";
import Applied from "./Applied";

import { scaleAnimation, fadeAnimation, slideAnimation } from "./Animation";

export const ImgScale = function ({ src, alt }) {
  return <motion.img {...Applied(scaleAnimation)} src={src} alt={alt} />;
};

export const ImgFade = function ({ src, alt }) {
  return <motion.img {...Applied(fadeAnimation)} src={src} alt={alt} />;
};

export const ContentFade = function ({ children }) {
  return <motion.div {...Applied(fadeAnimation)}>{children}</motion.div>;
};

export const ContentSlide = function ({ children }) {
  return <motion.div {...Applied(slideAnimation)}>{children}</motion.div>;
};
