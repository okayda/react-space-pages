import { ContentTrans, ListTrans } from "../../PlanetTransitions";

export const MarsDescription = function () {
  return (
    <ContentTrans>
      <h2>mars</h2>

      <p>
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
    </ContentTrans>
  );
};

export const MarsInformation = function () {
  return (
    <>
      <ListTrans>
        <span>avg. distance</span>
        <h3>225 MIL. km</h3>
      </ListTrans>

      <ListTrans>
        <span>est. travel time</span>
        <h3>9 months</h3>
      </ListTrans>
    </>
  );
};
