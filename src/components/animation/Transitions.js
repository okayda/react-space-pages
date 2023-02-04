import { motion } from "framer-motion";
import AddTrans from "./AddTrans";

import {
  menuAnimation,
  listStaggerAnimation,
  linkStaggerAnimation,
  scaleAnimation,
  fadeAnimation,
  slideAnimation,
} from "./Animation";

// Menu Transition
// ==================================
export const MenuSlide = function ({ children, className }) {
  return (
    <motion.div className={className} {...AddTrans(menuAnimation)}>
      {children}
    </motion.div>
  );
};

export const ListStagger = function ({ children }) {
  return (
    <motion.ul
      {...AddTrans(listStaggerAnimation)}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.ul>
  );
};

export const LinkStagger = function ({ children, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      variants={linkStaggerAnimation}
    >
      {children}
    </motion.a>
  );
};
// ==================================

export const ImgScale = function ({ src, alt }) {
  return <motion.img {...AddTrans(scaleAnimation)} src={src} alt={alt} />;
};

export const ImgFade = function ({ src, alt }) {
  return <motion.img {...AddTrans(fadeAnimation)} src={src} alt={alt} />;
};

export const ContentFade = function ({ children }) {
  return <motion.div {...AddTrans(fadeAnimation)}>{children}</motion.div>;
};

export const ContentSlide = function ({ children }) {
  return <motion.div {...AddTrans(slideAnimation)}>{children}</motion.div>;
};
