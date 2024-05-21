import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Earth = () => {
  const surface = useTexture("./textures/earth_daymap.jpg");

  return (
    <Sphere position-x={PLANETS.EARTH.distance}>
      <meshStandardMaterial map={surface} />
    </Sphere>
  );
};

export default Earth;
