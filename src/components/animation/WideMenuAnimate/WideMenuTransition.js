import { motion } from "framer-motion";

import Applied from "../Applied";
import { navSlide, navListStagger, navLinkStagger } from "./WideMenuAnimation";

export const NavSlide = function ({ children, className }) {
  return (
    <motion.div className={className} {...Applied(navSlide)}>
      {children}
    </motion.div>
  );
};

export const NavListStagger = function ({ children }) {
  return (
    <motion.ul {...Applied(navListStagger)} initial="closed" animate="open">
      {children}
    </motion.ul>
  );
};

export const NavLinkStagger = function ({ children, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      variants={navLinkStagger}
    >
      {children}
    </motion.a>
  );
};
