import { motion } from "framer-motion";

import classes from "./pagesStyles/Destination.module.scss";

import background from "../assets/destination/background-destination-mobile.jpg";
import imgMoon from "../assets/destination/image-moon.webp";

const Destination = function () {
  const linksList = [
    <a href="#" className={classes.active}>
      moon
    </a>,
    <a href="#">mars</a>,
    <a href="#">europa</a>,
    <a href="#">titan</a>,
  ];

  return (
    <div className={classes.destination}>
      <img
        src={background}
        alt="Space"
        className={classes.destination__background}
      />

      <div className={classes.destination__content}>
        <div className={classes.destination__sub}>
          <span className={classes["destination__sub--num"]}>01</span>
          <span className={classes["destination__sub--title"]}>
            pick your destination
          </span>
        </div>

        <img src={imgMoon} alt="" className={classes.destination__img} />

        <nav>
          <ul className={classes["destination__link-list"]}>
            {linksList.map((link, i) => (
              <motion.li
                key={i}
                initial={{
                  opacity: 0,
                  translateX: -50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: i * 0.25 }}
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </nav>

        <h2>moon</h2>

        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>

      <div className={classes.destination__information}>
        <ul className={classes["destination__list-travel"]}>
          <li>
            <span>avg. distance</span>
            <h3>384,400 km</h3>
          </li>
          <li>
            <span>est. travel time</span>
            <h3>3 days</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Destination;
