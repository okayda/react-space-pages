import { useState } from "react";
import classes from "./styles/Crew.module.scss";

import cosmosVideo from "../assets/video/space3.mp4";
import Video from "../components/Video";
import medium from "../assets/crew/background-crew-tablet.jpg";
import small from "../assets/crew/background-crew-mobile.jpg";

import CrewImages from "../components/crew/CrewContent/CrewImages";
import CrewBullets from "../components/crew/CrewContent/CrewBullets";
import CrewDescription from "../components/crew/CrewContent/CrewDescription";
import { RouteFade } from "../components/animation/Transitions";

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
    <RouteFade className={classes.crew}>
      <Video classes={classes.crew__video} video={cosmosVideo} />

      <picture>
        <source srcSet={medium} media="(min-width: 400px)" />

        <img src={small} alt="Space" className={classes.crew__background} />
      </picture>

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
    </RouteFade>
  );
};

export default Crew;
