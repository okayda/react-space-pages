import classes from "./styles/Home.module.scss";

import desktopBG from "../assets/home/background-home-desktop.jpg";
import tabletBG from "../assets/home/background-home-tablet.jpg";
import mobileBG from "../assets/home/background-home-mobile.jpg";

import { RouteFade } from "../components/animation/Transitions";

const Home = function () {
  return (
    <RouteFade className={classes.home}>
      <picture>
        <source srcSet={desktopBG} media="(min-width: 1100px)" />
        <source srcSet={tabletBG} media="(min-width: 660px)" />
        <img src={mobileBG} className={classes.home__background} alt="Earth" />
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
        <a href="#" className={classes.home__explore}></a>
      </div>
    </RouteFade>
  );
};

export default Home;
