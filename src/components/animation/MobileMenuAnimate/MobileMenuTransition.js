import { motion } from "framer-motion";

import Applied from "../Applied";
import {
  sideSlide,
  sideListStaggler,
  sideLinkStagger,
} from "./MobileMenuAnimation";

export const SideSlide = function ({ children, className }) {
  return (
    <motion.div className={className} {...Applied(sideSlide)}>
      {children}
    </motion.div>
  );
};

export const SideListStagger = function ({ children }) {
  return (
    <motion.ul {...Applied(sideListStaggler)} initial="closed" animate="open">
      {children}
    </motion.ul>
  );
};

export const SideLinkStagger = function ({ children, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      variants={sideLinkStagger}
    >
      {children}
    </motion.a>
  );
};
