import { ContentTrans, ListTrans } from "../../PlanetTransitions";

export const MoonDescription = function () {
  return (
    <ContentTrans>
      <h2>moon</h2>

      <p>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
    </ContentTrans>
  );
};

export const MoonInformation = function () {
  return (
    <>
      <ListTrans>
        <span>avg. distance</span>
        <h3>384,400 km</h3>
      </ListTrans>

      <ListTrans>
        <span>est. travel time</span>
        <h3>3 days</h3>
      </ListTrans>
    </>
  );
};
