import { useState } from "react";
import classes from "./pagesStyles/Crew.module.scss";

import "swiper/css";
import "swiper/css/pagination";

import background from "../assets/crew/background-crew-mobile.jpg";

import CrewSwiper from "./crew/crewSwiper/CrewSwiper";
import CrewDescription from "./crew/CrewDescription";

const Crew = function () {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <div className={classes.crew}>
      <img
        src={background}
        alt="Earth Surface"
        className={classes.crew__background}
      />

      <div className={classes.crew__content}>
        <div className={classes.crew__sub}>
          <span className={classes["crew__sub--num"]}>02</span>
          <span className={classes["crew__sub--title"]}>meet your crew</span>
        </div>

        <CrewSwiper setActiveContent={setActiveContent} />

        <CrewDescription classes={classes} currentContent={activeContent} />
      </div>
    </div>
  );
};

export default Crew;
