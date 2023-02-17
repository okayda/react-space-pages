import { useState } from "react";

import classes from "./styles/Crew.module.scss";

import background from "../assets/crew/background-crew-mobile.jpg";

import CrewImages from "./crew/CrewContent/CrewImages";
import CrewBullets from "./crew/CrewContent/CrewBullets";
import CrewDescription from "./crew/CrewContent/CrewDescription";

const Crew = function () {
  const [count, setCount] = useState(0);

  const [content, setContent] = useState(0);

  const change = function (index) {
    setCount(index);
  };

  const updateContent = function (index) {
    setContent(index);
  };

  return (
    <div className={classes.crew}>
      {/* <img
        src={background}
        alt="Earth Surface"
        className={classes.crew__background}
      /> */}

      <div className={classes.crew__sub}>
        <span className={classes["crew__sub--num"]}>02</span>
        <span className={classes["crew__sub--title"]}>meet your crew</span>
      </div>

      <div className={classes.crew__content}>
        <div className={classes.crew__images}>
          <CrewImages
            updateContent={updateContent}
            current={content}
            setCount={setCount}
            count={count}
          />
        </div>

        <div className={classes["crew__wrapped-description"]}>
          <div className={classes.crew__buttons}>
            <CrewBullets classes={classes} change={change} content={content} />
          </div>

          <div className={classes.crew__description}>
            <CrewDescription contentNum={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
