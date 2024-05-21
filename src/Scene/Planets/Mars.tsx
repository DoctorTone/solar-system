import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Mars = () => {
  const surface = useTexture("./textures/mars.jpg");

  return (
    <Sphere position-x={PLANETS.MARS.distance}>
      <meshStandardMaterial map={surface} />
    </Sphere>
  );
};

export default Mars;
