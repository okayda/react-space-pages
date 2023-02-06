import { motion } from "framer-motion";

import Applied from "../Applied";

// M = Mobile , W = Wide
import * as M from "./MobileMenuAnimation";
import * as W from "./WideMenuAnimation";

export const NavSlide = function ({ children, className, isMobile }) {
  return (
    <motion.div
      className={className}
      {...Applied(isMobile ? M.mobileSlide : W.wideSlide)}
    >
      {children}
    </motion.div>
  );
};

export const NavListStagger = function ({ children, isMobile }) {
  return (
    <motion.ul
      {...Applied(isMobile ? M.mobileListStagger : W.wideListStagger)}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.ul>
  );
};

export const NavLinkStagger = function ({ children, href, isMobile }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      variants={isMobile ? M.mobileLinkStagger : W.wideLinkStagger}
    >
      {children}
    </motion.a>
  );
};
