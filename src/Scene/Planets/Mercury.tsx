import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Mercury = () => {
  const surface = useTexture("./textures/mercury.jpg");

  return (
    <Sphere
      position-x={PLANETS.MERCURY.distance}
      scale={PLANETS.MERCURY.radius}
    >
      <meshStandardMaterial map={surface} />
    </Sphere>
  );
};

export default Mercury;
