import classes from "./styles/Home.module.scss";

import earthVideo from "../assets/video/space1.mp4";
import Video from "../components/Video";
import medium from "../assets/home/background-home-tablet.jpg";
import small from "../assets/home/background-home-mobile.jpg";

import { RouteFade } from "../components/animation/Transitions";

const Home = function () {
  return (
    <RouteFade className={classes.home}>
      <Video classes={classes.home__video} video={earthVideo} />

      <picture>
        <source srcSet={medium} media="(min-width: 660px)" />
        <img src={small} className={classes.home__background} alt="Earth" />
      </picture>

      <div className={classes["home__content-container"]}>
        <div className={classes.home__content}>
          <span>so, you want to travel to</span>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <a href="#" className={classes.home__explore}>
          explore
        </a>
      </div>
    </RouteFade>
  );
};

export default Home;
