import { motion } from "framer-motion";
import Applied from "./Applied";

import { Scale, Fade, Slide, Diagonal, PageFade } from "./Animation";

export const RouteFade = function ({ className, children }) {
  return (
    <motion.div {...Applied(PageFade)} className={className}>
      {children}
    </motion.div>
  );
};

export const ImgScale = function ({ src, alt }) {
  return <motion.img {...Applied(Scale)} src={src} alt={alt} />;
};

export const ImgFade = function ({ src, alt }) {
  return <motion.img {...Applied(Fade)} src={src} alt={alt} />;
};

export const ContentFade = function ({ children }) {
  return <motion.div {...Applied(Fade)}>{children}</motion.div>;
};

export const ContentSlide = function ({ children }) {
  return <motion.div {...Applied(Slide)}>{children}</motion.div>;
};

export const DiagonalList = function ({ children, delay }) {
  return <motion.li {...Applied(Diagonal(delay))}>{children}</motion.li>;
};
