import { useState } from "react";

import classes from "./styles/Crew.module.scss";

import background from "../assets/crew/background-crew-mobile.jpg";

import CrewImages from "./crew/CrewContent/CrewImages";
import CrewDescription from "./crew/CrewContent/CrewDescription";

const Crew = function () {
  const [content, setContent] = useState(0);

  const updateContent = function (index) {
    setContent(index);
  };

  return (
    <div className={classes.crew}>
      <img
        src={background}
        alt="Earth Surface"
        className={classes.crew__background}
      />

      <div className={classes.crew__sub}>
        <span className={classes["crew__sub--num"]}>02</span>
        <span className={classes["crew__sub--title"]}>meet your crew</span>
      </div>

      <CrewImages updateContent={updateContent} />

      <div className={classes.crew__content}>
        <CrewDescription contentNum={content} />
      </div>
    </div>
  );
};

export default Crew;
