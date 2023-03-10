import { motion } from "framer-motion";

import Applied from "../Applied";

// M = Mobile , W = Wide
import * as M from "./MobileMenuAnimation";
import * as W from "./WideMenuAnimation";

export const NavSlide = function ({ children, className, isMobile }) {
  return (
    <motion.div
      className={className}
      {...Applied(isMobile ? M.MobileSlide : W.WideSlide)}
    >
      {children}
    </motion.div>
  );
};

export const NavMainListStagger = function ({ children, isMobile }) {
  return (
    <motion.ul
      {...Applied(isMobile ? M.MobileListStagger : W.WideListStagger)}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.ul>
  );
};

export const NavListStagger = function ({ children, isMobile }) {
  return (
    <motion.li
      whileHover={{ scale: 1.14, rotate: -4 }}
      variants={isMobile ? M.MobileLinkStagger : W.WideLinkStagger}
    >
      {children}
    </motion.li>
  );
};
