import { ContentTrans, ListTrans } from "../../PlanetTransitions";

export const EuropaDescription = function () {
  return (
    <ContentTrans>
      <h2>europa</h2>

      <p>
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>
    </ContentTrans>
  );
};

export const EuropaInformation = function () {
  return (
    <>
      <ListTrans>
        <span>avg. distance</span>
        <h3>628 MIL. km</h3>
      </ListTrans>

      <ListTrans>
        <span>est. travel time</span>
        <h3>3 years</h3>
      </ListTrans>
    </>
  );
};
