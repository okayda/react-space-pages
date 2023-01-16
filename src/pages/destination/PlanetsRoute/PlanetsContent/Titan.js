import { ContentTrans, ListTrans } from "../../PlanetTransitions";

export const TitanDescription = function () {
  return (
    <ContentTrans>
      <h2>titan</h2>

      <p>
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>
    </ContentTrans>
  );
};

export const TitanInformation = function () {
  return (
    <>
      <ListTrans>
        <span>avg. distance</span>
        <h3>1.6 BIL. km</h3>
      </ListTrans>

      <ListTrans>
        <span>est. travel time</span>
        <h3>7 years</h3>
      </ListTrans>
    </>
  );
};
