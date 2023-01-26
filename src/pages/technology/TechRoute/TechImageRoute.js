import { Route, Switch } from "react-router-dom";

import img1 from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import img2 from "../../../assets/technology/image-spaceport-landscape.jpg";
import img3 from "../../../assets/technology/image-space-capsule-landscape.jpg";

const TechImageRoute = function ({ classes }) {
  return (
    <div className={classes.technology__images}>
      <Switch>
        <Route path="/launch">
          <img src={img1} alt="Launch Vehicle" />
        </Route>

        <Route path="/spaceport">
          <img src={img2} alt="Spaceport" />
        </Route>

        <Route path="/spacecapsule">
          <img src={img3} alt="Space Capsule" />
        </Route>
      </Switch>
    </div>
  );
};

export default TechImageRoute;
