import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { linksAnimation } from "../../components/animation/Animation";

const DestinationList = function ({ classes }) {
  const links = [
    <NavLink to="/destination/moon">moon</NavLink>,

    <NavLink to="/destination/mars">mars</NavLink>,

    <NavLink to="/destination/europa">europa</NavLink>,

    <NavLink to="/destination/titan">titan</NavLink>,
  ];

  return (
    <>
      <ul className={classes["destination__link-list"]}>
        {links.map((link, i) => (
          <motion.li
            key={i}
            variants={linksAnimation(i)}
            initial="hidden"
            animate="visible"
          >
            {link}
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default DestinationList;
