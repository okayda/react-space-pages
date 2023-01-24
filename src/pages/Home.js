import classes from "./styles/Home.module.scss";
import background from "../assets/home/background-home-mobile.jpg";

const Home = function () {
  return (
    <div className={classes.home}>
      <img src={background} alt="Earth" className={classes.home__background} />

      <div className={classes.home__content}>
        <span>so, you want to travel to</span>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <a href="#" className={classes.home__explore}></a>
    </div>
  );
};

export default Home;
