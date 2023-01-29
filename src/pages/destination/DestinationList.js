import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { linksAnimation } from "../../components/animation/Animation";

const DestinationList = function ({ classes }) {
  const links = [
    <NavLink to="/destination/moon" activeClassName={classes.active}>
      moon
    </NavLink>,

    <NavLink to="/destination/mars" activeClassName={classes.active}>
      mars
    </NavLink>,

    <NavLink to="/destination/europa" activeClassName={classes.active}>
      europa
    </NavLink>,

    <NavLink to="/destination/titan" activeClassName={classes.active}>
      titan
    </NavLink>,
  ];

  return (
    <>
      <ul className={classes["destination__link-list"]}>
        {
          <AnimatePresence mode="wait" initial={false}>
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
          </AnimatePresence>
        }
      </ul>
    </>
  );
};

export default DestinationList;
